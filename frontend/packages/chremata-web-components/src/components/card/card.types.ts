import { type CardBodyProps } from './card-body/card-body.types';
import { type CardHeaderProps } from './card-header/card-header.types';

export type CardProps = {
  /**
   * Card title.
   */
  title: string;

  /**
   * Card subtitle. Defaults to "".
   */
  subtitle?: string;

  /**
   * Card content.
   */
  children: [
    React.ReactElement<CardHeaderProps>,
    React.ReactElement<CardBodyProps>,
  ];
};

export type DefaultCardProps = Required<Pick<CardProps, 'subtitle'>>;
