import React, { useContext, useEffect } from "react";
import { GlobalContext } from "../../Context/GLobalState";
import { Transaction } from "./Transaction";
export const TransactionList = () => {
  const { transaction, getTransactions } = useContext(GlobalContext);

  useEffect(() => {
    getTransactions();
    // eslint-disable-next-line
  }, []);

  return (
    <>
      <h3>History</h3>
      {transaction.length === 0 ? (
        <ul id="list" className="list">
          <p
            style={{
              height: "100%",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              color: "aliceblue",
              fontSize: "22px",
            }}
          >
            Add items below
          </p>
        </ul>
      ) : (
        <ul id="list" className="list">
          {transaction.map((trans) => (
            <Transaction key={trans._id} trans={trans} />
          ))}
        </ul>
      )}
    </>
  );
};
