import * as React from 'react';

import classNames from '../utils';

import { Text, TextSize } from '../text/text';

import type { TitleProps } from './title.types';
import './title.css';

const Title = (props: TitleProps) => {
  const { value, subtitleValue } = props;

  const headerClassNames = classNames({
    'ch-header': true,
  });

  const titleClassNames = classNames({
    'ch-title': true,
  });

  return (
    <header className={headerClassNames}>
      <h1 className={titleClassNames}>
        <Text value={value} bold={true} size={TextSize.LARGE} />
      </h1>

      {subtitleValue ? <Text value={subtitleValue} /> : null}
    </header>
  );
};

export { Title };
