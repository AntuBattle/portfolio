"use client"
import { Highlight, themes } from "prism-react-renderer"

interface CodeBlockProps {
  code: string
  language: string
}

export default function CodeBlock({ code, language }: CodeBlockProps) {
  return (
    <Highlight theme={themes.nightOwl} code={code.trim()} language={language as any}>
      {({ className, style, tokens, getLineProps, getTokenProps }) => (
        <pre className={`${className} p-4 rounded-md overflow-auto my-4 cyber-card`} style={style}>
          <div className="flex items-center justify-between mb-2">
            <span className="text-xs text-muted-foreground">{language}</span>
          </div>
          <code>
            {tokens.map((line, i) => (
              <div key={i} {...getLineProps({ line, key: i })} className="table-row">
                <span className="table-cell text-right pr-4 select-none text-muted-foreground text-xs w-8">
                  {i + 1}
                </span>
                <span className="table-cell">
                  {line.map((token, key) => (
                    <span key={key} {...getTokenProps({ token, key })} />
                  ))}
                </span>
              </div>
            ))}
          </code>
        </pre>
      )}
    </Highlight>
  )
}
