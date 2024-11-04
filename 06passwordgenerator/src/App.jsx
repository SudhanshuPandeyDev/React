import { useState, useCallback, useEffect, useRef } from "react";
import "./App.css";

function App() {
  const [length, setLength] = useState(8);
  const [numberAllowed, setNumberAllowed] = useState(false);
  const [charAllowed, setCharAllowed] = useState(false);
  const [password, setPassword] = useState("");

  // initial value of reference is set to null.This creates a ref object with an initial value of null.
  const passwordRef = useRef(null);

  // useCallback is used to memoize the generatePassword fn. This prevents the fn from being recreated on every render of the component unless one of the dependencies (length, numberAllowed, charAllowed) changes thus enhances performance
  // we dont include password in dependencies bcz it changes everytime ...
  const generatePassword = useCallback(() => {
    let pass = "";
    let str = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";

    if (numberAllowed) str += "0123456789";
    if (charAllowed) str += "!@#$%^&*()_+-=[]{}|;:";

    // Math.random() generates number b/w 0 (inclusive) to 1 (exclusive)
    for (let i = 0; i < length; i++) {
      const char = Math.floor(Math.random() * str.length);
      pass += str.charAt(char);
    }

    setPassword(pass);
  }, [length, numberAllowed, charAllowed]);

  const copyPasswordToClipboard = () => {
    window.navigator.clipboard.writeText(password);
    passwordRef.current?.select();
  };

  // useEffect runs after the component is rendered for the first time and when its dependencies changes
  useEffect(() => {
    generatePassword();
  }, [length, numberAllowed, charAllowed]);

  return (
    <div className=" max-w-md mx-auto shadow-md rounded-lg px-4 py-3 my-8 bg-gray-500 text-orange-500">
      <h1 className="text-white text-center my-3">Password Generator</h1>

      <div className="flex shadow rounded-lg overflow-hidden mb-4">
        <input
          type="text"
          value={password}
          className="outline-none w-full py-1 px-3"
          placeholder="Password"
          readOnly
          // now i can get reference of this input field anywhere..S
          ref={passwordRef}
        />
        <button
          onClick={copyPasswordToClipboard}
          className="outline-none bg-blue-700 text-white px-3 py-1 hover:bg-blue-800"
        >
          Copy
        </button>
      </div>

      <div className="flex text-sm gap-x-2">
        <div className="flex items-center gap-x-1">
          <input
            type="range"
            min={6}
            max={100}
            value={length}
            className="cursor-pointer"
            // e.target.value is current value entered by the user in that input.
            onChange={(e) => setLength(e.target.value)}
            name=""
            id=""
          />
          <label>Length : {length}</label>
        </div>
        <div className="flex items-center gap-x-1">
          <input
            type="checkbox"
            defaultChecked={numberAllowed}
            onChange={() => {
              setNumberAllowed(!numberAllowed);
            }}
            name=""
            id=""
          />
          <label>Numbers</label>
        </div>
        <div className="flex items-center gap-x-1">
          <input
            type="checkbox"
            defaultChecked={charAllowed}
            onChange={() => {
              setCharAllowed(!charAllowed);
            }}
            name=""
            id=""
          />
          <label>Character</label>
        </div>
      </div>
    </div>
  );
}

export default App;
