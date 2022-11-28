const root = document.getElementById("root");

function Times() {
  function ticks() {
    const ele = (
      <div>
        <h1>Hello Taylor</h1>
        <h2>It's {new Date().toLocaleTimeString()}</h2>
      </div>
    );
    console.log("hello");

    root.render(ele);
  }

  setInterval(ticks, 1000);
}

export default Times;
