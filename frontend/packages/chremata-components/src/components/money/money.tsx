import * as React from 'react';

import classNames from '../utils';

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
    'ch-money': true,
    'ch-money--revenue': true,
  });

  return <span className={revenueClassNames}>+{BRL(amount)}</span>;
};

const Expense = (props: MoneyTypeProps) => {
  const { amount } = props;

  const expenseClassNames = classNames({
    'ch-money': true,
    'ch-money--expense': true,
  });

  return <span className={expenseClassNames}>-{BRL(amount)}</span>;
};

const Neutral = (props: MoneyTypeProps) => {
  const { amount } = props;

  const neutralClassNames = classNames({
    'ch-money': true,
  });

  return <span className={neutralClassNames}>{BRL(amount)}</span>;
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
