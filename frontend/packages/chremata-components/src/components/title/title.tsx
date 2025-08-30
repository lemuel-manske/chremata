import * as React from 'react';

import type { TitleLevel, TitleProps } from './title.types';

import './title.css';
import classNames from '../utils';

const Title = (props: TitleProps) => {
  const { value, subtitleValue, level = 1 } = props;

  const Tag = `h${level}` as React.ElementType;

  const subtitleId = React.useId();

  const headerClassNames = classNames({
    'ch-header': true,
  });

  const titleClassNames = classNames({
    'ch-title': true,
    'ch-title--light': [6, 5].includes(level),
    'ch-title--regular': [3, 4].includes(level),
    'ch-title--medium': level === 2,
    'ch-title--bold': level === 1,
  });

  return (
    <header className={headerClassNames}>
      <Tag className={titleClassNames} aria-describedby={subtitleValue ? subtitleId : null}>
        {value}
      </Tag>

      {subtitleValue ? <p id={subtitleId}>{subtitleValue}</p> : null}
    </header>
  );
};

export { Title };
