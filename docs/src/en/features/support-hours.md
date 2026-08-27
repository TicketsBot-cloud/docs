# Support Hours

Support hours let you restrict when tickets can be opened on a panel. You configure a schedule for each day of the week with a start and end time, and choose what happens when a user tries to open a ticket outside of those hours.

## Configuration

Support hours are configured per panel. Open any panel from the [Panels](/dashboard/ticket-panels) page and expand the **Support Hours** section.

[Learn more about the panel editor](/dashboard/ticket-panels#support-hours).

### Timezone

Select the timezone your support hours are based on. This should match the timezone your support team operates in. Any valid IANA timezone is supported (e.g. `America/New_York`, `Europe/London`, `UTC`). The form displays the current time in the selected timezone for reference.

### Schedule

For each day of the week, you can:

- **Enable or disable** the day. Disabled days mean the panel is closed all day.
- Set a **start time** and **end time** for the window during which tickets can be opened.

If no days are enabled, support hours are effectively disabled and the panel is available 24/7.

#### Presets

The form provides quick preset buttons:

- **Business hours** sets Monday to Friday, 09:00 to 17:00.
- **Copy to weekdays** copies Monday's hours to Tuesday through Friday.
- **Set 24/7** clears all restrictions.

## Out-of-Hours Behaviour

When a user tries to open a ticket outside the configured hours, the panel's behaviour depends on the **Out-of-hours behaviour** setting:

| Option | Behaviour |
|---|---|
| **Block ticket creation** | The user cannot open a ticket. They see an embed with a customisable title, message, and colour explaining that support is currently unavailable. This is the default. |
| **Allow with warning** | The user can still open a ticket, but receives a warning message that support is currently outside of normal hours and response times may be longer. |

### Customisation

You can customise the embed shown to users who interact with the panel outside of support hours:

- **Embed Colour** - the accent colour of the embed.
- **Custom out-of-hours title** - the embed title. Defaults to "This panel is currently closed".
- **Custom out-of-hours message** - the embed description (maximum 500 characters).

## Premium

Free servers can configure support hours on **1 panel**. Premium servers can configure support hours on **unlimited panels**.

[Learn more about premium](https://tickets.bot/premium).
