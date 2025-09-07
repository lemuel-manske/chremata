import { classNames } from '@chremata/utils';

import { type TableCaptionProps } from './table-caption.types';

import './index.css';

export function TableCaption(props: TableCaptionProps) {
  const { caption } = props;

  const classes = classNames({
    'ch-caption': true,
  });

  return (
    <caption aria-hidden={true} className={classes}>
      {caption}
    </caption>
  );
}
