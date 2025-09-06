import { SolidIcon } from '../solid-icon';

import type { SVGSolidProps } from '../solid-icon.types';

export function CoinIcon(props: SVGSolidProps) {
  return (
    <SolidIcon {...props}>
      <path
        stroke="currentColor"
        stroke-linecap="round"
        stroke-linejoin="round"
        stroke-miterlimit="10"
        stroke-width="1.5"
        d="M12 21a9 9 0 1 0 0-18 9 9 0 0 0 0 18"
      ></path>

      <path
        stroke="currentColor"
        stroke-width="1.5"
        d="M16.473 9.763a5 5 0 1 0 0 4.475"
      ></path>

      <path
        stroke="currentColor"
        stroke-linecap="square"
        stroke-linejoin="round"
        stroke-width="1.5"
        d="M10 6v12m3-12v12"
      ></path>
    </SolidIcon>
  );
}
