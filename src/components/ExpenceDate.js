import "./ExpenceDate.css";
function ExpenceDate(props) {
  let month = props.date.toLocaleString("en-US", { month: "long" });
  let day = props.date.toLocaleString("en-US", { day: "2-digit" });
  let year = props.date.toLocaleString("en-US", { year: "numeric" });
  return (
    <div className="expense-date">
      <div className="date__month">{month}</div>
      <div className="expense-date__day">{day}</div>
      <div className="date__year">{year}</div>
    </div>
  );
}
export default ExpenceDate;
