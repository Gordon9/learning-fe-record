function Header() {
  return (
    <header>
      <nav>
        <img src="./3500.jpg" width="200px" alt="" />
      </nav>
    </header>
  );
}

function MainContent() {
  return (
    <div>
      <h1>Brothers mind</h1>
      <ul>
        <li>221b</li>
        <li>The Game is On</li>
        <li>No flowers.</li>
        <li>My request</li>
      </ul>
    </div>
  );
}

function Footer() {
  return (
    <footer>
      <small>&copy; 2022 BugBugGoaway</small>
    </footer>
  );
}

function Page() {
  return (
    <div>
      <Header />
      <MainContent />
      <Footer />
    </div>
  );
}

ReactDOM.render(<Page />, document.getElementById("root"));
