import Item from "./Item";

const List = ({ listdata, deleteData }) => {
  return (
    <div className="list">
      {listdata.map((item) => {
        const { title, date, time, id } = item;
        return (
          <Item
            title={title}
            date={date}
            time={time}
            key={id}
            id={id}
            deleteData={deleteData}
          />
        );
      })}
    </div>
  );
};

export default List;
