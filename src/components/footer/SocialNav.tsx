import React from "react";
import { socials } from "./socials.tsx";

const SocialNav = () => {
  return (
    <nav style={{ "--count": socials.length } as React.CSSProperties}>
      <ul>
        {socials.map((link, index) => (
          <li key={link.label} style={{ "--index": index + 1 } as React.CSSProperties}>
            <a href={link.href} target="_blank" rel="noreferrer noopener">
              <span>
                {link.icon}
                {link.label}
              </span>
            </a>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default SocialNav;
