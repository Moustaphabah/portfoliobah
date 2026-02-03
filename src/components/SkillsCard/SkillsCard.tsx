import React from 'react'

type Props = { children?: React.ReactNode }
export default function SkillsCard({ children }: Props) {
  return <div className="container mx-auto px-4">{children}</div>
}
