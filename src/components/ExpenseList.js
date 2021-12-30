import React from "react";
import ExpenseItems from "./ExpenseItems";
import "./ExpenseList.css";
const ExpenseList = (props) => {
  if (props.items.length === 0) {
    return <h2 className="expenses-list__fallback">Expenses not found</h2>;
  }

  return (
    <div>
      <ul className="expenses-list">
        {props.items.map((expense) => (
          <ExpenseItems
            key={expense.id}
            date={expense.date}
            title={expense.title}
            amount={expense.amount}
          />
        ))}
      </ul>
    </div>
  );
};

export default ExpenseList;
