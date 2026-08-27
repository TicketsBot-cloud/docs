# List of Commands

| General Commands | Description |
| ---------------- | ----------- |
| `/about` | Information about the bot. |
| `/gdpr (lang)` | Request deletion or anonymization of your data under GDPR. [Learn more.](./gdpr) |
| `/help` | Displays a list of commands. |
| `/invite` | Provides an invite link for the bot. |
| `/jumptotop` | Displays a button to click and will automatically scroll to the top of the ticket. |
| `/vote` | Gives a link to vote for free premium benefits. |

| Ticket Commands | Description |
| --------------- | ----------- |
| `/add (user_or_role)` | Add a user or role to an existing ticket. |
| `/claim` | Assigns a single staff member to the current ticket. |
| `/close (reason)` | Closes the current ticket. |
| `/closerequest (close_delay) (reason)` | Sends a message asking the ticket opener to approve or deny closing of the ticket. [Learn more.](../features/close-requests) |
| `/edit` | Edits settings for the current ticket, such as its labels. |
| `/on-call` | Toggles whether the user of command will be added and pinged to all new thread mode tickets. |
| `/open (panel)` | Opens a new ticket. |
| `/remove (user_or_role)` | Removes a user or role from the current ticket. |
| `/rename (name)` | Renames the current ticket. |
| `/reopen (ticket_id)` | Reopens a thread ticket that was previously closed. |
| `/switchpanel (panel)` | Switches the current ticket to another ticket panel - changing the channel category, support teams, etc. |
| `/transfer (user)` | Transfers a claimed ticket to another user. |
| `/unclaim` | Removes the claim on the current ticket. |
| `/notes` | Creates a private thread for staff to talk in, only works in channel mode. |
| `Start Ticket` (message command) | Right-click a message → `Apps` → `Start Ticket` to open a ticket seeded from that message. |

| Setting Commands | Description |
| ---------------- | ----------- |
| `/addadmin (user_or_role)` | Grants a user or role admin privileges of the bot. [Learn more.](./add-admin-support#add-admin) |
| `/addsupport (role)` | Adds a role as a support representative. [Learn more.](./add-admin-support#add-support) |
| `/autoclose configure` | Edit autoclose related settings. |
| `/autoclose exclude` | Excludes the current ticket from being automatically closed. |
| `/blacklist (user_or_role)` | Toggles whether users are allowed to interact with the bot. |
| `/language` | Changes the language the bot messages are displayed in. |
| `/panel` | Provides a link to create a ticket panel for users to open tickets. |
| `/premium` | Activates premium benefits after purchasing (choose patreon on select menu). |
| `/removeadmin (user_or_role)` | Revokes a user's or role's admin privileges. |
| `/removesupport (user_or_role)` | Revokes a role's support representative privileges. |
| `/setup` | Runs a basic automatic setup - creates support and admin roles, a transcripts channel, and a ticket category. |
| `/viewstaff` | Lists the staff members and roles (admin or support). |

| Tag Commands | Description |
| ------------ | ----------- |
| `/managetags add (id) (content)` | Adds a new tag. |
| `/managetags delete (id)` | Deletes a tag. |
| `/managetags list` | Lists all existing tags. |
| `/tag (id)` | Sends a message snippet. |

| Statistics Commands | Description |
| ------------------- | ----------- |
| `/stats user (user)` | Displays statistics about the selected user. |
| `/stats server` | Displays statistics about the server. |

| Knowledge Base Commands | Description |
| ----------------------- | ----------- |
| `/kb search (query)` | Search knowledge base articles by keyword. [Learn more.](../dashboard/knowledge-base) |
| `/kb browse (category)` | Browse knowledge base articles by category. |
| `/kb send (article)` | Sends a knowledge base article as a message in the current channel. |
