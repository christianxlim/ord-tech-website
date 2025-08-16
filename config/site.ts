export type SiteConfig = typeof siteConfig

export const siteConfig = {
  name: "Ordnance Technologies",
  description:
    "Cutting-edge solutions, inspired by Anduril Industries.",
  // Add your Vimeo video ID here (the numbers from your Vimeo URL)
  vimeoVideoId: "YOUR_VIMEO_VIDEO_ID", // Replace with actual ID when ready
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
