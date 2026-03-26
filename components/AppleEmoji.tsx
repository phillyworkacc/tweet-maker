'use client'
import { AppleEmojiFont } from "@/app/fonts"

export default function AppleEmoji ({ emoji }: { emoji: string | React.ReactNode }) {
   return (
      <span className={AppleEmojiFont.className}>{emoji}</span>
   )
}
