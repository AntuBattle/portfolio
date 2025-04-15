"use client"

import React, { useEffect, useState } from "react"
import { evaluate } from "@mdx-js/mdx"
import * as runtime from "react/jsx-runtime"
import { MDXProvider } from "@mdx-js/react"
import Image from "next/image"
import CodeBlock from "./code-block"

interface BlogContentProps {
  content: string // MDX string
}

// 👇 All MDX components you want to support
const components = {
  img: (props: any) => (
    <Image
      src={props.src || ""}
      alt={props.alt || ""}
      width={600}
      height={400}
      className="rounded-md"
    />
  ),
  Image, // 👈 ✅ Required for <Image /> used directly in MDX
  code: ({ className, children }: any) => {
    const language = className?.replace("language-", "") || "plaintext"
    return <CodeBlock language={language} code={String(children)} />
  },
}

export default function BlogContent({ content }: BlogContentProps) {
  const [MDXContent, setMDXContent] = useState<React.ElementType | null>(null)

  useEffect(() => {
    const run = async () => {
      const { default: Comp } = await evaluate(content, {
        ...runtime,
        useMDXComponents: () => components, // ✅ Required to bind Image, CodeBlock, etc.
      })
      setMDXContent(() => Comp)
    }

    run()
  }, [content])

  if (!MDXContent) return <p>Loading content...</p>

  return (
    <div className="blog-content prose prose-invert max-w-none">
      <MDXProvider components={components}>
        <MDXContent />
      </MDXProvider>
    </div>
  )
}
