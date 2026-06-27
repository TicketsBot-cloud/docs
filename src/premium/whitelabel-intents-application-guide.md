# Intents Request Guide
***

This document is to cover the questions you will need to answer if your bot serves more than 10,000 individual users.


## Application Details

### 1. What does your application do? Please be as detailed as possible, and feel free to include links to image or video examples.
```txt
This bot is a custom (white label) version of the Tickets Bot platform (https://tickets.bot), which serves as the hosting provider. Tickets Bot is a well-established Discord ticket and support management system.

The bot provides server administrators with a complete support ticket system. Users open tickets by clicking buttons on customisable panel embeds, which creates a private channel between the user and server staff. Staff can then assist users directly within the ticket channel and manage tickets through both Discord commands and the web dashboard (https://dashboard.tickets.bot).

Core features include:
- Customisable ticket panels (embedded messages with buttons to open tickets)
- Intake forms (questionnaires presented to users when opening a ticket)
- Ticket transcripts (archived logs of ticket conversations, viewable on the web dashboard)
- Tags (pre-written canned responses for staff)
- Team-based staff assignment (routing tickets to specific staff groups)
- Automatic ticket closure on inactivity
- Close requests (allowing staff to request closure with user confirmation)
- Thread-based ticket mode (using Discord threads instead of channels)
- Multi-panel setups for different support categories

Full documentation with screenshots is available at https://docs.tickets.bot
```

### 2. Do you have a public Privacy Policy telling your users about their data usage?
```txt
Yes
```

#### 2.1. Where is your Privacy Policy available?
```txt
The Privacy Policy is publicly available on the Tickets Bot website.
```

#### 2.2. Please share a link to your Privacy Policy.
```txt
https://tickets.bot/privacy
```

## Privileged Gateway Intents

1. Which intents are you applying for, if any?
  - [x] Server Members intent
  - [x] Message Content intent

## Server Members Intent

### 1. Why do you need the Guild Members intent?
```txt
The bot requires the Server Members intent to operate its core ticket management functionality:

1. Permission and role verification: When a user opens a ticket or interacts with a ticket panel, the bot checks their roles and permissions to determine whether they are allowed to open a ticket, access a specific ticket category, or perform staff actions (such as claiming or closing tickets).
2. Team-based staff routing: The bot uses a team system where server administrators assign specific Discord roles to support teams. When a ticket is opened, the bot resolves member role data to route the ticket to the correct team.
3. Ticket transcripts: When archiving ticket conversations, the bot includes participant details (username, avatar, roles) so that staff can identify participants when reviewing transcripts on the web dashboard.
4. Staff management: The bot needs to resolve member information to enforce admin and support role hierarchies, ensuring only authorised staff can access and manage tickets.

Without this intent, the bot cannot resolve member roles or permissions, which are fundamental to every ticket operation.
```

### 2. Please provide links to screenshots and/or videos that demonstrate your use case
```txt
Full documentation with screenshots demonstrating these features is available at:

- Ticket panels and role-based access: https://docs.tickets.bot/setup/panels
- Staff team management: https://docs.tickets.bot/dashboard/staff-teams
- Ticket transcripts: https://docs.tickets.bot/dashboard/transcripts
- General setup and configuration: https://docs.tickets.bot/setup/configuration

Regarding data storage, ticket transcripts and associated data are retained for as long as the server uses the bot, so that server administrators can review past support interactions. Data is deleted upon request through the bot's GDPR compliance tools (the /gdpr command), or when a server owner deletes their transcripts.
```

### 3. Are you storing any API Data off-platform (outside of Discord)?
```txt
Yes.
```
#### 3.1. Are you storing API Data for 30 days or less?
```txt
No.
```

#### 3.2. How do users contact you to request deletion of their activity data?
```txt
Users can request deletion of their data through multiple channels:

1. The /gdpr command: Users can DM the bot and run /gdpr to access an interactive menu for deleting transcripts or anonymising their messages. Server owners can delete all transcripts from their servers, and individual users can anonymise their messages in any transcript they participated in. Requests are processed within 30 days.
2. The Tickets Bot support server: Users can open a support ticket at https://discord.gg/ticketsbot to request data deletion.

Full documentation on the GDPR process is available at https://docs.tickets.bot/commands/gdpr
```

#### 3.3. Are you encrypting the data that you store at rest, as is required by our developer policy?
```txt
Yes. Data is encrypted at rest.
```

## Message Content Intent

### 1. Can users opt-out of having their message content data tracked?
```txt
Yes.
```

### 2. Are you storing message content data off-platform (outside of Discord)?
```txt
Yes.
```
#### 2.1. Are you storing user message content data for 30 days or less?
```txt
No.
```

#### 2.2. How do users contact you to request deletion of their activity data?
```txt
Users can request deletion of their data through multiple channels:

1. The /gdpr command: Users can DM the bot and run /gdpr to access an interactive menu for deleting transcripts or anonymising their messages. Server owners can delete all transcripts from their servers, and individual users can anonymise their messages in any transcript they participated in. Requests are processed within 30 days.
2. The Tickets Bot support server: Users can open a support ticket at https://discord.gg/ticketsbot to request data deletion.

Full documentation on the GDPR process is available at https://docs.tickets.bot/commands/gdpr
```

#### 2.3 Are you encrypting the data that you store at rest, as is required by our developer policy?
```txt
Yes. Data is encrypted at rest.
```

### 3. Will the message content data be used to train machine learning or AI Models?
```txt
No.
```

### 4. Why do you need the Message Content intent?
```txt
The bot requires the Message Content intent to operate its core ticket management functionality:

1. Transcript generation: When a ticket is closed, the bot reads and archives all messages from the ticket channel to create a transcript. These transcripts are stored so that server staff can review past support interactions through the web dashboard. Without message content, transcripts would be empty.
2. Live chat relay: The bot mirrors ticket messages between Discord and the web dashboard in real time, allowing staff to respond to tickets from either platform. This requires reading message content as it is sent.
3. Inactivity detection: The bot monitors ticket channels for new messages to determine inactivity, enabling the automatic ticket closure feature.

Without this intent, the bot cannot read message content in ticket channels, which makes transcript generation, live chat relay, and other core features non-functional.
```

### 5. Please provide links to screenshots and/or videos that demonstrate your use case
```txt
Full documentation with screenshots demonstrating these features is available at:

- Ticket transcripts: https://docs.tickets.bot/dashboard/transcripts
- Tags (canned responses): https://docs.tickets.bot/dashboard/tags
- Thread-based ticket mode: https://docs.tickets.bot/features/thread-mode
- Ticket panel setup: https://docs.tickets.bot/setup/panels
```
