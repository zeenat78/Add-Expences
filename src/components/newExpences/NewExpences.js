import React, { useState } from "react";
import "./NewExpence.css";
import Form from "./ExpenseForm";
function NewExpence(props) {
  const [form, setForm] = useState(false);
  const showFormHandler = () => {
    setForm(true);
  };
  const userExpensesHandler = (enteredExpenceData) => {
    const expenceData = {
      ...enteredExpenceData,
      id: Math.random().toString(),
    };
    props.onNewExpenseData(expenceData);
  };
  return (
    <div className="new-expense">
      {form === true ? (
        <Form onGetUserExpences={userExpensesHandler} onForm={setForm}></Form>
      ) : (
        <button onClick={showFormHandler}>Add new expense</button>
      )}
    </div>
  );
}
export default NewExpence;
