# Thread Mode
***

We now support using private threads for tickets! This is a new *optional* mode for the bot that drastically changes how tickets operate.	

Instead of the whole support team being added to a ticket when it is opened, the thread starts out with *no staff members*. A button is then sent to your *ticket notification channel* which staff members click to be added to the thread:

![Example](/img/ticket_notification.webp)

## Channel vs Thread Comparison
|Channels|Threads|
|--|--|
|Can be sorted by category|Attached to the Ticket Panel channel|
|Can move between categories with `/switchpanel` command|Cannot be moved|
|Tickets cannot be reopened once closed|Tickets can be reopened|
|Transcripts only viewable on dashboard|Transcripts viewable on dashboard, and within Discord|
|Limited to 500 channels total, and only 50 channels in a single category [^note1]|1000 open threads, unlimited closed threads|
|All staff on support team added to ticket | Staff members must press button to join ticket [^note2]|
|Tickets can be claimed |Ticket claiming is unsupported [^note3]|
|`/switchpanel` changes the ticket panel of an existing ticket |`/switchpanel` is unsupported [^note4]|
|No concept of on-call staff|Staff can be marked as on-call to automatically be pinged and added to tickets|
|No spaces in channel names|Spaces in channel names permitted: e.g. `Ticket 1234`
|Can use /notes for a private thread for staff to talk in|Cannot use /notes due to Discord limitation|

[^note1]: This is a Discord imposed limitation for all servers, not the Tickets bot

[^note2]: See workaround in FAQ [here](#can-the-support-team-be-added-to-thread-automatically)

[^note3]: Staff members must individually click a button to join the ticket, so the behaviour is replicated

[^note4]: This is due to Discord's permission management internals being very different for threads

## On-Call
Thread mode introduces a new command: `/on-call`. When a staff member runs this command, they will be assigned roles marking them as on call, until they run the command again. When a new ticket is opened, the on call roles are pinged in the ticket, instantly adding all currently on call staff members to the ticket.

> **Note:** When a staff member becomes on call, they will **not** be added to any existing tickets. They must join them via the ticket notification channel as normal.

## How do I enable thread mode?
You can enable threads directly within Discord, by using the command `/setup use-threads`, like so:

![Use Threads Command](/img/threads_command.webp)

Alternately, you can enable threads via the settings page of the dashboard:

![Settings page](/img/threads_enable_dashboard.webp)

## FAQ
### Which mode should I use?
If you run a server with a small team, we would likely recommend sticking with channel mode. If you run a server with a heavy focus on 1-on-1 support or claiming, we would recommend thread mode. Nevertheless, if you require any of the additional features like reopening tickets, you must use thread mode.

### Can the support team be added to thread automatically?
Although it is intended for the support team to click the `Join Ticket` button in the embed message of the `Ticket Notification` channel, it is possible to add support staff automatically. This requires those individuals/roles to be in the `Support Team` & be listed in the `Mention On Open` input for the `Ticket Panel`.

### Will channel mode be removed?
No, both modes will be supported forever. Thread mode is completely optional.

### My users can't type in their support tickets!
You must grant the "Send Messages in Threads" permission to your @everyone role in the **panel channel**:

![Edit channel](/img/edit_channel.webp)

![Grant send messages](/img/grant_send_messages_in_thread.webp)

