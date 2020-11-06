import * as React from 'react'

interface LayoutMainProps {
  className?: string
}

const LayoutMain: React.FC<LayoutMainProps> = ({ children, className }) => {
  return <div className={className}>{children}</div>
}
export default LayoutMain
