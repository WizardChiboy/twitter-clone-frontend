import "./App.css";
import Feed from "./components/Feeds/Feed";
import Sidebar from "./components/Sidebar/Sidebar";
import Widget from "./components/Widget/Widget";

function App() {
  return (
    <>
      <div className="container">
        <Sidebar />
        <Feed />
        <Widget />
      </div>
    </>
  );
}

export default App;
