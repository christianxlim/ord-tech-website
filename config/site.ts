export type SiteConfig = typeof siteConfig

export const siteConfig = {
  name: "Ordnance Technologies",
  description:
    "Advanced autonomous systems delivering mission-critical reliability for defense operations.",
  // Background configuration
  backgroundColor: "black", // Plain black background
  mainNav: [
    {
      title: "Home",
      href: "/",
    },

    {
      title: "Products",
      href: "#products",
      items: [
        {
          title: "Apollyon AI FPV",
          href: "/products/apollyon",
          description: "AI-driven autonomous FPV drone system"
        },
        {
          title: "Abaddon FPV",
          href: "/products/abaddon", 
          description: "Combat-proven FPV drone platform"
        }
      ]
    },
    {
      title: "Training",
      href: "/training",
    },
    {
      title: "Mission",
      href: "/mission",
    },
    {
      title: "Contact",
      href: "/contact",
    },
  ],
  links: {
    twitter: "https://twitter.com/shadcn",
    github: "https://github.com/shadcn/ui",
    docs: "https://ui.shadcn.com",
  },
}
