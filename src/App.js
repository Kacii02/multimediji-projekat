import "./styles/App.css"
import Collections from "./Collections";
import Cover from "./Cover";
import Images from "./Images";

function App() {
  return <div className="App">
    <Cover/>
    <Images />
    <Collections/>
  </div>;
}

export default App;
