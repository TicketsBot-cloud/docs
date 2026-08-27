# Cloudflare Workers

[Cloudflare Workers](https://workers.cloudflare.com/) let you run serverless JavaScript at the edge. They are optional - you do **not** need a worker to create a [custom integration](./building-integrations). Any HTTPS endpoint that returns JSON works.

## When a Worker Helps

Tickets maps placeholders from exact JSON keys using dot paths. It cannot search arrays or reshape responses for you.

If an upstream API returns data in an awkward shape - for example a list of players you must search by Discord ID - a small worker can call that API, pick the right record, and return a flat JSON object your integration placeholders can read:

```json
{
  "username": "Username",
  "steam_profile_url": "https://steamcommunity.com/profiles/76561198000000000"
}
```

Returning full URLs as field values (rather than IDs alone) lets server owners paste a single placeholder into welcome messages.

If you deploy a worker, register its URL as the **request URL** when creating your custom integration in the web dashboard. Your worker should accept the [ticket-open request format](./building-integrations#ticket-open-requests) described in Building Integrations (POST with `user_id`, `guild_id`, and so on).

Workers can use [key-value storage](https://developers.cloudflare.com/workers/learning/how-kv-works/) to cache slow-changing data and reduce upstream API usage.

The [Cloudflare Workers docs](https://developers.cloudflare.com/workers/) cover deployment and runtime APIs.

## Hosting a Public Integration with Tickets

This is separate from running your own worker for a **custom** integration.

If you want Tickets to **host** an integration as a first-party, publicly listed option (maintained in our infrastructure rather than only on your own URL), open a pull request on the [TicketsBot integrations repository](https://github.com/TicketsBot-cloud/integrations).

Accepted workers in that repo must follow **[INTEGRATION_STANDARDS.md](https://github.com/TicketsBot-cloud/integrations/blob/main/INTEGRATION_STANDARDS.md)** - that guide is only required for submissions there, not for ordinary dashboard integrations. It covers auth guards, Sentry, `/validate`, caching, response conventions, and `wrangler.toml` setup.

Before contributing, read the repository [README](https://github.com/TicketsBot-cloud/integrations/blob/main/README.md) for deploy workflow and proxy routing. Reference implementations live under [`bloxlink/`](https://github.com/TicketsBot-cloud/integrations/tree/main/bloxlink) and [`fivem/`](https://github.com/TicketsBot-cloud/integrations/tree/main/fivem).

We review hosted integration PRs before they go live. For help, ask in our [Discord server](https://discord.gg/ticketsbot).
