/**
 * Utility function for merging Tailwind CSS classes
 * Based on Cult UI's cn utility function
 * Combines clsx and tailwind-merge for optimal class merging
 */
import clsx from 'clsx';
import { twMerge } from 'tailwind-merge';

/**
 * Merges class names intelligently, resolving Tailwind class conflicts
 * @param {...(string|object|array)} inputs - Class names to merge
 * @returns {string} Merged class string
 */
export function cn(...inputs) {
  return twMerge(clsx(inputs));
}

