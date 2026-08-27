# Support Staff

Now that the ticket system is in place, Tickets bot needs to know which of your staff should have access to the tickets (and the web dashboard settings - if desired.)

> **There are two scenarios for how to setup support staff:**
> - Staff members handle **SPECIFIC** tickets
> - Staff members handle **ALL** tickets

## Staff Members Handle Specific Tickets

> Setting the support staff in this scenario can only be accomplished via the [web dashboard](https://dashboard.tickets.bot). A guide on this can be found in the [staff teams guide](../dashboard/staff-teams).

## Staff Members Handle All Tickets

> Setting the support staff in this scenario is recommended via slash commands.
<!-- A quick explanation of which to use, and why, can be found on the [add admin support](../commands/add-admin-support) page. -->

**Command:** `/addadmin @username` or `/addadmin @role`

Not only does this add the specified user to the Default Team in Staff Teams, but it also gives that user full administrative privileges of the Tickets bot for your server. This is just having admin of the Tickets bot, **not your server**.

:::danger Only Grant to Trusted Users
Only give this privilege to those you trust.
:::

Having admin privileges of the bot means the user will be able to use the [web dashboard](https://dashboard.tickets.bot) fully, and control all the configuration, settings, customisation of the bot, as well as see ALL of the tickets/transcripts contained there.

**Command:** `/addsupport @role`

This adds the specified role to the Default Team in Staff Teams. The only thing the users with this role will be able to see on the web dashboard are the tickets that the Default Team has been assigned as a support team.
