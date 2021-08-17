import React, { useContext, useState } from "react";
import { GlobalContext } from "../../Context/GLobalState";
import { numberWithCommas } from "../utils/Format";
export const Balance = ({ loading }) => {
  const { transaction } = useContext(GlobalContext);
  const amounts = transaction.map((trans) => trans.amount);

  const total = amounts.reduce((acc, item) => (acc += item), 0).toFixed(2);
  useState(() => {
    if (total === 0.0) {
      return loading;
    }
  }, [total]);
  return (
    <>
      <h4>Your Balance</h4>
      <h1>$ {numberWithCommas(total)}</h1>
    </>
  );
};
