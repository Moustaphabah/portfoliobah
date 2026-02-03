
import './SkillsCarousel.css'

import Marquee from './Marquee'
import type { IconType } from 'react-icons'
import { FaReact, FaGithub, FaGitAlt, FaJsSquare, FaCss3Alt, FaHtml5 } from 'react-icons/fa'
import { SiVite, SiTypescript } from 'react-icons/si'

const techStack: { name: string; icon: IconType }[] = [
  { name: 'React', icon: FaReact },
  { name: 'Git', icon: FaGitAlt },
  { name: 'JS', icon: FaJsSquare },
  { name: 'Vite', icon: SiVite },
  { name: 'TypeScript', icon: SiTypescript },
  { name: 'GitHub', icon: FaGithub },
  { name: 'CSS', icon: FaCss3Alt },
  { name: 'HTML', icon: FaHtml5 },
]

export default function SkillsCarousel() {
  return (
    <Marquee speed={60} pauseOnHover className="py-10 bg-slate-50">
      {techStack.map((tech) => {
        const Icon = tech.icon
        return (
          <div
            key={tech.name}
            className="flex flex-col items-center justify-center p-6 bg-white border rounded-xl shadow-sm min-w-[120px] hover:bg-[#ff9a05] transition">
 
        
            <div className="text-4xl mb-2"><Icon /></div>
            <span className="font-semibold text-slate-700">{tech.name}</span>
          </div>
        )
      })}
    </Marquee>
  )
}