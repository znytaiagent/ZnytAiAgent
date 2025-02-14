import { SidebarGroup } from "../../_types/sidebar";

export const platformGroup: SidebarGroup = {
  label: "Platform",
  items: [
    {
      icon: "MessageSquare",
      label: "Chat",
      href: "/chat",
    },
    {
      icon: "Twitter",
      label: "Follow Us",
      href: "https://x.com/ZnytAiAgent",
      external: true,
    },
    {
      icon: "Github",
      label: "Source Code",
      href: "https://github.com/znytaiagent",
      external: true,
    },
  ],
};
