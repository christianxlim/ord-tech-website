import { JetBrains_Mono as FontMono, Rubik as FontSans } from "next/font/google"

export const fontSans = FontSans({
  subsets: ["latin"],
  variable: "--font-sans",
  weight: ["300", "400", "500", "700", "900"], // Light, Regular, Medium, Bold, Black
})

export const fontMono = FontMono({
  subsets: ["latin"],
  variable: "--font-mono",
})
