# Components v2 Builder

Components v2 is an alternative way to build the messages your panels and multi-panels send. Instead of filling in the classic embed's fixed fields (title, description, colour, fields, footer, image), you assemble the message yourself from a free-form set of blocks that can be added, removed, and reordered in any combination, with a live preview showing exactly what will be posted to Discord as you build.

:::tip Premium Feature
Components v2 requires [Premium](https://tickets.bot/premium). Free servers keep using the classic embed builder, and see the Components v2 option locked with an upgrade prompt rather than hidden.
:::

## Where You Can Use It

Components v2 is available as an independent mode switch on three message surfaces, so you can choose Classic or Components v2 separately for each:

- The **panel message**, the embed with a button that opens a new ticket. Configured in the [Panel Appearance](/dashboard/ticket-panels#panel-appearance) section of the panel editor.
- The **welcome message**, sent inside a ticket channel as soon as it opens. Configured in the [Welcome Message](/dashboard/ticket-panels#welcome-message) section of the panel editor.
- The **multi-panel message**, which lets someone pick which panel to open a ticket against from a dropdown or row of buttons. Configured in the [Panel Settings](/dashboard/multi-panels#panel-settings) section of the multi-panel editor.

## Switching to Components v2

Open the relevant section listed above and switch the mode toggle from **Classic** to **Components v2**. The fixed embed fields are replaced with the block builder and its live preview. Switching back to **Classic** restores the embed fields you had set.

## Block Types

This first release does not yet support attaching files as a block type.

### Container

A bordered box that groups other blocks together. Give it an accent colour to make it stand out, or mark it as a spoiler to blur its contents until a reader clicks to reveal them.

### Section

Up to three lines of text, optionally paired with either a small image or a link button beside them, a button that simply opens a URL when clicked rather than one of the bot's own ticket buttons. Useful for a short highlighted callout within the message.

### Button Row

A standalone row of up to 5 link buttons, each opening a URL when clicked rather than one of the bot's own ticket buttons. Use this when you want several links presented together, rather than the single link button that can sit beside a Section's text.

### Text Display

A block of markdown-formatted text, the closest equivalent to the classic embed's description field. Supports the same formatting as elsewhere in Tickets, including bold, italic, links, and mentions.

### Media Gallery

One or more images shown together in a gallery layout.

### Separator

A thin dividing line between blocks, with adjustable spacing, useful for visually breaking up a longer message.

## Adding, Removing, and Reordering Blocks

Add a new block from the block picker, and remove any block you have added. Each block has up and down arrow buttons to move it earlier or later among its siblings. Containers can hold other blocks: use a block's **move into container** action to nest it inside a Container, or its **move out of container** action to return it to the top level of the message.

## Automatic Elements

Whichever surface you are editing, the bot always adds its own required interactive elements on top of whatever you build:

- The panel message always gets its **open ticket** button.
- The welcome message always gets its **close** and **claim** buttons, matching whichever of those are enabled in the panel's [Closing and Claiming](/dashboard/ticket-panels#closing-and-claiming) settings.
- The multi-panel message always gets its panel-selection dropdown or buttons, matching the [display mode](/dashboard/multi-panels#use-dropdown-menu) you have chosen.

These automatic elements cannot be edited or removed, and always appear in the live preview marked as automatic. They also count towards the available space for your own blocks, which is why the builder shows a running **blocks used** counter as you build rather than Discord's raw component limit.

## Switching a Live Panel Message Back to Classic

If a panel message has already been posted to Discord and is using Components v2, switching it back to Classic causes the bot to delete that message and post a new one in its place. The message loses its position in the channel, along with any reactions or replies left on it, because Discord does not allow a message to have Components v2 removed through a simple edit once it has been applied.

:::warning Reposting a Live Panel Message
Switching a live panel message from Components v2 back to Classic deletes and reposts it. The dashboard warns you about this before you save.
:::

This only affects the panel message when switching from Components v2 to Classic. Switching a panel message the other way (Classic to Components v2), and switching the welcome message or multi-panel message in either direction, updates the existing message in place with no loss of position, reactions, or replies.

## If Your Subscription Lapses

If your Premium or Whitelabel subscription lapses while a panel message or multi-panel message is using Components v2, that message becomes disabled until the subscription is restored. The welcome message is different: it automatically falls back to the bot's default welcome text instead, so no manual re-enabling is needed to keep it working.
