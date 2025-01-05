import { viteBundler } from "@vuepress/bundler-vite";
import { defaultTheme } from "@vuepress/theme-default";
import { defineUserConfig } from "vuepress";

export default defineUserConfig({
  base: "/LinuxAdminToolkit/",
  title: "LinuxAdminToolkit",
  description: "A comprehensive guide for Linux administrators.",
  head: [["link", { rel: "icon", href: "./favicon.ico" }]],
  bundler: viteBundler(),
  theme: defaultTheme({
    colorModeSwitch: false,
    logo: "./images/linux-admin-logo.png",
    navbar: [
      { text: "Home", link: "/" },
      { text: "Guide", link: "/guide/" },
      { text: "About Me", link: "https://jenilgajjar.netlify.app/" },
    ],
    sidebar: [
      // {
      //   text: "Guide",
      //   link: "/guide/",
      //   children: [
      //     {
      //       text: "Getting Started",
      //       link: "/guide/getting-started",
      //     },
      //   ],
      // },
      {
        text: "Administrator's Manual",
        // link: "/administrator-manual/",
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
            children: [
              {
                text: "Service Management",
                link: "/administrator-manual/services/service-management",
              },
              {
                text: "Service Configuration",
                link: "/administrator-manual/services/service-configuration",
              },
              {
                text: "Common Services",
                link: "/administrator-manual/services/common-services",
              },
            ],
          },
          {
            text: "Monitoring and Logging",
            link: "/administrator-manual/monitoring-logging/",
            collapsible: true,
            children: [
              {
                text: "System Monitoring",
                link: "/administrator-manual/monitoring-logging/system-monitoring",
              },
              {
                text: "Log Management",
                link: "/administrator-manual/monitoring-logging/log-management",
              },
              {
                text: "Monitoring Tools",
                link: "/administrator-manual/monitoring-logging/monitoring-tools",
              },
              {
                text: "Log Analysis Tools",
                link: "/administrator-manual/monitoring-logging/log-analysis-tools",
              },
            ],
          },
          {
            text: "Shell Scripting",
            link: "/administrator-manual/shell-scripting/",
            collapsible: true,
            children: [
              {
                text: "Basic Shell Script Structure",
                link: "/administrator-manual/shell-scripting/basic-structure",
              },
              {
                text: "Variables",
                link: "/administrator-manual/shell-scripting/variables",
              },
              {
                text: "Control Structures",
                link: "/administrator-manual/shell-scripting/control-structures",
              },
              {
                text: "Functions",
                link: "/administrator-manual/shell-scripting/functions",
              },
              {
                text: "Input and Output",
                link: "/administrator-manual/shell-scripting/input-output",
              },
              {
                text: "Debugging and Error Handling",
                link: "/administrator-manual/shell-scripting/debugging-error-handling",
              },
              {
                text: "Advanced Topics",
                link: "/administrator-manual/shell-scripting/advanced-topics",
              },
            ],
          },
          {
            text: "Configurations Files",
            link: "/administrator-manual/configuration-files/",
            collapsible: true,
            children: [
              {
                text: "System Configuration Files",
                link: "/administrator-manual/configuration-files/system-conf",
              },
              {
                text: "Network Configuration Files",
                link: "/administrator-manual/configuration-files/network-conf",
              },
              {
                text: "Service Configuration Files",
                link: "/administrator-manual/configuration-files/service-conf",
              },
              {
                text: "Application Configuration Files",
                link: "/administrator-manual/configuration-files/application-conf",
              },
              {
                text: "Editing Configuration Files",
                link: "/administrator-manual/configuration-files/editing-conf",
              },
              {
                text: "Backup and Restore Configuration Files",
                link: "/administrator-manual/configuration-files/backup-restore-conf",
              },
            ],
          },
        ],
      },
    ],
    repo: "JenilGajjar20/LinuxAdminToolkit",
    repoLabel: "GitHub",
    editLink: true,
    editLinkText: "Edit this page on GitHub",
    docsBranch: "master",
    docsDir: "docs",
  }),
});
