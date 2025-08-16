export type SiteConfig = typeof siteConfig

export const siteConfig = {
  name: "Ordnance Technologies",
  description:
    "Cutting-edge solutions, inspired by Anduril Industries.",
  // Vimeo video ID from https://vimeo.com/manage/videos/1110449400
  vimeoVideoId: "1110449400", // Background video for the website
  mainNav: [
    {
      title: "Home",
      href: "/",
    },
    {
      title: "Mission",
      href: "#mission",
    },
    {
      title: "Trust",
      href: "#trust",
    },
    {
      title: "Technology",
      href: "#technology",
    },
    {
      title: "Advantages",
      href: "#advantages",
    },
    {
      title: "Innovation",
      href: "#innovation",
    },
    {
      title: "Contact",
      href: "#contact",
    },
  ],
  links: {
    twitter: "https://twitter.com/shadcn",
    github: "https://github.com/shadcn/ui",
    docs: "https://ui.shadcn.com",
  },
}
