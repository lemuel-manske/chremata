import { SolidIcon } from '../solid-icon';

import type { SVGSolidProps } from '../solid-icon.types';

export function ChevronUp(svgProps: SVGSolidProps) {
  return (
    <SolidIcon
      viewBox="0 0 24 24"
      {...svgProps}>
      <path
        fill-rule="evenodd"
        d="M11.685 6.601c-.427.089-.389.054-4.145 3.804l-3.6 3.594.53.53.53.531 3.5-3.5 3.5-3.5 3.5 3.5 3.5 3.5.53-.53.53-.53-3.5-3.502c-1.925-1.927-3.584-3.565-3.686-3.641a1.68 1.68 0 0 0-.352-.196 1.92 1.92 0 0 0-.837-.06"
      />
    </SolidIcon>
  );
}
