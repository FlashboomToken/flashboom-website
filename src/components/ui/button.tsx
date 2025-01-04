// src/components/ui/button.tsx

import React from 'react';

export interface ButtonProps {
  /**
   * The text or elements inside the button.
   */
  children: React.ReactNode;
  /**
   * Optional click handler.
   */
  onClick?: () => void;
  /**
   * HTML button type, defaults to "button".
   */
  type?: 'button' | 'submit' | 'reset';
  /**
   * Visual style variant (e.g., primary or secondary).
   */
  variant?: 'primary' | 'secondary' | 'ghost';
  size?: 'sm' | 'md' | 'lg';
  className?: string; // si vous voulez accepter className depuis l'extérieur
}

export function Button({
  children,
  onClick,
  type = 'button',
  variant = 'primary',
}: ButtonProps) {
  const baseClasses =
    'px-4 py-2 rounded text-white font-semibold focus:outline-none transition-colors';

  const variantClasses =
    variant === 'primary'
      ? 'bg-blue-600 hover:bg-blue-700'
      : 'bg-gray-500 hover:bg-gray-600';

  return (
    <button type={type} onClick={onClick} className={`${baseClasses} ${variantClasses}`}>
      {children}
    </button>
  );
}
