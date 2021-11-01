import React from "react";
import CoinRow from "./CoinRow";

const titles = ["#", "Asset", "Symbol", "Price (USD)", "Price Change (%)", "Market Cap (M)"];

const TableCoins = ({ coins }) => {
  console.log(coins);
  return (
    <table className="table table-dark mt-4 table-hover">
      <thead>
        <tr>
          {titles.map((title) => (
            <td>{title}</td>
          ))}
        </tr>
      </thead>
      <tbody>
        {coins.map((coin, index) => (
          <CoinRow coin={coin} key={index} index={index + 1} />
        ))}
      </tbody>
    </table>
  );
};

export default TableCoins;
