# Add Admin and Add Support
***

You can quickly add users to your Default Team in [Staff Teams](../dashboard/staff-teams.md) with these commands.

There is a major difference between the two, so let's cover that:

## Add Admin
**Command:** `/addadmin @username`, `/addadmin @role`

Not only does this add the specified user to the Default Team in Staff Teams, but it also gives that user full administrative privileges of the Tickets bot for your server. This is just having admin of the Tickets bot, **not your server**.
- Having admin privileges of the bot means the user will be able to use the [web dashboard](https://dashboard.tickets.bot) fully, and control all the configuration, settings, customization of the bot, as well as see ALL of the tickets/transcripts contained there. *Only give this privilege to those you trust.*

## Add Support
**Command:** `/addsupport @role`
 
 <div class="warning">
  
  **Warning:** Users in Support Teams are now deprecated. Please migrate to roles.
</div>

This adds the specified user to the Default Team in Staff Teams. The only thing they will be able to see on the web dashboard are the tickets where the Default Team has been assigned as a support team.