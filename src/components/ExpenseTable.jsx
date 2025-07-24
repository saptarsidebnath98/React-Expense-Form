const ExpenseTable = ({ expenses }) => {
  return (
    <table>
      <thead>
        <tr>
          <th>Title</th>
          <th>
            Category <button>&#8595;</button>
          </th>
          <th>
            Amount <button>↕</button>
          </th>
        </tr>
      </thead>
      <tbody>
        {expenses.map(({ id, title, category, amount }) => (
          <tr key={id}>
            <td>{title}</td>
            <td>{category}</td>
            <td>₹{amount}</td>
          </tr>
        ))}
      </tbody>
      <tfoot>
        <tr>
          <td>Total</td>
          <td>=</td>
          <td>
            {expenses
              .map((i) => i.amount)
              .reduce((total, curVal) => Number(total) + Number(curVal))}
          </td>
        </tr>
      </tfoot>
    </table>
  );
};

export default ExpenseTable;
