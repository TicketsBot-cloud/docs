# Configuring the Bot: Permissions
***

You can configure the Bot's permissions in two ways.

If you give the bot **Administrator** permissions it will just "work" and won't need much permission configuration.
If you don't want to give the Bot Administrator access to your server then you will need to do a bunch of Permission configurations.

This section will guide you through configuring the Bot's Permissions when using **Administrator** Permissions and without using **Administrator** permissions.


## Using Administrator permissions: **[Recommended]**
Give the bot `Administrator` in the integrated bot role. 

Channel Mode: You're done!

[Thread Mode](../features/thread-mode.md): Give the @everyone role the `Send Messages in Threads` permission in the overrides for any channel with a ticket panel in it. This allows non-staff to type in their ticket threads. *Note: The "Send Messages" permission is not needed!*

That's it! The next step is  [Bot Configuration](./configuration.md)


## Using seperate Permissions: [Complicated]


Not using Administrator permissions makes the Setup more complicated. You will need to manually give the Bot it's permissions on the `Role`, `The Panel Channel(s)`, `The Transcipts channel`, `Ticket category(s)` and `Ticket Notification Channel (when using Threads)`.

You will need to set each of these Permissions to `True` in each of the above named sections so that the bot can work:

* `View Channels`
* `Manage Channels`
* `manage roles`
* `Manage Webhooks`
* `Send Messages`
* `Send Messages in Threads`
* `Create Public Threads`
* `Create Private Threads`
* `Embed Links`
* `Attach Files`
* `Add Reactions`
* `Use External Emojis`
* `Mention @everyone`
* `Manage Threads`
* `Read Message History`
* `Use Application Commands`


When using [Thread mode](../dashboard/settings/thread-mode.md) you will also need to give your Users the `Send messages in Threads` Permission in your Panel channel so that they can write in Tickets.

The `/checkpermissions` command is available to [Bot Admins](../commands/add-admin-support.md) and will report any missing permissions in the bot's role and any channel or category it is trying to access.

This command will only report missing permissions on ticket functions that have been set. If you haven't set up your bot yet, it *will not* tell you what you're missing *except* in the bot's role. Run the command again after you've set your bot up: panels created, transcript channel set, etc.

If there are no errors listed after setting up your bot, your permissions are set properly.

Now we can start configuring the rest of the Bot: [Bot Configuration](./configuration.md)

> **Note:** You can find an explanation of each permission and it's uses in: [Permission Explained](../miscellaneous/permissions-explained.md)