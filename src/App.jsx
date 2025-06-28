// App.jsx
import Menu from "./components/Menu/Menu";
import GlobalStyles from "./styles/GlobalStyles";

function App() {
  return (
    <>
      <GlobalStyles />
      <div className="container">
        <Menu />
      </div>
    </>
  );
}

export default App;
