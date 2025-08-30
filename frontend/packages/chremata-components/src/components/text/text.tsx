import classNames from '../utils';

import { type TextProps, TextSize, TextColor } from './text.types';

import './text.css';

const Text = (props: TextProps) => {
  const {
    value,
    bold = false,
    italic = false,
    color = TextColor.DARK,
    size = TextSize.REGULAR,
    className: customClassNames = '',
  } = props;

  const baseClassNames = classNames({
    'ch-text': true,
    'ch-text--light': color === TextColor.LIGHT,
    'ch-text--dark': color === TextColor.DARK,
    'ch-text--bold': bold,
    'ch-text--italic': italic,
    'ch-text--regular': size === TextSize.REGULAR,
    'ch-text--small': size === TextSize.SMALL,
    'ch-text--large': size === TextSize.LARGE,
  });

  const textClassNames = `${baseClassNames} ${customClassNames}`;

  return <span className={textClassNames}>{value}</span>;
};

export { Text, TextSize, TextColor, type TextProps };
