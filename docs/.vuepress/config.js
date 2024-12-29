import { viteBundler } from "@vuepress/bundler-vite";
import { defaultTheme } from "@vuepress/theme-default";
import { defineUserConfig } from "vuepress";

export default defineUserConfig({
  base: "/LinuxAdminToolkit/",
  title: "LinuxAdminToolkit",
  description: "A comprehensive guide for Linux administrators.",
  bundler: viteBundler(),
  theme: defaultTheme({
    colorModeSwitch: false,
    navbar: [
      { text: "Home", link: "/" },
      { text: "Guide", link: "/guide/" },
      { text: "About Me", link: "https://jenilgajjar.netlify.app/" },
    ],
    sidebar: [
      //   {
      // text: "Guide",
      // link: "/guide/",
      // children: [
      //   {
      //     text: "Getting Started",
      //     link: "/guide/getting-started",
      //   },
      // ],
      //   },
      {
        text: "Administrator's Manual",
        link: "/administrator-manual/",
        children: [
          {
            text: "Commands",
            link: "/administrator-manual/commands/",
            collapsible: true,
            children: [
              {
                text: "Basic Commands",
                link: "/administrator-manual/commands/basic-commands",
              },
              {
                text: "File Management",
                link: "/administrator-manual/commands/file-management",
              },
              {
                text: "Process Management",
                link: "/administrator-manual/commands/process-management",
              },
              {
                text: "User and Group Management",
                link: "/administrator-manual/commands/user-group-management",
              },
              {
                text: "System Information",
                link: "/administrator-manual/commands/system-information",
              },
              {
                text: "Disk Usage",
                link: "/administrator-manual/commands/disk-usage",
              },
            ],
          },
          {
            text: "Networking",
            link: "/administrator-manual/networking/",
            collapsible: true,
            children: [
              {
                text: "IP Address",
                link: "/administrator-manual/networking/ip-address",
              },
              {
                text: "Subnetting",
                link: "/administrator-manual/networking/subnetting",
              },
              {
                text: "Routing",
                link: "/administrator-manual/networking/routing",
              },
              {
                text: "Firewall",
                link: "/administrator-manual/networking/firewall",
              },
              {
                text: "Network Tools",
                link: "/administrator-manual/networking/network-tools",
              },
            ],
          },
          {
            text: "Services",
            link: "/administrator-manual/services/",
            collapsible: true,
            children: [{}],
          },
          {
            text: "Monitoring and Logging",
            link: "/administrator-manual/monitoring-logging/",
            collapsible: true,
            children: [{}],
          },
          {
            text: "Shell Scripting",
            link: "/administrator-manual/shell-scripting/",
            collapsible: true,
            children: [{}],
          },
          {
            text: "Configurations Files",
            link: "/administrator-manual/configuration-files/",
            collapsible: true,
            children: [{}],
          },
        ],
      },
    ],
    repo: "JenilGajjar20/LinuxAdminToolkit",
    repoLabel: "GitHub",
    editLink: true,
    editLinkText: "Edit this page on GitHub",
    docsDir: "docs",
  }),
});
