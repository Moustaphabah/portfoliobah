import { ReactNode } from "react";

export type SocialLink = {
  label: string;
  href: string;
  icon: ReactNode;
};

export const socials: SocialLink[] = [
  { label: "Socials", href: "#", icon: <svg>...</svg> },
  { label: "Twitter", href: "https://twitter.com/jh3yy", icon: <svg>...</svg> },
  { label: "Mastodon", href: "https://front-end.social/jhey", icon: <svg>...</svg> },
  { label: "CodePen", href: "https://codepen.io/jh3y", icon: <svg>...</svg> },
];
