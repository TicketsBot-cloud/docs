# Components v2 Builder

Components v2 is an alternative way to build the messages your panels and multi-panels send. Instead of filling in the classic embed's fixed fields (title, description, colour, fields, footer, image), you assemble the message yourself from a free-form set of blocks that can be added, removed, and reordered in any combination, with a live preview showing what will be posted to Discord as you build.

:::tip Premium Feature
Components v2 requires [Premium](https://tickets.bot/premium).
:::

## Where You Can Use It

You can choose Classic or Components v2 separately for each of these messages:

- The panel message, the embed with a button that opens a new ticket. Configured in the [Panel Appearance](/dashboard/ticket-panels#panel-appearance) section of the panel editor.
- The welcome message, sent inside a ticket channel as soon as it opens. Configured in the [Welcome Message](/dashboard/ticket-panels#welcome-message) section of the panel editor.
- The multi-panel message, which lets someone pick which panel to open a ticket against from a dropdown or row of buttons. Configured in the [Panel Settings](/dashboard/multi-panels#panel-settings) section of the multi-panel editor.

## Switching to Components v2

Open the relevant section listed above and set **Message format** to **Components v2**. The fixed embed fields are replaced with the block builder and its live preview. Your classic embed is kept while you use Components v2, so switching back to **Classic** restores the embed fields you had set. In the same way, your blocks are kept when you save in Classic, so switching back to **Components v2** restores them.

## Block Types

File blocks are not available.

### Container

A bordered box that groups other blocks together. Give it an accent colour to make it stand out, or mark it as a spoiler to blur its contents until a reader clicks to reveal them.

### Section

One to three text blocks shown beside a small image (thumbnail) or a button. The image or button is required. Use **Add text** to add further text blocks, and choose what goes beside them with **Image**, **Link button** or, in a multi-panel, **Panel button**. A link button opens a URL when clicked. A panel button opens a ticket for the panel you choose. Useful for a short highlighted callout within the message.

### Button Row

A standalone row of up to 5 buttons. Each button is either a **Link** button, which opens a URL when clicked, or, in a multi-panel, a **Ticket panel** button, which opens a ticket for the panel you choose. Use **Add button** to add another button to the row. Use this when you want several buttons presented together, rather than the single button that can sit beside a Section's text.

### Text Display

A block of markdown-formatted text, the closest equivalent to the classic embed's description field. Supports the same formatting as elsewhere in Tickets, including bold, italic, links, and mentions. [Placeholders](/miscellaneous/placeholders) can be used here, in a Section's text and in link button labels, but only in the welcome message.

### Media Gallery

One to 10 images shown together in a gallery layout.

### Separator

A gap between blocks, with an optional dividing line and Small or Large spacing, useful for visually breaking up a longer message.

## Adding, Removing, and Reordering Blocks

Add a new block with **+ Add block**. The menu groups blocks under Layout (Container, Section, Separator, Button Row and, in a multi-panel, Panel Select) and Content (Text Display and Media Gallery). Blocks can be reordered using the up and down arrow buttons, and deleted using the bin button.

Containers can hold other blocks: choose a Container in a block's **Move into container...** menu and click **Move** to nest the block inside it, or use its **Move out of container** button to return it to the top level of the message.

## Placing Panels in a Multi-Panel

In a Components v2 multi-panel, you decide where each selected panel appears:

- A **Button Row** can hold ticket panel buttons as well as link buttons. Choose **Ticket panel** on a button, then pick the panel.
- A **Section** can have a ticket panel's button beside its text. Choose **Panel button**, then pick the panel.
- A **Panel Select** block adds the panel dropdown and can be placed anywhere in the layout. It lists every panel you have not placed as a button, and uses the placeholder text configured for the multi-panel. It is only available when **Use Dropdown Menu** is enabled in the multi-panel's [Ticket Settings](/dashboard/multi-panels#use-dropdown-menu), and only one can be placed.

Panels you do not place are added at the end of the message as buttons or a dropdown, depending on whether **Use Dropdown Menu** is enabled. If the message has a Panel Select block, they are listed in it instead and nothing is added at the end.

## Automatic Elements

Whichever message you are editing, the bot adds its own interactive elements on top of whatever you build:

- The panel message always gets its open ticket button.
- The welcome message gets its **Close**, **Close with Reason** and **Claim** buttons, unless they are hidden in the panel's [Closing and Claiming](/dashboard/ticket-panels#closing-and-claiming) settings.
- The multi-panel message gets buttons or a dropdown for every panel you have not [placed yourself](#placing-panels-in-a-multi-panel), matching the [display mode](/dashboard/multi-panels#use-dropdown-menu) you have chosen.

These automatic elements cannot be edited or removed, and appear in the live preview marked as added automatically. They also count towards the available space for your own blocks, which is why the builder shows a running count of components used as you build.

## Limits

- A message can hold 40 components in total. This includes the components the bot adds itself: the open ticket button on a panel message; the Close, Close with Reason and Claim buttons and the form answers on a welcome message; or the panel buttons or dropdown on a multi-panel. There is no separate limit on top-level blocks.
- Text across the whole message, including Section text, is limited to 4,000 characters in total. Link button labels do not count towards this limit.
- A Media Gallery holds 1 to 10 images.
- Image and link URLs must be full addresses starting with `http://` or `https://`, with a real domain name (for example `https://example.com/image.png`). They cannot contain spaces, cannot include a username or password, and are limited to 512 characters.

## Welcome Message Details

A few things work differently when the welcome message uses Components v2:

- Enter `%avatar_url%` as the whole image URL of a Section thumbnail or a Media Gallery image, and the bot replaces it with the avatar of the user who opened the ticket.
- If the panel has a [form](/dashboard/forms), the answers are added to the end of the welcome message as text blocks, rather than sent in a separate embed. They are not shown in the live preview. Long answers are trimmed so that the text across the whole message stays within the 4,000 character limit, and very long welcome text is trimmed to leave room for each answer.

## Switching a Live Panel Message Back to Classic

If a panel or multi-panel message has already been posted to Discord and is using Components v2, switching it back to Classic causes the bot to delete that message and post a new one in its place. The message loses its position in the channel, along with any reactions on the old message, because Discord does not allow a message to have Components v2 removed through a simple edit once it has been applied.

:::warning Reposting a Live Panel Message
Switching a live panel or multi-panel message from Components v2 back to Classic deletes and reposts it. Reactions on the old message are lost. The dashboard warns you about this before you save.
:::

This only applies when switching from Components v2 to Classic. Switching the other way (Classic to Components v2) updates the existing message in place with no loss of position or reactions. Changing the welcome message mode only affects tickets opened afterwards. Welcome messages in existing tickets are left as they are.

## If Your Subscription Ends

If your server's Premium or Whitelabel subscription ends, panel and multi-panel messages that are already posted with Components v2 are not disabled. They stay in place and their buttons and dropdowns keep opening tickets.

New tickets receive the classic welcome message while the subscription is inactive.

To save changes to a panel or multi-panel while the subscription is inactive, switch every message on it that uses Components v2 back to **Classic**. A posted panel or multi-panel message that used Components v2 is then reposted, as described above.
