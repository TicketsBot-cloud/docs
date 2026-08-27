# API-Based Form Inputs

API-based form inputs allow "String Select" fields in your ticket forms to fetch their options dynamically from an external API endpoint. Instead of using a fixed list of options, the select menu can show personalised or real-time options based on the user opening the ticket.

This is useful when your options change frequently, depend on external data, or need to be tailored to the individual user. For example, you could show a list of a user's active subscriptions, their linked game characters, or the current set of available support categories from your own system.

## How It Works

1. A user clicks a ticket panel button and the form is displayed
2. For any String Select field with API config enabled, Tickets sends a request to your configured endpoint
3. Your endpoint returns a JSON array of options
4. The options are displayed in the select menu for the user to choose from

If the endpoint is unreachable, returns an error, or returns no options, a fallback message is displayed instead.

## Setting up API-Based Inputs

Head over to the [web dashboard](https://dashboard.tickets.bot), select your server, and navigate to the **Forms** page.

### Step 1: Add a String Select Field

Create a new form or edit an existing one. Add a field with the type **String Select** (or edit an existing String Select field).

### Step 2: Enable API Config

Next to the **Required** toggle, you will see an **API Config** toggle. Turn this on to reveal the API configuration options.

### Step 3: Configure the Endpoint

Fill in the following settings:

| Setting | Description |
| ------- | ----------- |
| **API Endpoint URL** | The URL that Tickets will call to fetch the select options. Supports [placeholders](#placeholders) in the path and query string. |
| **HTTP Method** | The HTTP method to use for the request. Supported methods: GET or POST. |
| **Cache Duration** | How long (in seconds) to cache the response. Set to `0` to disable caching and always fetch fresh options. |
| **No Options Message** | The text shown in the select menu if the API returns no options or encounters an error. Defaults to "No options available". |

The URL must use `http` or `https`, cannot point to `discord.com` or `discord.gg`, and cannot
contain a placeholder in the domain - only in the path or query string.

### Step 4: Add Headers (optional)

If your API requires authentication or custom headers, click to add headers. Each header has three fields:

- **Name**: The header name (e.g. `X-Api-Key`)
- **Value**: The header value (e.g. `your-api-key`). Supports [placeholders](#placeholders).
- **Sensitive**: When enabled, the header value is masked in the web dashboard after saving and cannot be read back. Use this for API keys and other secrets. Press **Replace** to enter a new value.

Some header names are reserved and are dropped before the request is sent, including
`Authorization`, `Cookie`, `Host`, `Content-Type` and anything starting with `X-Forwarded-`,
`X-Proxy-` or `CF-`. Use a custom header name such as `X-Api-Key` for credentials.

### Step 5: Request Body (optional, POST only)

When the method is **POST**, Tickets sends every [placeholder](#placeholders) value as a JSON body:

```json
{
  "guild_id": "1071167333265047653",
  "panel_title": "Billing",
  "user_id": "1325579039888511056",
  "user_locale": "en-US",
  "user_nickname": "Tyler",
  "user_permission_level": "support",
  "user_roles": ["1326631159987175577", "1330545905211932672"],
  "username": "tyler"
}
```

`user_roles` is a JSON array here rather than the comma-separated string the `%user_roles%`
placeholder produces, and is `[]` when the user has no roles. Every other value is a string.

To send a different shape, turn on **Custom body** and write your own JSON:

```json
{
  "discord_id": "%user_id%",
  "server": "%guild_id%",
  "display_name": "%user_nickname%",
  "roles": "%user_roles%"
}
```

A custom body must be valid JSON once placeholders are filled in. The dashboard checks this when
you save. GET requests cannot carry a body.

## API Response Format

Your endpoint must return a JSON array of objects. Each object represents one option in the select menu.

```json
[
  {
    "label": "Option A",
    "value": "option_a",
    "description": "An optional description shown below the label"
  },
  {
    "label": "Option B",
    "value": "option_b"
  }
]
```

### Fields

| Field | Required | Description |
| ----- | -------- | ----------- |
| `label` | Yes | The text displayed in the select menu for this option. |
| `value` | Yes | The value submitted when the user selects this option. |
| `description` | No | Additional text shown below the label in the select menu. |

Options with an empty `label` or `value` are silently skipped.

## Placeholders

These placeholders can be used in the API Endpoint URL, header values, and the request body. The
dashboard lists them under **Available placeholders** next to the endpoint URL.

| Placeholder | Replaced With |
| ----------- | ------------- |
| `%user_id%` | Discord user ID of the person opening the ticket |
| `%username%` | Discord username |
| `%user_nickname%` | Server nickname, falls back to the username |
| `%user_roles%` | Role IDs, comma-separated with no spaces (`123,456`). Empty if the user has no roles |
| `%user_permission_level%` | `everyone`, `support` or `admin` |
| `%user_locale%` | The user's Discord language, as a locale code (`en-US`) |
| `%guild_id%` | Discord server ID |
| `%panel_title%` | Title of the panel the ticket is being opened from |

Options are fetched before the ticket exists, so there is no ticket or channel placeholder.

## Error Handling

If any of the following occur, the select menu will display a single option containing the **No Options Message** text:

- The API endpoint is unreachable or times out
- The API returns a non-success HTTP status code
- The API returns an empty array
- The API returns a response that is not valid JSON
- A custom request body does not produce valid JSON once placeholders are filled in

The rest of the form still opens normally; only the affected select menu shows the fallback.

## Example

Suppose you run a game server and want users to select one of their linked characters when opening a support ticket. You could configure:

- **API Endpoint URL**: `https://api.example.com/characters?discord_id=%user_id%`
- **HTTP Method**: GET
- **Cache Duration**: 60 (cache for one minute)
- **No Options Message**: "No linked characters found"

With a header:

- **Name**: `X-Api-Key`
- **Value**: `your-api-key`
- **Sensitive**: Enabled

Your API would return:

```json
[
  {
    "label": "SwordMaster42",
    "value": "char_001",
    "description": "Level 85 Warrior"
  },
  {
    "label": "MageOfDoom",
    "value": "char_002",
    "description": "Level 72 Mage"
  }
]
```

The user would then see a select menu with their two characters listed.

## Security

- All API requests are made through a secure proxy. Requests are not sent directly from the Tickets infrastructure to your endpoint. Requests to private network addresses are blocked.
- Reserved headers (`Authorization`, `Cookie`, `Host`, `User-Agent`, `Content-Type` and proxy-related names) are filtered out before the request is sent.
- Sensitive header values are masked in the web dashboard and are not returned by the API, so they cannot be read after being saved.
- Placeholders are rejected in the domain portion of the endpoint URL, so a value filled in at runtime cannot redirect the request to an unapproved host.
- Placeholder values are escaped for the context they appear in, so user-supplied text cannot inject extra query parameters, header lines or JSON fields.

## Related

- [Forms](/dashboard/forms) for general form setup and configuration
- [Building Integrations](../integrations/building-integrations) for another way to pull external data into tickets using welcome message placeholders
