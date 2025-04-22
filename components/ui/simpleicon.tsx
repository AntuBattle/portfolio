// Helper function to render SVG icon from simple-icons
function SimpleIcon({ icon, className = "" }: { icon: { path: string; title: string }; className?: string }) {
    return (
      <svg role="img" viewBox="0 0 24 24" className={className} fill="currentColor" xmlns="http://www.w3.org/2000/svg">
        <title>{icon.title}</title>
        <path d={icon.path} />
      </svg>
    )
  }

  export default SimpleIcon