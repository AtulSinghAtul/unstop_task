import "./App.css";
import AssesmentsOverview from "./components/AssesmentsOverview";
import Dashboard from "./components/Dashboard";

function App() {
  return (
    <div className="App">
      <div className=" flex flex-row  justify-between items-start w-[100%]  h-[1532px]   bg-slate-200 ">
        <Dashboard />
        <AssesmentsOverview />
      </div>
    </div>
  );
}
//

export default App;
