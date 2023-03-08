import { useState } from "react";
import { Keyboard } from "./components/Keyboard";
import { Theme } from "./components/Theme";
import { Window } from "./components/Window";
import "./styles/index.scss";
function App() {
  const symbols = [
    {
      id: 1,
      value: "AC",
      type: "AC",
      class: "btn btn_top",
    },
    {
      id: 2,
      value: "±",
      type: "plus/minus",
      class: "btn btn_top",
    },
    {
      id: 3,
      value: "%",
      type: "percent",
      class: "btn btn_top",
    },
    {
      id: 4,
      value: "÷",
      type: "sign",
      class: "btn btn_rigth",
    },
    {
      id: 5,
      value: "7",
      type: "number",
      class: "btn",
    },
    {
      id: 6,
      value: "8",
      type: "number",
      class: "btn",
    },
    {
      id: 7,
      value: "9",
      type: "number",
      class: "btn",
    },
    {
      id: 8,
      value: "×",
      type: "sign",
      class: "btn btn_rigth",
    },
    {
      id: 9,
      value: "4",
      type: "number",
      class: "btn",
    },
    {
      id: 10,
      value: "5",
      type: "number",
      class: "btn",
    },
    {
      id: 11,
      value: "6",
      type: "number",
      class: "btn",
    },
    {
      id: 12,
      value: "−",
      type: "sign",
      class: "btn btn_rigth",
    },
    {
      id: 13,
      value: "1",
      type: "number",
      class: "btn",
    },
    {
      id: 14,
      value: "2",
      type: "number",
      class: "btn",
    },
    {
      id: 15,
      value: "3",
      type: "number",
      class: "btn",
    },
    {
      id: 16,
      value: "+",
      type: "sign",
      class: "btn btn_rigth",
    },
    {
      id: 17,
      value: "0",
      type: "number",
      class: "btn btn_zero",
    },
    {
      id: 18,
      value: ".",
      type: "number",
      class: "btn",
    },
    {
      id: 19,
      value: "=",
      type: "equal",
      class: "btn btn_rigth",
    },
  ];
  const [window, setWindow] = useState("0");
  const [numOne, setNumOne] = useState("0");
  const [numTwo, setNumTwo] = useState("0");
  const [sign, setSign] = useState("")
  const [result, setResult] = useState("")
  const [theme, setTheme] = useState(true)

  return (
    <div className={theme ? "calc" : "calc calc_light"}>
      <Theme theme={theme} setTheme={setTheme}/>
      <Window window={window}/>
      <Keyboard
        symbols={symbols}
        window={window}
        setWindow={setWindow}
        numOne={numOne}
        setNumOne={setNumOne}
        numTwo={numTwo}
        setNumTwo={setNumTwo}
        sign={sign}
        setSign={setSign}
        result={result}
        setResult={setResult}
      />
    </div>
  );
}

export default App;
