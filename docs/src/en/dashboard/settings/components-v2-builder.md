# Components v2 Builder

Components v2 is an alternative way to build the messages your panels and multi-panels send. Instead of filling in the classic embed's fixed fields, you build the message from blocks, with a live preview of what will be posted.

:::tip Premium Feature
Components v2 requires [Premium](https://tickets.bot/premium).
:::

## Where You Can Use It

You can choose Classic or Components v2 separately for each of these messages:

- The panel message, the embed with a button that opens a new ticket. Configured in the [Panel Appearance](/dashboard/ticket-panels#panel-appearance) section of the panel editor.
- The welcome message, sent inside a ticket channel as soon as it opens. Configured in the [Welcome Message](/dashboard/ticket-panels#welcome-message) section of the panel editor.
- The multi-panel message, which lets someone pick which panel to open a ticket against from a dropdown or row of buttons. Configured in the [Panel Settings](/dashboard/multi-panels#panel-settings) section of the multi-panel editor.

## Switching to Components v2

Open the relevant section listed above and set **Message format** to **Components v2**. The embed fields are replaced with the block builder. To start from your classic embed, click **Convert from classic**. Your classic embed is kept while you use Components v2, and the blocks you last saved in Components v2 are kept when you save in Classic, so you can switch back either way.

## Block Types

File blocks are not available.

### Container

A bordered box that groups other blocks together. Give it an accent colour, or mark it as a spoiler to blur its contents until a reader clicks to reveal them.

### Section

One to three text blocks shown beside a small image (thumbnail) or a button. Choose which with **Image**, **Link button** or, in a panel or multi-panel message, **Panel button**.

### Button Row

A row of up to 5 buttons. Each button is either a **Link** button, which opens a URL, or, in a panel or multi-panel message, a **Ticket panel** button, which opens a ticket.

### Text Display

A block of markdown-formatted text, like the classic embed's description. [Placeholders](/miscellaneous/placeholders) can be used here, in a Section's text and in link button labels, but only in the welcome message. In link button labels, only placeholders marked **All** work, as in an embed title.

### Media Gallery

One to 10 images shown together in a gallery layout.

### Separator

A gap between blocks, with an optional dividing line and Small or Large spacing.

## Adding, Removing, and Reordering Blocks

Add a block with **+ Add block**. Reorder blocks with the up and down arrow buttons, and delete them with the bin button.

To nest a block in a Container, choose the Container in the block's **Move into container...** menu and click **Move**. **Move out of container** returns it to the top level.

## Placing Panels in a Multi-Panel

In a Components v2 multi-panel, you decide where each selected panel appears:

- A **Button Row** can hold ticket panel buttons as well as link buttons. Choose **Ticket panel** on a button, then pick the panel.
- A **Section** can have a ticket panel's button beside its text. Choose **Panel button**, then pick the panel.
- A **Panel Select** block places the panel dropdown. It lists every panel you have not placed as a button, and uses the multi-panel's placeholder text. It is only available when **Use Dropdown Menu** is enabled in the multi-panel's [Ticket Settings](/dashboard/multi-panels#use-dropdown-menu), and only one can be placed.

Panels you do not place are added at the end of the message as buttons or a dropdown, depending on whether **Use Dropdown Menu** is enabled. If the message has a Panel Select block, they are listed in it instead and nothing is added at the end.

## Automatic Elements

The bot adds its own elements to every message:

- The panel message gets its open ticket button at the end, unless you place it yourself with **Panel button** or **Ticket panel**.
- The welcome message gets its **Close**, **Close with Reason** and, in channel mode, **Claim** buttons, unless they are hidden in the panel's [Closing and Claiming](/dashboard/ticket-panels#closing-and-claiming) settings.
- The multi-panel message gets buttons or a dropdown for every panel you have not [placed yourself](#placing-panels-in-a-multi-panel), matching the [display mode](/dashboard/multi-panels#use-dropdown-menu) you have chosen.

They cannot be edited or removed, are marked as added automatically in the live preview, and count towards the [component limit](#limits).

## Limits

- A message can hold 40 components in total. This includes the components the bot adds itself: the open ticket button on a panel message; the Close, Close with Reason and Claim buttons on a welcome message, along with space for five form answers that is kept even if the panel has no form; or the panel buttons or dropdown on a multi-panel.
- Text across the whole message, including Section text, is limited to 4,000 characters in total. Link button labels do not count towards this limit.
- A Media Gallery holds 1 to 10 images.
- Image and link URLs must be full `http://` or `https://` addresses with a domain name, without spaces or a username and password, and at most 512 characters.

## Welcome Message Details

A few things work differently when the welcome message uses Components v2:

- Enter `%avatar_url%` as the whole image URL of a Section thumbnail or a Media Gallery image, and the bot replaces it with the avatar of the user who opened the ticket.
- If the panel has a [form](/dashboard/forms), the answers are added to the end of the welcome message as text blocks, rather than sent in a separate embed. They are not shown in the live preview. Long answers are trimmed so that the text across the whole message stays within the 4,000 character limit, and very long welcome text is trimmed to leave room for each answer.
- `/switchpanel` leaves the welcome message as it is if the ticket's welcome message uses Components v2, or if the new panel's welcome message does while your subscription is active.

## Switching a Live Panel Message Back to Classic

If a panel or multi-panel message posted with Components v2 is switched back to Classic, the bot deletes it and posts a new one, because Discord cannot remove Components v2 from a message. The new message loses the old one's position in the channel and its reactions. Switching to Components v2 edits the message in place.

Changing the welcome message format only affects tickets opened afterwards.

## If Your Subscription Ends

If your server's Premium or Whitelabel subscription ends, panel and multi-panel messages already posted with Components v2 stay in place and keep opening tickets. As with Classic panels, a server over the [free limit of 3 panels](/dashboard/ticket-panels#the-panels-page) keeps only its 3 oldest panels enabled. The others stop opening tickets, including from a multi-panel, and cannot be edited until you reactivate Premium or delete another panel.

New tickets receive the classic welcome message while the subscription is inactive.

To save changes to a panel or multi-panel while the subscription is inactive, switch every message on it that uses Components v2 back to **Classic**. A posted message that used Components v2 is then reposted, as described above.
