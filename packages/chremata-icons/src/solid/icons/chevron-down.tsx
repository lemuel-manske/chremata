import { SolidIcon } from '../solid-icon';

import type { SVGSolidProps } from '../solid-icon.types';

export function ChevronDown(svgProps: SVGSolidProps) {
  return (
    <SolidIcon
      viewBox="0 0 24 24"
      {...svgProps}>
      <path
        fill-rule="evenodd"
        d="m4.46 9.48-.519.52 3.539 3.542c1.947 1.948 3.62 3.595 3.718 3.66.24.161.445.216.802.216.357 0 .562-.055.802-.216.098-.065 1.771-1.712 3.718-3.66L20.06 10l-.53-.53-.53-.53-3.5 3.5-3.5 3.5-3.49-3.49c-1.92-1.92-3.499-3.49-3.511-3.49-.011 0-.254.234-.539.52"
      />
    </SolidIcon>
  );
}
