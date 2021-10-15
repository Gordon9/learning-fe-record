const Item = ({ id, title, date, time, deleteData }) => {
  const deleteItem = () => {
    deleteData(function (prev) {
      return prev.filter((item) => item.id !== id);
    });
  };

  return (
    <div className="item">
      <p>{title}</p>
      <p>{date}</p>
      <p>{time}</p>
      <button className="remove" onClick={deleteItem}>
        Remove
      </button>
    </div>
  );
};

export default Item;
