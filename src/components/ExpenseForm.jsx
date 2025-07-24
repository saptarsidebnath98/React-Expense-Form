import { useState } from "react";

const ExpenseForm = ({ setExpenses }) => {
  const [formValue, setFormValue] = useState({
    title: "",
    category: "",
    amount: "",
  });

  const [error, setError] = useState({});

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormValue((prevState) => ({ ...prevState, [name]: value }));
  };

  const validate = (data) => {
    const errorData = {};
    if (!data.title) {
      errorData.title = "Title is required";
    }

    if (!data.category) {
      errorData.category = "Category is required";
    }

    if (!data.amount) {
      errorData.amount = "Amount is required";
    }

    setError(errorData);
    return errorData;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if(Object.keys(validate(formValue)).length) return;

    setExpenses((prevState) => [
      ...prevState,
      { ...formValue, id: crypto.randomUUID() },
    ]);

    setFormValue({
      title: "",
      category: "",
      amount: "",
    });
  };

  return (
    <form className="expense-form" onSubmit={handleSubmit}>
      <label htmlFor="title">Title:</label>
      <input
        type="text"
        name="title"
        id="title"
        value={formValue.title}
        onChange={handleChange}
      />
      <p className="error">{error.title}</p>

      <label htmlFor="category">Category:</label>
      <select
        name="category"
        id="category"
        value={formValue.category}
        onChange={handleChange}
      >
        <option value="" hidden>
          Select a category
        </option>
        <option value="Grocery">Grocery</option>
        <option value="Clothes">Clothes</option>
        <option value="Education">Education</option>
        <option value="Bills">Bills</option>
        <option value="Medicine">Medicine</option>
      </select>
      <p className="error">{error.category}</p>

      <label htmlFor="amount">Amount:</label>
      <input
        type="number"
        name="amount"
        id="amount"
        value={formValue.amount}
        onChange={handleChange}
      />
      <p className="error">{error.amount}</p>

      <button type="submit">Submit</button>
    </form>
  );
};

export default ExpenseForm;
