const Item = ({ title, date, time }) => {
  return (
    <div className="item">
      <p>{title}</p>
      <p>{date}</p>
      <p>{time}</p>
      <button className="remove">Remove</button>
    </div>
  );
};

export default Item;
