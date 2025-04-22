"use client"

import { useState, useEffect } from "react"

interface TypewriterEffectProps {
  words: string[]
  delay?: number
  infinite?: boolean
}

export function TypewriterEffect({ words, delay = 100, infinite = true }: TypewriterEffectProps) {
  const [currentWordIndex, setCurrentWordIndex] = useState(0)
  const [currentText, setCurrentText] = useState("")
  const [isDeleting, setIsDeleting] = useState(false)

  useEffect(() => {
    const timeout = setTimeout(
      () => {
        // Current word being processed
        const currentWord = words[currentWordIndex]

        // If deleting, remove the last character
        // If typing, add the next character
        setCurrentText((prev) =>
          isDeleting ? prev.substring(0, prev.length - 1) : currentWord.substring(0, prev.length + 1),
        )

        // If we've completed typing the current word
        if (!isDeleting && currentText === currentWord) {
          // Wait a bit before starting to delete
          setTimeout(() => setIsDeleting(true), 1500)
        }
        // If we've deleted the entire word
        else if (isDeleting && currentText === "") {
          setIsDeleting(false)
          // Move to the next word
          setCurrentWordIndex((prev) => (infinite ? (prev + 1) % words.length : Math.min(prev + 1, words.length - 1)))
        }
      },
      isDeleting ? delay / 2 : delay,
    )

    return () => clearTimeout(timeout)
  }, [currentText, currentWordIndex, isDeleting, words, delay, infinite])

  return (
    <span className="text-lg md:text-xl text-emerald-500 font-medium">
      {currentText}
      <span className="animate-blink">|</span>
    </span>
  )
}
