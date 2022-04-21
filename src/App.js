import "./App.css";
import Feed from "./components/Feeds/Feed";
import Sidebar from "./components/Sidebar/Sidebar";
import Widget from "./components/Widget/Widget";

function App() {
  return (
    <>
      <div className="container">
        <div className="sidebar">
          <Sidebar />
        </div>

        <div className="feed">
          <Feed />
        </div>

        <div className="widget">
          <Widget />
        </div>
      </div>
    </>
  );
}

export default App;
