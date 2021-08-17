import React, { useContext } from "react";
import { GlobalContext } from "../../Context/GLobalState";
import { numberWithCommas } from "../utils/Format";
export const Transaction = ({ trans }) => {
  const { deleteTransaction } = useContext(GlobalContext);
  const sign = trans.amount < 0 ? "-" : "+";
  return (
    <>
      <li className={trans.amount < 0 ? "minus" : "plus"}>
        {trans.text}{" "}
        <span>
          {sign} ${numberWithCommas(Math.abs(trans.amount))}
        </span>
        <button
          className="delete-btn"
          onClick={() => deleteTransaction(trans._id)}
        >
          x
        </button>
      </li>
    </>
  );
};
