import React, { useState } from "react";
import Card from "./Card";
import "./Expences.css";
import "./ExpenseFilter";
import ExpenseChart from "./ExpenseChart";
import ExpensesFilter from "./ExpenseFilter";
import ExpenseList from "./ExpenseList";
function Expences(props) {
  const [filteredYear, setFilteredYear] = useState("2020");
  const atYearHandler = (year) => {
    const yearData = `${year}`;
    setFilteredYear(yearData);
  };
  const getFilteredYear = props.items.filter((expense) => {
    return expense.date.getFullYear().toString() === filteredYear;
  });

  return (
    <div>
      <li>
        <Card className="expenses ">
          <ExpensesFilter selected={filteredYear} onYear={atYearHandler} />
          <ExpenseChart expenses={getFilteredYear} />
          <ExpenseList items={getFilteredYear} />
        </Card>
      </li>
    </div>
  );
}
export default Expences;
