import * as React from 'react';

import classNames from '../utils';
import { Text } from '../text/text';

import { type MoneyProps, type MoneyTypeProps, MoneyType } from './money.types';

import './money.css';

const defaultCurrencyArgs: Intl.NumberFormatOptions = {
  maximumFractionDigits: 2,
  minimumFractionDigits: 2,
  style: 'currency',
};

const BRL = (amount: number) =>
  Intl.NumberFormat('pt-BR', {
    ...defaultCurrencyArgs,
    currency: 'BRL',
  }).format(Math.abs(amount));

const Revenue = (props: MoneyTypeProps) => {
  const { amount } = props;

  const revenueClassNames = classNames({
    'ch-money--revenue': true,
  });

  return <Text className={revenueClassNames} value={`+${BRL(amount)}`} />;
};

const Expense = (props: MoneyTypeProps) => {
  const { amount } = props;

  const expenseClassNames = classNames({
    'ch-money--expense': true,
  });

  return <Text className={expenseClassNames} value={`-${BRL(amount)}`} />;
};

const Neutral = (props: MoneyTypeProps) => {
  const { amount } = props;

  return <Text className={'ch-money--neutral'} value={BRL(amount)} />;
};

const decideType = {
  [MoneyType.REVENUE]: Revenue,
  [MoneyType.EXPENSE]: Expense,
  [MoneyType.NEUTRAL]: Neutral,
};

const Money = (props: MoneyProps) => {
  const { type } = props;

  return <React.Fragment>{decideType[type](props)}</React.Fragment>;
};

Money.Revenue = Revenue;
Money.Expense = Expense;
Money.Neutral = Neutral;

export { Money, type MoneyProps, MoneyType };
