interface NavItem {
  title: string;
  url: string;
}

export const navItems: NavItem[] = [
  {
    title: "Home",
    url: "/",
  },
  {
    title: "News",
    url: "/news",
  },
  {
    title: "About",
    url: "/about",
  },
  {
    title: "Blogs",
    url: "/blogs",
  },
  {
    title: "Loadouts",
    url: "/loadouts",
  },
  // {
  //   title: 'Raids',
  //   url: '/raids',
  // },
];

export interface IFooterNavSection {
  sectionTitle: string;
  navItems: NavItem[];
}

export const footerNavItems: IFooterNavSection[] = [
  {
    sectionTitle: "Sitemap",
    navItems: [
      {
        title: "Map",
        url: "/map",
      },
      {
        title: "News",
        url: "/news",
      },
      {
        title: "About",
        url: "/about",
      },
    ],
  },
];
