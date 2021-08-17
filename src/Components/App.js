import { Header } from "./Header/Header";
import "./App.css";
import { Balance } from "./Balance/Balance";
import { IncomeExpense } from "./IncomeExpense/IncomeExpense";
import { TransactionList } from "./Transaction/TransactionList";
import { AddTransaction } from "./Transaction/AddTransaction";
import { GlobalProvider } from "../Context/GLobalState";

const App = () => {
  return (
    <GlobalProvider>
      <Header />
      <div className="container">
        <Balance />
        <IncomeExpense />
        <TransactionList />
        <AddTransaction />
      </div>
    </GlobalProvider>
  );
};

export default App;
