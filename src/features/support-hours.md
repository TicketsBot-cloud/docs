# Support Hours
***

Support hours allow you to restrict when tickets can be opened on a panel. You can configure a schedule for each day of the week with a start and end time, and choose what happens when a user tries to open a ticket outside of those hours.

## Configuration

Support hours are configured per panel. To set them up, edit a panel from the **Ticket Panels** page on the web dashboard and open the **Support Hours** section.

### Timezone
Select the timezone that your support hours are based on. This should match the timezone your support team operates in. Any valid IANA timezone is supported (e.g. `America/New_York`, `Europe/London`, `UTC`). The dashboard will display the current time in the selected timezone for reference.

### Schedule
For each day of the week, you can:
- **Enable or disable** the day — disabled days mean the panel is closed all day.
- Set a **start time** and **end time** — the window during which tickets can be opened.

If no days are enabled, support hours are effectively disabled and the panel will be available 24/7.

#### Presets
The dashboard provides quick preset buttons:
- **Business hours** — sets Monday to Friday, 9:00 - 17:00.
- **Copy to weekdays** — copies Monday's hours to Tuesday through Friday.
- **Set 24/7** — clears all restrictions.

## Out-of-Hours Behaviour

When a user tries to open a ticket outside of the configured support hours, the panel's behaviour depends on the **Out-of-Hours Behaviour** setting:

### Block Creation (default)
The user **cannot** open a ticket. They will be shown an embed with a customisable title, message, and colour explaining that support is currently unavailable.

### Allow with Warning
The user **can** still open a ticket, but will receive a warning message letting them know that support is currently outside of normal hours and response times may be longer.

## Customisation

You can customise the message shown to users when they interact with the panel outside of support hours:

- **Title** — the embed title (max 100 characters). Defaults to "Support is currently unavailable".
- **Message** — the embed description (max 500 characters).
- **Colour** — the embed accent colour.

## Premium

Free servers can configure support hours on **1 panel**. Premium servers can configure support hours on **unlimited panels**.

- _Learn more about premium [here](https://tickets.bot/premium)._
