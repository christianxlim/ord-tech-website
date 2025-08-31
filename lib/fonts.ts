import { JetBrains_Mono as FontMono, Rubik as FontSans, Inter as FontDisplay } from "next/font/google"

export const fontSans = FontSans({
  subsets: ["latin"],
  variable: "--font-sans",
  weight: ["300", "400", "500", "700", "900"], // Light, Regular, Medium, Bold, Black
})

export const fontMono = FontMono({
  subsets: ["latin"],
  variable: "--font-mono",
})

export const fontDisplay = FontDisplay({
  subsets: ["latin"],
  variable: "--font-display",
  weight: ["400", "500", "600", "700", "800", "900"], // Regular, Medium, Semibold, Bold, Extra Bold, Black
})
