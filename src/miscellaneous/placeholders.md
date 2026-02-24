# Placeholders
***

## Welcome Message Placeholders
### Built-in

|Placeholder|Description |
|--|--|
| %user% | Mentions the user, will display nickname if set |
| %username% | Display the user's name |
| %user_id% | Display the user's numeric ID |
| %ticket_id% | Display the ticket's numeric ID |
| %open_tickets% | Display the number of open tickets in the server |
| %total_tickets% | Display the number of tickets that have ever been opened in the server |
| %user_open_tickets% | Display the number of tickets that the user currently has open in the server |
| %user_total_tickets% | Display the number of tickets that the user has ever opened in the server |
| %ticket_limit% | Display the server's ticket limit |
| %channel% | Mention the channel |
| %rating_count% | Amount of feedback ratings you have received |
| %average_rating% | Displays server's average feedback rating |
| %time% | Display the current time |
| %date% | Display today's date |
| %datetime% | Display the current date and time |
| %timestamp% | Display the current Unix timestamp as a raw number |
| %date_days:N% | Display a date N days from now |
| %date_days:N:FORMAT% | Display a date N days from now with Discord format |
| %date_weeks:N% | Display a date N weeks from now |
| %date_weeks:N:FORMAT% | Display a date N weeks from now with Discord format |
| %date_months:N% | Display a date N months from now |
| %date_months:N:FORMAT% | Display a date N months from now with Discord format |
| %date_timestamp:UNIX% | Convert a Unix timestamp to a date |
| %date_timestamp:UNIX:FORMAT% | Convert a Unix timestamp to a date with Discord format |
| %timestamp_days:N% | Display the raw Unix timestamp N days from now |
| * %first_response_time_weekly% | Staff average first response time to tickets this week |
| * %first_response_time_monthly% | Staff average first response time to tickets this month |
| * %first_response_time_all_time% | Staff average first response time to tickets since the beginning |
| %discord_account_creation_date% | The date and time that the user's Discord account was created |
| %discord_account_age% | How long ago the user's Discord account was created |

Placeholders marked with a * are premium features. Learn more about premium [here](https://tickets.bot/premium).

**N** = number of days/weeks/months

**UNIX** = Unix timestamp

**FORMAT** = Discord format code: `d` (short date), `D` (long date), `t` (short time), `T` (long time), `f` (short date/time, default), `F` (long date/time), `R` (relative)

### Integrations
All integration placeholders are automatically active, you do not have to do anything special apart from include them in your welcome message.

#### Bloxlink
These placeholders are available if the user has linked their Roblox account via [Bloxlink](https://blox.link)

|Placeholder|Description |
|--|--|
| %roblox_username% | The user's Roblox username |
| %roblox_id% | The user's numeric Roblox ID |
| %roblox_display_name% | The user's Roblox display name |
| %roblox_profile_url% | The full clickable URL to the user's Roblox profile |
| %roblox_account_age% | How long ago the user's Roblox account was created |
| %roblox_account_created% | The date on which the user's Roblox account was created |

## Custom Naming Scheme Placeholders:
|Placeholder|Description|
|--|--|
| %id% | Display the unique ticket ID |
| %id_padded% | Display the unique ticket ID to 4 places |
| %username% | Display the user's name |
| %nickname% | Display the user's nickname |
| %claimed% | Display whether the ticket is claimed or unclaimed |
| %claim_indicator% | Display 🟢 if claimed or 🔴 if unclaimed |
| %claimed_by% | Display the claimer's username |
| %date% | Display the current date in short format |
| %date:FORMAT% | Display the current date with custom format |
| %date_days:N% | Display a date N days from now |
| %date_days:N:FORMAT% | Display a date N days from now with custom format |
| %date_weeks:N% | Display a date N weeks from now |
| %date_weeks:N:FORMAT% | Display a date N weeks from now with custom format |
| %date_months:N% | Display a date N months from now |
| %date_months:N:FORMAT% | Display a date N months from now with custom format |
| %date_timestamp:UNIX% | Convert a Unix timestamp to a date |
| %date_timestamp:UNIX:FORMAT% | Convert a Unix timestamp to a date with custom format |

**N** = number of days/weeks/months

**UNIX** = Unix timestamp

**FORMAT** = custom format using tokens: `yyyy` (4-digit year), `yy` (2-digit year), `mm` (zero-padded month), `m` (single-digit month), `dd` (zero-padded day), `d` (single-digit day). Use any separator, e.g. `yyyy-mm-dd`, `d/m/yy`, `dd.mm.yyyy`. Defaults to short format (`jan19`) if not specified.

## Escaping Placeholders
To display a placeholder as literal text instead of having it replaced, use backslashes: `\%placeholder\%`
