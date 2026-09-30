// components/Navbar/menuItems.ts

export interface MenuItem {
  display: string;
  href: string;
  children?: MenuItem[];
}

/**
 * Top-level menu for the newspaper navbar.
 * Main categories are listed horizontally; the overflow categories
 * are grouped under a "More" dropdown.
 */
export const MENU_ITEMS: MenuItem[] = [
  { display: "Home", href: "/" },
  { display: "Latest", href: "/latest" },
  { display: "Bangladesh", href: "/bangladesh" },
  { display: "Business", href: "/business" },
  { display: "Politics", href: "/politics" },
  { display: "World", href: "/world" },
  { display: "Sports", href: "/sports" },
  { display: "Opinion", href: "/opinion" },
  {
    display: "More",
    href: "/feature",
    children: [
      { display: "Feature", href: "/feature" },
      { display: "Arts", href: "/arts" },
      { display: "Long Read", href: "/long-read" },
      { display: "Fact-Check", href: "/fact-check" },
      { display: "Lifestyle", href: "/lifestyle" },
    ],
  },
];
export const SOCIAL_LINKS = [
  {
    name: "Facebook",
    href: "https://facebook.com/isdailywaadaa",
    icon: "facebook",
  },
  {
    name: "Instagram",
    href: "https://instagram.com/isdailywaadaa",
    icon: "instagram",
  },
  {
    name: "YouTube",
    href: "https://youtube.com/@isdailywaadaa",
    icon: "youtube",
  },
  { name: "X", href: "https://x.com/isdailywaadaa", icon: "x" },
] as const;

export const CONTACT_PHONE = "+880 1XXX-XXXXXX";
export const OPEN_HOURS = "Newsroom open 24/7";
