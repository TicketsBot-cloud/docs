# Integrations

Integrations let you pull data from an external HTTP API into ticket welcome messages. When someone opens a ticket, Tickets calls your endpoint, reads the JSON response, and substitutes configured `%placeholders%` in the welcome message.

## How It Works

1. An **integration author** creates an integration in the [web dashboard](https://dashboard.tickets.bot) by navigating to **Dashboard** > your server > **Integrations** (in the Setup sidebar group). They configure a request URL, optional secrets, and placeholder mappings.
2. A **server admin** adds the integration to their server and supplies any required secret values (for example, an API key).
3. When a ticket is opened, Tickets sends an HTTP request to the integration URL (via the [secure-proxy](https://github.com/TicketsBot-cloud/tickets.rs/tree/master/secure-proxy)), parses the JSON response, and fills in welcome-message placeholders.

All outbound integration traffic is proxied for security. Requests should reach your server from Cloudflare (AS13335), not directly from Tickets nodes.

## Who This Chapter Is For

| Audience | Start here |
| -------- | ---------- |
| Server admins installing a community integration | [Building Integrations](./building-integrations): activate and configure sections |
| Developers building a custom HTTP endpoint | [Building Integrations](./building-integrations) |
| Developers who need to transform an awkward API (optional) | [Cloudflare Workers](./cloudflare-workers) |
| Teams asking Tickets to host a first-party integration | [Cloudflare Workers](./cloudflare-workers#hosting-a-public-integration-with-tickets), then PR on GitHub |

## Pages in This Chapter

| Page | What it covers |
| ---- | -------------- |
| [Building Integrations](./building-integrations) | Creating, publishing, and installing custom integrations through the web dashboard, including the HTTP request contract your server must implement |
| [Cloudflare Workers](./cloudflare-workers) | Optional serverless adapters for complex APIs, plus how to submit a worker for Tickets to host publicly |

## Limits

| Limit | Value |
| ----- | ----- |
| Integrations created per user | 5 |
| Active integrations per server | 5 |
| Secrets per integration | 5 |
| Request headers per integration | 5 |
| Placeholders per integration | 15 |
