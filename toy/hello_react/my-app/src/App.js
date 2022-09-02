import "./App.css";

const House = (props) => {
  return (
    <>
      <h1>Position: {props.name}</h1>
      <h2>Distance: {props.distance} miles</h2>
      <h2>Check-in-date: {props.check_in_date}</h2>
      <h2>Price: {props.price}</h2>
    </>
  );
};

const App = () => {
  return (
    <div className="App">
      <House
        name={"shanghai"}
        distance={58}
        check_in_date={"Nov 22"}
        price={3999}
      />
      <House />
      <House />
      <House />
      <House />
    </div>
  );
};

export default App;
