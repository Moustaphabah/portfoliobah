import React from 'react'

type Props = { children?: React.ReactNode }
export default function SkillsCard({ children }: Props) {
  return <div id="SkillsCarousel" className="container mx-auto px-4 skillcard">{children}</div>
}
    
