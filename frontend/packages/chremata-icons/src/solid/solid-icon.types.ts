import * as React from 'react';

type SVGProps = {
  primaryColor: string;
  primaryColorHover?: string;
  primaryColorActive?: string;
  primaryColorDisabled?: string;
  disabled?: boolean;
};

type SVGTypes = 'solid';

type SVGSolidProps = React.SVGProps<SVGSVGElement> &
  Pick<
    SVGProps,
    | 'primaryColor'
    | 'primaryColorHover'
    | 'primaryColorActive'
    | 'primaryColorDisabled'
    | 'disabled'
  >;

export { type SVGTypes, type SVGSolidProps };
