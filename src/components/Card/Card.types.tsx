import React from 'react';

export interface CardProps {
  children: React.ReactNode;
  defaultText?: string;
  backgroundColor?: string;
  disabled?: boolean;
}
