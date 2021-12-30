import React, { useState } from "react";

import "./ExpenseForm.css";
function Form(props) {
  //for title
  const [setTitle, setEnteredTitle] = useState("");
  const addInputHandler = (event) => {
    setEnteredTitle(event.target.value);
  };
  //for Amount
  const [setAmount, setEnteredAmount] = useState("");
  const addAmountHandler = (event) => {
    setEnteredAmount(event.target.value);
  };
  //for date

  const [setDate, setEnteredDate] = useState("");

  const addDateHandler = (event) => {
    let newDate = new Date(event.target.value).toISOString().substr(0, 10);

    setEnteredDate(newDate);
  };
  const formSubmitHandler = (event) => {
    event.preventDefault();
    const expencesData = {
      title: setTitle,
      amount: +setAmount,
      date: new Date(setDate),
    };
    props.onGetUserExpences(expencesData);
    setEnteredTitle("");
    setEnteredAmount("");
    setEnteredDate("");
    props.onForm(false);
  };
  const formHandler = () => {
    props.onForm(false);
  };
  return (
    <form onSubmit={formSubmitHandler}>
      <div className="new-expense__controls ">
        <div className="new-expense__control ">
          <label className="new-expense__control label">Title</label>
          <input
            type="text"
            value={setTitle}
            className="new-expense__control input"
            onChange={addInputHandler}
          ></input>
        </div>
        <div className="new-expense__control ">
          <label className="new-expense__control label">Amount</label>
          <input
            type="number"
            value={setAmount}
            min="0.01"
            step="0.01"
            className="new-expense__control input"
            onChange={addAmountHandler}
          ></input>
        </div>
        <div className="new-expense__control ">
          <label className="new-expense__control label">Date</label>
          <input
            type="date"
            value={setDate}
            min="2019,1,1"
            max="2022-12-31"
            className="new-expense__control input"
            onChange={addDateHandler}
            required
          ></input>
        </div>
      </div>
      <div className="new-expense__actions">
        <button type="button" onClick={formHandler}>
          Cancel
        </button>
        <button type="submit" onClick={formSubmitHandler}>
          Add Expenses
        </button>
      </div>
    </form>
  );
}
export default Form;
