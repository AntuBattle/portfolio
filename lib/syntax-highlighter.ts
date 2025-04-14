import { Highlight, themes } from "prism-react-renderer"

export function highlightCode(code: string, language: string) {
  return (
    <Highlight theme={themes.nightOwl} code={code} language={language}>
      {({ className, style, tokens, getLineProps, getTokenProps }) => (
        <pre className={className} style={{ ...style, padding: "1rem", borderRadius: "0.5rem", overflow: "auto" }}>
          {tokens.map((line, i) => (
            <div key={i} {...getLineProps({ line, key: i })}>
              <span className="line-number">{i + 1}</span>
              {line.map((token, key) => (
                <span key={key} {...getTokenProps({ token, key })} />
              ))}
            </div>
          ))}
        </pre>
      )}
    </Highlight>
  )
}
