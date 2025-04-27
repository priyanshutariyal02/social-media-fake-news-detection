import {
  IconSettings,
  IconArrowLeft,
  IconHome,
  IconMessages,
  IconBell,
} from "@tabler/icons-react";

export const links = [
  {
    label: "Home",
    href: "/",
    icon: (
      <IconHome className="h-5 w-5 shrink-0 text-neutral-700 dark:text-neutral-200" />
    ),
  },
  {
    label: "Messages",
    href: "/message",
    icon: (
      <IconMessages className="h-5 w-5 shrink-0 text-neutral-700 dark:text-neutral-200" />
    ),
  },
  {
    label: "Notifications",
    href: "/notification",
    icon: (
      <IconBell className="h-5 w-5 shrink-0 text-neutral-700 dark:text-neutral-200" />
    ),
  },
  {
    label: "Settings",
    href: "#",
    icon: (
      <IconSettings className="h-5 w-5 shrink-0 text-neutral-700 dark:text-neutral-200" />
    ),
  },
  {
    label: "Logout",
    href: "/api/auth/signout",
    icon: (
      <IconArrowLeft className="h-5 w-5 shrink-0 text-neutral-700 dark:text-neutral-200" />
    ),
  },
];
