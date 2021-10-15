import Item from "./Item";

const List = ({ listdata }) => {
  return (
    <div className="list">
      {listdata.map((item) => {
        const { title, date, time } = item;
        return <Item title={title} date={date} time={time} />;
      })}
    </div>
  );
};

export default List;
