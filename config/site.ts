export type SiteConfig = typeof siteConfig

export const siteConfig = {
  name: "Ordnance Technologies",
  description:
    "Advanced autonomous systems delivering mission-critical reliability for defense operations.",
  // Vimeo video ID from https://vimeo.com/manage/videos/1110449400
  vimeoVideoId: "1110449400", // Background video for the website
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
