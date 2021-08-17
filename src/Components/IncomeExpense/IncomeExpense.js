import React, { useContext } from "react";
import { GlobalContext } from "../../Context/GLobalState";
import { numberWithCommas } from "../utils/Format";
export const IncomeExpense = () => {
  const { transaction } = useContext(GlobalContext);
  const amounts = transaction.map((trans) => trans.amount);

  const income = amounts
    .filter((item) => item > 0)
    .reduce((acc, item) => (acc += item), 0)
    .toFixed(2);

  const expense = (
    amounts.filter((item) => item < 0).reduce((acc, item) => (acc += item), 0) *
    -1
  ).toFixed(2);

  return (
    <div className="inc-exp-container">
      <div>
        <h4>Income</h4>
        <p id="money-plus" className="money plus">
          {numberWithCommas(income)}
        </p>
      </div>
      <div>
        <h4>Expense</h4>
        <p id="money-minus" className="money minus">
          {numberWithCommas(expense)}
        </p>
      </div>
    </div>
  );
};
