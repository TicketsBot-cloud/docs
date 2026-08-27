# /closerequest

Sends a close request to the ticket opener, asking them to confirm the ticket can be closed. The user sees Accept and Deny buttons in Discord.

## Syntax

```
/closerequest [reason] [close_delay]
```

| Parameter | Required | Description |
|---|---|---|
| `reason` | No | A reason for closing the ticket, shown to the user. |
| `close_delay` | No | Time in hours after which the ticket closes automatically if the user does not respond. |

If no `close_delay` is specified, the ticket stays open until the user accepts or denies the request.

:::info Excluded Tickets Ignore Delays
If the ticket is excluded from auto-close via `/autoclose exclude`, close request delays will not apply, even if provided.
:::

For a full explanation of close requests, including dashboard usage and bulk actions, see the [Close Requests](/features/close-requests) page.
