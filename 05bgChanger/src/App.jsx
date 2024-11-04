import { useState } from "react";
import "./App.css";

function App() {
  const [color, setColor] = useState("olive");

  return (
    <div
      className="w-full h-screen duration-200"
      style={{ backgroundColor: color }}
    >
      <div class="fixed inset-x-0 bottom-8 flex justify-around p-4 bg-slate-300 text-xl">
        <button
          onClick={() => setColor("red")}
          class="bg-red-700 py-2 px-4 rounded-lg"
        >
          Red
        </button>
        <button
          onClick={() => setColor("Orange")}
          class="bg-orange-500 py-2 px-4 rounded-lg"
        >
          Orange
        </button>
        <button
          onClick={() => setColor("Yellow")}
          class="bg-yellow-400 py-2 px-4 rounded-lg"
        >
          Yellow
        </button>
        <button
          onClick={() => setColor("Blue")}
          class="bg-blue-700 py-2 px-4 rounded-lg"
        >
          Blue
        </button>
      </div>
    </div>
  );
}

export default App;
