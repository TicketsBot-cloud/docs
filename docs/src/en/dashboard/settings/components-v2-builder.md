# Components v2 Builder

Components v2 is an alternative way to build the messages your panels and multi-panels send. Instead of filling in the classic embed's fixed fields (title, description, colour, fields, footer, image), you assemble the message yourself from a free-form set of blocks that can be added, removed, and reordered in any combination, with a live preview showing exactly what will be posted to Discord as you build.

:::tip Premium Feature
Saving a message in Components v2 mode needs paid [Premium](https://tickets.bot/premium) or Whitelabel. Voting premium does not include it. Servers without paid premium keep using the classic embed builder, and the Components v2 option is marked as a Premium feature. See [If Your Paid Premium Ends](#if-your-paid-premium-ends) for what happens to messages you have already built.
:::

## Where You Can Use It

Components v2 is available as an independent mode switch on three message surfaces, so you can choose Classic or Components v2 separately for each:

- The **panel message**, the embed with a button that opens a new ticket. Configured in the [Panel Appearance](/dashboard/ticket-panels#panel-appearance) section of the panel editor.
- The **welcome message**, sent inside a ticket channel as soon as it opens. Configured in the [Welcome Message](/dashboard/ticket-panels#welcome-message) section of the panel editor.
- The **multi-panel message**, which lets someone pick which panel to open a ticket against from a dropdown or row of buttons. Configured in the [Panel Settings](/dashboard/multi-panels#panel-settings) section of the multi-panel editor.

## Switching to Components v2

Open the relevant section listed above and switch the mode toggle from **Classic** to **Components v2**. The fixed embed fields are replaced with the block builder and its live preview. Your classic embed is kept while you use Components v2, so switching back to **Classic** restores the embed fields you had set.

The **Panel Title** field stays visible in both modes. It is not part of the Components v2 layout, but the bot still uses it to name the panel in the `/open` command, in the ticket channel topic and in the notice posted when a ticket thread is created. Set a title that describes the panel even when the message itself is built with Components v2.

Panels and multi-panels can also be given an optional **Name**, which is only used to identify them in the dashboard.

Components v2 panels cannot be submitted to the [Template Gallery](/dashboard/panel-gallery).

## Block Types

File blocks are not available.

### Container

A bordered box that groups other blocks together. Give it an accent colour to make it stand out, or mark it as a spoiler to blur its contents until a reader clicks to reveal them.

### Section

One to three text blocks shown beside an accessory. A Section must have an accessory, which is either a small image (thumbnail) or a button. Use **Add text** to add further text blocks, and choose the accessory with **Image**, **Link button** or, in a multi-panel or panel message where it is offered, **Panel button**. A link button opens a URL when clicked. A panel button opens a ticket for the panel you choose with **Ticket panel**. Useful for a short highlighted callout within the message.

### Button Row

A standalone row of up to 5 buttons. Each button is either a **Link** button, which opens a URL when clicked, or, in a multi-panel, a **Ticket panel** button, which opens a ticket for the panel you choose. Use **Add button** to add another button to the row. Use this when you want several buttons presented together, rather than the single button that can sit beside a Section's text.

### Text Display

A block of markdown-formatted text, the closest equivalent to the classic embed's description field. Supports the same formatting as elsewhere in Tickets, including bold, italic, links, and mentions.

### Media Gallery

One to 10 images shown together in a gallery layout.

### Separator

A thin dividing line between blocks, with adjustable spacing, useful for visually breaking up a longer message.

## Adding, Removing, and Reordering Blocks

Add a new block with **+ Add block**. The menu groups blocks under Layout (Container, Section, Separator, Button Row and, in a multi-panel, Panel Select) and Content (Text Display and Media Gallery). Remove a block with its **Delete** button.

Each block has **Move up** and **Move down** arrow buttons to move it earlier or later among its siblings. Containers can hold other blocks: use a block's **Move into container...** menu to nest it inside a Container, or its **Move out of container** button to return it to the top level of the message.

## Placing Panels in a Multi-Panel

In a Components v2 multi-panel, you decide where each selected panel appears:

- A **Button Row** can hold ticket panel buttons as well as link buttons. Choose **Ticket panel** on a button, then pick the panel.
- A **Section**'s button accessory can be a ticket panel. Choose **Panel button**, then pick the panel.
- A **Panel Select** block adds the panel dropdown and can be placed anywhere in the layout. It is only available when **Use Dropdown Menu** is enabled in the multi-panel's [Ticket Settings](/dashboard/multi-panels#use-dropdown-menu), and only one can be placed. The dropdown uses the placeholder text configured for the multi-panel.

Any selected panels that you do not place are added automatically at the end of the message, as buttons or as the dropdown, depending on the multi-panel's display mode.

## Automatic Elements

Whichever surface you are editing, the bot always adds its own required interactive elements on top of whatever you build:

- The panel message always gets its **open ticket** button.
- The welcome message always gets its **close** and **claim** buttons, matching whichever of those are enabled in the panel's [Closing and Claiming](/dashboard/ticket-panels#closing-and-claiming) settings.
- The multi-panel message always gets its panel-selection dropdown or buttons, matching the [display mode](/dashboard/multi-panels#use-dropdown-menu) you have chosen.

These automatic elements cannot be edited or removed, and always appear in the live preview marked as automatic. They also count towards the available space for your own blocks, which is why the builder shows a running **blocks used** counter as you build.

## Limits

- A message can hold 40 components in total. This includes the components the bot adds itself: the panel button, form answers and the Close and Claim buttons on a welcome message, or the panel buttons or dropdown on a multi-panel. There is no separate limit on top-level blocks.
- Text Display blocks across the whole message are limited to 4,000 characters in total. Link button labels do not count towards this limit.
- A Media Gallery holds 1 to 10 images.
- Image and link URLs must be full addresses starting with `http://` or `https://`, with a real domain name (for example `https://example.com/image.png`). They cannot contain spaces, and cannot include a username or password.

## Welcome Message Details

A few things work differently when the welcome message uses Components v2:

- **Ticket opener's avatar.** Enter `%avatar_url%` as the whole image URL of a Section thumbnail or a Media Gallery image, and the bot replaces it with the avatar of the user who opened the ticket.
- **Form answers.** If the panel has a [form](/dashboard/forms), the answers are added to the end of the welcome message as text blocks, rather than sent in a separate embed. Long answers are trimmed so that the text across the whole message stays within Discord's 4,000 character limit.

## Switching a Live Panel Message Back to Classic

If a panel or multi-panel message has already been posted to Discord and is using Components v2, switching it back to Classic causes the bot to delete that message and post a new one in its place. The message loses its position in the channel, along with any reactions on the old message, because Discord does not allow a message to have Components v2 removed through a simple edit once it has been applied.

:::warning Reposting a Live Panel Message
Switching a live panel or multi-panel message from Components v2 back to Classic deletes and reposts it. Reactions on the old message are lost. The dashboard warns you about this before you save.
:::

This only applies when switching from Components v2 to Classic. Switching the other way (Classic to Components v2) updates the existing message in place with no loss of position or reactions. Changing the welcome message mode only affects tickets opened afterwards. Welcome messages in existing tickets are left as they are.

## If Your Paid Premium Ends

If your server's paid Premium or Whitelabel ends, panel and multi-panel messages that are already posted with Components v2 are not disabled. They stay in place and their buttons and dropdowns keep opening tickets.

New tickets receive the classic welcome message until paid premium returns.

While premium is inactive, you cannot save a panel, welcome message or multi-panel in Components v2 mode. You can still switch any of them to **Classic** and save, for example to make other changes to the panel. Your Components v2 layout is kept rather than deleted, so if you renew and switch back to Components v2, the layout you built is still there.
