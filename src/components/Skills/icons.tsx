import React from 'react'

export const HtmlIcon: React.FC = () => (
  <svg width="48" height="48" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
    <circle cx="24" cy="24" r="22" fill="#E34F26" />
    <text x="50%" y="55%" textAnchor="middle" fontSize="10" fill="#fff" fontFamily="Arial">HTML</text>
  </svg>
)

export const CssIcon: React.FC = () => (
  <svg width="48" height="48" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
    <circle cx="24" cy="24" r="22" fill="#1572B6" />
    <text x="50%" y="55%" textAnchor="middle" fontSize="10" fill="#fff" fontFamily="Arial">CSS</text>
  </svg>
)

export const JsIcon: React.FC = () => (
  <svg width="48" height="48" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
    <circle cx="24" cy="24" r="22" fill="#F7DF1E" />
    <text x="50%" y="55%" textAnchor="middle" fontSize="10" fill="#000" fontFamily="Arial">JS</text>
  </svg>
)

export const ReactIcon: React.FC = () => (
  <svg width="48" height="48" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
    <circle cx="24" cy="24" r="22" fill="#61DAFB" />
    <text x="50%" y="55%" textAnchor="middle" fontSize="9" fill="#000" fontFamily="Arial">React</text>
  </svg>
)

export const TsIcon: React.FC = () => (
  <svg width="48" height="48" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
    <circle cx="24" cy="24" r="22" fill="#3178C6" />
    <text x="50%" y="55%" textAnchor="middle" fontSize="9" fill="#fff" fontFamily="Arial">TS</text>
  </svg>
)

export default { HtmlIcon, CssIcon, JsIcon, ReactIcon, TsIcon }
