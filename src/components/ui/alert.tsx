"use client";
// src/components/ui/alert.tsx

import React from 'react';

export interface AlertProps {
  /**
   * The message or content to display inside the alert.
   */
  message: string | React.ReactNode;
  /**
   * Type of alert affecting the color styling.
   */
  type?: 'success' | 'info' | 'warning' | 'error';
}

export function Alert({ message, type = 'info' }: AlertProps) {
  const baseClasses = 'rounded p-4 mb-4 text-sm border';

  let colorClasses = '';
  switch (type) {
    case 'success':
      colorClasses = 'bg-green-100 text-green-800 border-green-400';
      break;
    case 'warning':
      colorClasses = 'bg-yellow-100 text-yellow-800 border-yellow-400';
      break;
    case 'error':
      colorClasses = 'bg-red-100 text-red-800 border-red-400';
      break;
    default:
      // info
      colorClasses = 'bg-blue-100 text-blue-800 border-blue-400';
  }

  return <div className={`${baseClasses} ${colorClasses}`}>{message}</div>;
}

export interface AlertDescriptionProps {
  /**
   * Text or elements that provide additional details for the alert.
   */
  children: React.ReactNode;
}

export function AlertDescription({ children }: AlertDescriptionProps) {
  return <p className="text-sm mt-2">{children}</p>;
}
