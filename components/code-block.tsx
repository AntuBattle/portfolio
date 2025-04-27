"use client"

import React from "react"
import { Highlight, themes } from "prism-react-renderer"

interface CodeBlockProps {
  code: string
  language: string
}

export default function CodeBlock({ code, language }: CodeBlockProps) {
  return (
    <Highlight theme={themes.oneDark} code={code.trim()} language={language as any}>
      {({ className, style, tokens, getLineProps, getTokenProps }) => (
        <pre className={`${className} p-4 rounded-md overflow-auto my-4 cyber-card`} style={style as React.CSSProperties}>
          <div className="flex items-center justify-between mb-2">
            <span className="text-xs text-muted-foreground">{language}</span>
          </div>
          <code>
            {tokens.map((line, i) => {
              const { key: lineKey, ...lineProps } = getLineProps({ line, key: i })
              return (
                <div key={lineKey as string} {...lineProps} className="table-row">
                  <span className="table-cell text-right pr-4 select-none text-muted-foreground text-xs w-8">
                    {i + 1}
                  </span>
                  <span className="table-cell">
                    {line.map((token, tokenIndex) => {
                      const { key: tokenKey, ...tokenProps } = getTokenProps({
                        token,
                        key: tokenIndex,
                      })
                      return <span key={tokenKey as string} {...tokenProps} />
                    })}
                  </span>
                </div>
              )
            })}
          </code>
        </pre>
      )}
    </Highlight>
  )
}
