# Placeholders

:::info Not Every Placeholder Works Everywhere
Support differs by placeholder type and by field. Check the **Fields** column, then [Where They Work](#where-they-work).
:::

## Welcome Message Placeholders

### Built-in

#### User

| Placeholder | Fields | Description |
| ----------- | ------ | ----------- |
| `%user%` | Text only | Mentions the user, will display nickname if set. |
| `%username%` | All | Display the user's name. |
| `%nickname%` | All | Display the user's server nickname. |
| `%user_id%` | All | Display the user's numeric ID. |
| `%avatar_url%` | URL only | The user's avatar image, falling back to Discord's default avatar. The dashboard preview shows the default avatar in its place. |
| `%discord_account_creation_date%` | Text only | The date and time that the user's Discord account was created. |
| `%discord_account_age%` | Text only | How long ago the user's Discord account was created. |

#### Ticket

| Placeholder | Fields | Description |
| ----------- | ------ | ----------- |
| `%ticket_id%` | All | Display the ticket's numeric ID. |
| `%channel%` | Text only | Mention the channel. |

#### Server

| Placeholder | Fields | Description |
| ----------- | ------ | ----------- |
| `%server%` | All | Display the server's name. |
| `%ticket_limit%` | All | Display the server's ticket limit. |

#### Statistics

| Placeholder | Fields | Description |
| ----------- | ------ | ----------- |
| `%open_tickets%` | All | Display the number of open tickets in the server. |
| `%total_tickets%` | All | Display the number of tickets that have ever been opened in the server. |
| `%user_open_tickets%` | All | Display the number of tickets that the user currently has open in the server. |
| `%user_total_tickets%` | All | Display the number of tickets that the user has ever opened in the server. |
| `%rating_count%` | All | Amount of feedback ratings you have received. |
| `%average_rating%` | All | Displays server's average feedback rating. |
| `%first_response_time_weekly%`&nbsp;<span class="premium-marker">*</span> | All | Staff average first response time to tickets this week. |
| `%first_response_time_monthly%`&nbsp;<span class="premium-marker">*</span> | All | Staff average first response time to tickets this month. |
| `%first_response_time_all_time%`&nbsp;<span class="premium-marker">*</span> | All | Staff average first response time to tickets since the beginning. |

:::info Premium Placeholders
Rows marked with <span class="premium-marker">*</span> require [premium](https://tickets.bot/premium).
:::

#### Date & Time

| Placeholder | Fields | Description |
| ----------- | ------ | ----------- |
| `%time%` | Text only | Display the current time. |
| `%date%` | Text only | Display today's date. |
| `%datetime%` | Text only | Display the current date and time. |
| `%timestamp%` | All | Display the current Unix timestamp as a raw number. |
| `%date_days:N%` | Text only | Display a date `N` days from now. |
| `%date_days:N:FORMAT%` | Text only | Display a date `N` days from now with Discord format. |
| `%date_weeks:N%` | Text only | Display a date `N` weeks from now. |
| `%date_weeks:N:FORMAT%` | Text only | Display a date `N` weeks from now with Discord format. |
| `%date_months:N%` | Text only | Display a date `N` months from now. |
| `%date_months:N:FORMAT%` | Text only | Display a date `N` months from now with Discord format. |
| `%date_timestamp:UNIX%` | Text only | Convert a Unix timestamp to a date. |
| `%date_timestamp:UNIX:FORMAT%` | Text only | Convert a Unix timestamp to a date with Discord format. |
| `%timestamp_days:N%` | All | Display the raw Unix timestamp `N` days from now. |

**N** - Number of days/weeks/months

**UNIX** - Unix timestamp

**FORMAT** - Discord format code: `d` (short date), `D` (long date), `t` (short time), `T` (long time), `f` (short date/time, default), `F` (long date/time), `R` (relative)

### Where They Work

Welcome message placeholders work in the message sent when a ticket is opened, and in tags.

**All** - every part of the message: the content, and the embed's description, title, author name, footer text and field names and values.

**Text only** - the message content, the embed description and embed field values.

**URL only** - `%avatar_url%`, as the whole value of Title URL, Author URL, Author Icon URL, Image URL, Thumbnail URL or Footer Icon URL. On the icon and image fields the avatar shows as a picture; on Title URL and Author URL, which are links rather than images, clicking the title or the author name opens the avatar.

Placeholders provided by your integrations behave like **All**. The title, author name, footer text and field names are capped at Discord's limits once the placeholders have been filled in - 256 characters for a title, author name or field name, and 2,048 for footer text - and anything past that is trimmed off.

## Custom Naming Scheme Placeholders

### Ticket

| Placeholder | Description |
| ----------- | ----------- |
| `%id%` | Display the unique ticket ID. |
| `%id_padded%` | Display the unique ticket ID to 4 places. |
| `%claimed%` | Display whether the ticket is claimed or unclaimed. |
| `%claim_indicator%` | Display 🟢 if claimed or 🔴 if unclaimed. |
| `%claimed_by%` | Display the claimer's username. |

### User

| Placeholder | Description |
| ----------- | ----------- |
| `%username%` | Display the user's name. |
| `%nickname%` | Display the user's nickname. |

### Date & Time

| Placeholder | Description |
| ----------- | ----------- |
| `%date%` | Display the current date in short format. |
| `%date:FORMAT%` | Display the current date with custom format. |
| `%date_days:N%` | Display a date `N` days from now. |
| `%date_days:N:FORMAT%` | Display a date `N` days from now with custom format. |
| `%date_weeks:N%` | Display a date `N` weeks from now. |
| `%date_weeks:N:FORMAT%` | Display a date `N` weeks from now with custom format. |
| `%date_months:N%` | Display a date `N` months from now. |
| `%date_months:N:FORMAT%` | Display a date `N` months from now with custom format. |
| `%date_timestamp:UNIX%` | Convert a Unix timestamp to a date. |
| `%date_timestamp:UNIX:FORMAT%` | Convert a Unix timestamp to a date with custom format. |

**N** - Number of days/weeks/months

**UNIX** - Unix timestamp

**FORMAT** - Custom format using tokens: `yyyy` (4-digit year), `yy` (2-digit year), `mm` (zero-padded month), `m` (single-digit month), `dd` (zero-padded day), `d` (single-digit day). Use any separator, e.g. `yyyy-mm-dd`, `d/m/yy`, `dd.mm.yyyy`. Defaults to short format (`jan19`) if not specified.

## Integrations

Custom integration placeholders are defined by each integration's author. After you add an integration to your server, its available placeholders are listed on the integration's view page in the web dashboard. See the [building integrations](../integrations/building-integrations) page for more information.

## API-Based Form Inputs

String Select fields that fetch their options from an external API have their own set of placeholders. See the [API-based form inputs](../features/api-form-inputs#placeholders) page for the list.

## Escaping Placeholders

To display a placeholder as literal text instead of having it replaced, use backslashes: `\%placeholder\%`
