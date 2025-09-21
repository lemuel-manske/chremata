import { classNames } from '@chremata/utils';

import { type ModalHeaderProps } from './modal-header.types';
import { useModalHeader } from './use-modal-header';

export function ModalHeader(props: ModalHeaderProps) {
  const { title, button } = useModalHeader(props);

  const classes = classNames({
    'ch-modal-header': true,
  });

  return (
    <div className={classes}>
      {title}
      {button}
    </div>
  );
}
