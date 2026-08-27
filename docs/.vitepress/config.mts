import { defineConfig } from "vitepress";
import { footnote } from "@mdit/plugin-footnote";

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "Tickets Docs",
  description: "Official Documentation of the Tickets Discord Bot",
  srcDir: "./src",
  rewrites: {
    "en/:rest*": ":rest*",
  },
  locales: {
    root: {
      label: "🇬🇧 English",
      lang: "en-GB",
    },
    // de: {
    //   label: "🇩🇪 Deutsch",
    //   lang: "de-DE",
    //   link: "/de"
    // }
  },
  markdown: {
    config: (md) => {
      md.use(footnote);
    },
  },
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    search: {
      provider: "local",
    },
    logo: "/logov2-round.png",
    nav: [
      {
        text: "Home",
        link: "/",
      },
      {
        text: "Documentation",
        items: [
          {
            text: "Introduction",
            link: "/introduction/introduction",
          },
          {
            text: "Setup",
            link: "/setup/introduction",
          },
          {
            text: "Commands",
            link: "/commands/introduction",
          },
          {
            text: "Dashboard",
            link: "/dashboard/introduction",
          },
          {
            text: "Premium",
            link: "/premium/introduction",
          },
          {
            text: "Features",
            link: "/features/introduction",
          },
          {
            text: "Miscellaneous",
            link: "/miscellaneous/introduction",
          },
          {
            text: "Meet the Team",
            link: "/team",
          },
        ],
      },
      {
        text: "Dashboard",
        link: "https://dashboard.tickets.bot",
      },
      {
        text: "Support Server",
        link: "https://discord.gg/ticketsbot",
      },
    ],
    footer: {
      message: "Maintained with &#128150;",
      copyright:
        '&copy; 2026 <a href="https://bhcloudlabs.com" target="_blank">BH Cloud Labs Ltd</a>. All rights reserved.<br>BH Cloud Labs Ltd, trading as Tickets Bot is registered in England and Wales (No. 16211348). <br>Registered Address: The Grange, Grange Road, Great Malvern, WR14 3HA.',
    },
    sidebar: [
      {
        text: "Introduction",
        link: "/introduction/introduction",
        collapsed: false,
        items: [],
      },
      {
        text: "Setup",
        link: "/setup/introduction",
        collapsed: true,
        items: [
          {
            text: "Inviting the Bot",
            link: "/setup/invite",
          },
          {
            text: "Language Customisation",
            link: "/setup/language-customisation",
          },
          {
            text: "Bot Configuration",
            link: "/setup/configuration",
          },
          {
            text: "",
            items: [
              {
                text: "Web Dashboard",
                link: "/setup/dashboard",
              },
              {
                text: "Setup Command",
                link: "/setup/setup-command",
              },
            ],
          },
          {
            text: "Ticket Panels",
            link: "/setup/ticket-panels",
          },
          {
            text: "Support Staff",
            link: "/setup/support-staff",
          },
        ],
      },
      {
        text: "Commands",
        link: "/commands/introduction",
        collapsed: true,
        items: [
          {
            text: "List of Commands",
            link: "/commands/list-of-commands",
          },
          {
            text: "",
            items: [
              {
                text: "Add Admin / Support",
                link: "/commands/add-admin-support",
              },
              {
                text: "Close Requests",
                link: "/commands/close-requests",
              },
              {
                text: "GDPR Data Request",
                link: "/commands/gdpr",
              },
            ],
          },
        ],
      },
      {
        text: "Dashboard",
        link: "/dashboard/introduction",
        collapsed: true,
        items: [
          {
            text: "Overview",
            link: "/dashboard/overview",
          },
          {
            text: "Tickets",
            items: [
              {
                text: "Tickets",
                link: "/dashboard/tickets",
              },
              {
                text: "Transcripts",
                link: "/dashboard/transcripts",
              },
              {
                text: "Analytics",
                link: "/dashboard/analytics",
              },
            ],
          },
          {
            text: "Setup",
            items: [
              {
                text: "Server Settings",
                link: "/dashboard/settings/settings",
              },
              {
                text: "Panels",
                link: "/dashboard/ticket-panels",
              },
              {
                text: "",
                items: [
                  {
                    text: "Multi-Panels",
                    link: "/dashboard/multi-panels",
                  },
                  {
                    text: "Template Gallery",
                    link: "/dashboard/panel-gallery",
                  },
                ],
              },
              {
                text: "Forms",
                link: "/dashboard/forms",
              },
              {
                text: "Integrations",
                link: "/integrations/introduction",
              },
              {
                text: "",
                items: [
                  {
                    text: "Building Integrations",
                    link: "/integrations/building-integrations",
                  },
                  {
                    text: "Cloudflare Workers",
                    link: "/integrations/cloudflare-workers",
                  },
                ],
              },
            ],
          },
          {
            text: "Content",
            items: [
              {
                text: "Knowledge Base",
                link: "/dashboard/knowledge-base",
              },
              {
                text: "Tags",
                link: "/dashboard/tags",
              },
            ],
          },
          {
            text: "Moderation",
            items: [
              {
                text: "Staff Teams",
                link: "/dashboard/staff-teams",
              },
              {
                text: "Blacklist",
                link: "/dashboard/blacklist",
              },
              {
                text: "Audit Log",
                link: "/dashboard/audit-log",
              },
            ],
          },
          {
            text: "Account",
            items: [
              {
                text: "Notifications",
                link: "/dashboard/notifications",
              },
              {
                text: "User Settings",
                link: "/dashboard/settings",
              },
            ],
          },
          {
            text: "Ticket Features",
            items: [
              {
                text: "Thread Mode",
                link: "/dashboard/settings/thread-mode",
              },
              {
                text: "Claiming Tickets",
                link: "/dashboard/settings/claiming-tickets",
              },
              {
                text: "User Feedback",
                link: "/dashboard/settings/user-feedback",
              },
              {
                text: "Exit Survey",
                link: "/dashboard/settings/exit-survey",
              },
              {
                text: "Awaiting User Response",
                link: "/dashboard/settings/awaiting-user-response",
              },
              {
                text: "Start Ticket From Message",
                link: "/dashboard/settings/start-ticket-from-message",
              },
              {
                text: "Placeholders",
                link: "/miscellaneous/placeholders",
              },
            ],
          },
        ],
      },
      {
        text: "Premium",
        link: "/premium/introduction",
        collapsed: true,
        items: [
          {
            text: "Premium and Whitelabel Perks",
            link: "/premium/perks",
          },
          {
            text: "Whitelabel Setup Guide",
            link: "/premium/whitelabel-setup-guide",
          },
          {
            text: "Whitelabel Resync Guide",
            link: "/premium/whitelabel-resync-guide",
          },
          {
            text: "Whitelabel Removal Guide",
            link: "/premium/whitelabel-removal-guide",
          },
          {
            text: "Whitelabel Intents Guide",
            link: "/premium/whitelabel-intents-guide",
          },
        ],
      },
      {
        text: "Features",
        link: "/features/introduction",
        collapsed: true,
        items: [
          {
            text: "Affiliate Programme",
            link: "/features/affiliate-programme",
          },
          {
            text: "Auto Close",
            link: "/dashboard/ticket-panels#auto-close",
          },
          {
            text: "Awaiting User Response",
            link: "/dashboard/settings/awaiting-user-response",
          },
          {
            text: "Claiming Tickets",
            link: "/dashboard/settings/claiming-tickets",
          },
          {
            text: "Close Requests",
            link: "/features/close-requests",
          },
          {
            text: "Exit Survey",
            link: "/dashboard/settings/exit-survey",
          },
          {
            text: "Forms",
            link: "/dashboard/forms",
          },
          {
            text: "",
            items: [
              {
                text: "API-Based Form Inputs",
                link: "/features/api-form-inputs",
              },
            ],
          },
          {
            text: "Knowledge Base",
            link: "/dashboard/knowledge-base",
          },
          {
            text: "Multi Panels",
            link: "/dashboard/multi-panels",
          },
          {
            text: "Start Ticket from Message",
            link: "/dashboard/settings/start-ticket-from-message",
          },
          {
            text: "Support Hours",
            link: "/features/support-hours",
          },
          {
            text: "Thread Mode",
            link: "/dashboard/settings/thread-mode",
          },
          {
            text: "User Feedback",
            link: "/dashboard/settings/user-feedback",
          },
        ],
      },
      {
        text: "Miscellaneous",
        link: "/miscellaneous/introduction",
        collapsed: true,
        items: [
          {
            text: "Official Tickets Links",
            link: "/miscellaneous/official-links",
          },
          {
            text: "Patreon Links/Articles",
            link: "/miscellaneous/patreon",
          },
          {
            text: "Bot Permissions Explained",
            link: "/miscellaneous/permissions-explained",
          },
          {
            text: "Placeholders",
            link: "/miscellaneous/placeholders",
          },
          {
            text: "Translate the Bot",
            link: "/miscellaneous/translate",
          },
          {
            text: "Dashboard: No Permission",
            link: "/miscellaneous/dashboard-no-permission",
          },
        ],
      },
      {
        text: "Meet the Team",
        link: "/team",
        collapsed: false,
        items: [],
      },
    ],
    socialLinks: [
      {
        icon: "discord",
        link: "https://discord.gg/ticketsbot",
      },
      {
        icon: "github",
        link: "https://github.com/TicketsBot-cloud",
      },
    ],
  },
  cleanUrls: true,
  head: [
    [
      "meta",
      {
        content: "Tickets | Documentation",
        property: "og:title",
      },
    ],
    [
      "meta",
      {
        content: "Official Documentation of the Tickets Discord bot",
        property: "og:description",
      },
    ],
    [
      "meta",
      {
        content: "/favicon.ico",
        property: "og:image",
      },
    ],
    [
      "meta",
      {
        content: "#2047f8",
        name: "theme-color",
      },
    ],
    [
      "link",
      {
        rel: "icon",
        href: "/favicon.ico",
      },
    ],
    [
      "script",
      {
        defer: "",
        src: "/scripts/statusembed.js",
      },
    ],
  ],
  // -- DEVELOPMENT SHOWCASE CONFIG --
  vite: {
    server: {
      allowedHosts: [".tickets.bot"],
    },
  },
});
