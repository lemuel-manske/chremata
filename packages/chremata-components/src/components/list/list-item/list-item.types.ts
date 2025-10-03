import * as React from 'react';

type ListItemAttributes = {
  /**
   * The content of the list item.
   */
  children: React.ReactNode;

  /**
   * Provides an accessible label for the list item.
   */
  label?: string;
};

export type ListItemProps = ListItemAttributes;
