enum MoneyType {
  REVENUE,
  EXPENSE,
  NEUTRAL,
}

type MoneyProps = {
  amount: number;
  type: MoneyType;
};

type MoneyTypeProps = Pick<MoneyProps, 'amount'>;

export { type MoneyProps, type MoneyTypeProps, MoneyType };
