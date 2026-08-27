# Add Admin / Support

You can quickly add users to your default team in [staff teams](../dashboard/staff-teams) with these commands.

There is a major difference between the two, so let's cover them:

## Add Admin

**Command:** `/addadmin @username`, `/addadmin @role`

Not only does this add the specified user to the default team in staff teams but it also gives that user full administrator privileges of the Tickets bot for your server. This is just for obtaining administrator privileges for the Tickets bot itself, **not your server**.

:::warning Grants Full Bot Control
Having these privileges of the bot means the user will be able to use all features of the [web dashboard](https://dashboard.tickets.bot) and control all the configuration, settings, and customisation of the bot as well as see **ALL** of the tickets/transcripts contained there. ***Only give this privilege to those you trust.***
:::

## Add Support

**Command:** `/addsupport @role`

:::warning Deprecated: Use Roles Instead
Users in support teams are now deprecated. Please migrate to roles.
:::

This adds the specified role to the default team in staff teams. The only thing the users with this role will be able to see on the web dashboard are the tickets that the default team has been assigned as a support team.
