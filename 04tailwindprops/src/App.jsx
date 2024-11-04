import "./App.css";
import Card from "./components/Card";

const arr = ["anonymous", "lulz sec"];

function App() {
  return (
    <>
      <h1 className="text-3xl bg-green-500 p-3 rounded-md">
        Vite With Tailwind
      </h1>
      {/* Static Values (like strings): Use quotes. 
      Dynamic Values (like arrays and objects): Use curly braces. (seen as javascript expression) */}
      <Card username="sudhanshu" array={arr} />
      <Card username="lulz sec" post="hacker" />
    </>
  );
}

export default App;
