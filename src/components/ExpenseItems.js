import React from "react";
import "./ExpenseItems.css";
import Card from "./Card";

import ExpenceDate from "./ExpenceDate";
function ExpenseItems(props) {
  return (
    <Card className="expense-item ">
      <ExpenceDate date={new Date(props.date)}></ExpenceDate>
      <div className="expense-item__description">
        <h2>{props.title}</h2>

        <div className="expense-item__price">${props.amount}</div>
      </div>
    </Card>
  );
}
export default ExpenseItems;
