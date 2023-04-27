import "./App.css";
import ProfileMain from "./Profile/ProfileMain";
import Siderbar from "./Sidebar/Siderbar";

function App() {
  return (
    <div className="App">
      <Siderbar></Siderbar>
      <ProfileMain></ProfileMain>
    </div>
  );
}

export default App;
