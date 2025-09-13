import * as React from 'react';

import { type ButtonProps } from '../../button/button.types';

type NavbarItemAttributes = Pick<ButtonProps, 'label' | 'disabled' | 'icon' | 'onClick'>

export type NavbarItemProps = NavbarItemAttributes;
