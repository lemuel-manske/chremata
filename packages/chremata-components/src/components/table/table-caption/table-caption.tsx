import { type TableCaptionProps } from './table-caption.types';

export function TableCaption(props: TableCaptionProps) {
  const { caption } = props;

  return (
    <caption
      aria-hidden={true}>
      {caption}
    </caption>
  );
}
