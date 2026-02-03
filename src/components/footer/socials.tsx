import React, { ReactNode } from "react";
import { FaGlobe, FaTwitter, FaMastodon, FaCodepen } from 'react-icons/fa'

export type SocialLink = {
  label: string;
  href: string;
  icon: ReactNode;
};

export const socials: SocialLink[] = [
  { label: "Website", href: "#", icon: <FaGlobe /> },
  { label: "Twitter", href: "https://twitter.com/jh3yy", icon: <FaTwitter /> },
  { label: "Mastodon", href: "https://front-end.social/jhey", icon: <FaMastodon /> },
  { label: "CodePen", href: "https://codepen.io/jh3y", icon: <FaCodepen /> },
];
