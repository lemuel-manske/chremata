import * as React from 'react';

type SVGProps = {
  disabled?: boolean;

  primaryColor: string;
  primaryColorDisabled?: string;
};

type SVGTypes = 'solid';

type SVGSolidProps = React.SVGProps<SVGSVGElement> &
  Pick<SVGProps, 'disabled' | 'primaryColor' | 'primaryColorDisabled'>;

export { type SVGTypes, type SVGSolidProps };
