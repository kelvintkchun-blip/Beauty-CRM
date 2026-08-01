export interface NavItem {
  title: string;
  href: string;
  icon?: string;
  badge?: string;
  disabled?: boolean;
  external?: boolean;
}

export const mainNavItems: NavItem[] = [
  {
    title: "Dashboard",
    href: "/dashboard",
  },
  {
    title: "Customers",
    href: "/dashboard/customers",
  },
  {
    title: "Appointments",
    href: "/dashboard/appointments",
  },
  {
    title: "Services",
    href: "/dashboard/services",
  },
  {
    title: "Settings",
    href: "/dashboard/settings",
  },
];