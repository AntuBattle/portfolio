"use client"

import React from "react"

import { useEffect, useState } from "react"
import DOMPurify from "isomorphic-dompurify"
import CodeBlock from "./code-block"

interface BlogContentProps {
  content: string
}

export default function BlogContent({ content }: BlogContentProps) {
  const [processedContent, setProcessedContent] = useState("")

  useEffect(() => {
    // Process content to extract and replace code blocks
    const processContent = () => {
      // Sanitize the HTML content
      const sanitizedContent = DOMPurify.sanitize(content)

      // Create a temporary DOM element to parse the HTML
      const tempDiv = document.createElement("div")
      tempDiv.innerHTML = sanitizedContent

      // Find all pre > code elements
      const codeBlocks = tempDiv.querySelectorAll("pre > code")

      // Replace each code block with a placeholder that we'll replace with our CodeBlock component
      codeBlocks.forEach((codeBlock, index) => {
        const language = codeBlock.className.replace("language-", "") || "javascript"
        const code = codeBlock.textContent || ""

        // Create a placeholder
        const placeholder = document.createElement("div")
        placeholder.setAttribute("data-code-block", "true")
        placeholder.setAttribute("data-code", encodeURIComponent(code))
        placeholder.setAttribute("data-language", language)
        placeholder.setAttribute("data-index", index.toString())

        // Replace the pre element with our placeholder
        const preElement = codeBlock.parentElement
        if (preElement && preElement.parentElement) {
          preElement.parentElement.replaceChild(placeholder, preElement)
        }
      })

      setProcessedContent(tempDiv.innerHTML)
    }

    processContent()
  }, [content])

  // Render the content with code blocks
  const renderContent = () => {
    if (!processedContent) return null

    // Split the content by code block placeholders
    const parts = processedContent.split(/<div data-code-block="true"[^>]*><\/div>/)
    const placeholders = processedContent.match(/<div data-code-block="true"[^>]*><\/div>/g) || []

    return (
      <>
        {parts.map((part, index) => (
          <React.Fragment key={index}>
            <div dangerouslySetInnerHTML={{ __html: part }} />
            {placeholders[index] &&
              (() => {
                // Extract code and language from the placeholder
                const placeholder = new DOMParser().parseFromString(placeholders[index], "text/html").body
                  .firstChild as Element
                const code = decodeURIComponent(placeholder.getAttribute("data-code") || "")
                const language = placeholder.getAttribute("data-language") || "javascript"

                return <CodeBlock code={code} language={language} />
              })()}
          </React.Fragment>
        ))}
      </>
    )
  }

  return <div className="blog-content">{renderContent()}</div>
}
