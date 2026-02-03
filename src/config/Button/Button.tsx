import React from 'react';
import './button.css';

interface ButtonProps {
  title?: string;
  onClick?: () => void;
  children?: React.ReactNode;
  className?: string;
}

const Button = ({ title, onClick, children, className }: ButtonProps)=> {
  return (
    <button type="button" title={title} onClick={onClick} className={className}>
      {children ?? title}
    </button>
  );
};

export default Button;
