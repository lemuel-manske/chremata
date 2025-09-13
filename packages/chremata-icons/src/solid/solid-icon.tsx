import { type SVGSolidProps } from './solid-icon.types';

function SolidIcon(props: SVGSolidProps) {
  const {
    primaryColor,
    primaryColorDisabled,
    disabled = false,
    children,
    ...svgProps
  } = props;

  const idHash = `svg-${Math.random().toString(36).slice(-6)}`;

  return (
    <svg
      {...svgProps}
      id={idHash}>
      {children}

      <style>
        {!disabled && primaryColor
          ? `#${idHash} { fill: ${primaryColor}; }`
          : ''}

        {disabled && primaryColorDisabled
          ? `#${idHash} { fill: ${primaryColorDisabled}; }`
          : ''}
      </style>
    </svg>
  );
}

export { SolidIcon };
