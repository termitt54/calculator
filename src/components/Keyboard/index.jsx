import React from "react";
import "./index.scss";

export const Keyboard = ({ ...props }) => {
  const click = (item) => {
    if (item.type === "AC") {
      props.setNumOne("0");
      props.setNumTwo("0");
      props.setSign("");
      props.setWindow("0");
      props.setResult("");
    }

    if (item.type === "number") {
      if (props.sign === "") {
        let num = item.value;
        props.setNumOne((props.numOne += num));
        props.setWindow(+props.numOne);
      } else {
        let num = item.value;
        props.setNumTwo((props.numTwo += num));
        props.setWindow(+props.numTwo);
      }
    }

    if (item.type === "sign") {
      let sign = item.value;
      props.setSign((props.sign = sign));
    }

    if (item.type === "equal") {
      if (props.sign === "+") {
        let result = +props.numOne + +props.numTwo;
        result = +result.toFixed(10);
        props.setResult((props.result = result));
        props.setNumOne(result.toString());
        props.setNumTwo("0");
        props.setSign("");
        props.setWindow(result);
      }
      if (props.sign === "−") {
        let result = +props.numOne - +props.numTwo;
        result = +result.toFixed(10);
        props.setResult((props.result = result));
        props.setNumOne(result.toString());
        props.setNumTwo("0");
        props.setSign("");
        props.setWindow(result);
      }
      if (props.sign === "×") {
        let result = +props.numOne * +props.numTwo;
        result = +result.toFixed(10);
        props.setResult((props.result = result));
        props.setNumOne(result.toString());
        props.setNumTwo("0");
        props.setSign("");
        props.setWindow(result);
      }
      if (props.sign === "÷") {
        let result = +props.numOne / +props.numTwo;
        result = +result.toFixed(10);
        props.setResult((props.result = result));
        if (props.numTwo === "0" || props.numTwo === "00") {
          props.setResult("");
          props.setWindow("Ошибка");
          props.setNumOne("");
          props.setNumTwo("");
          props.setSign("");
        } else {
          props.setNumOne(result.toString());
          props.setNumTwo("0");
          props.setSign("");
          props.setWindow(result);
        }
      }
    }

    if (item.type === "plus/minus") {
      if (props.sign === "" && props.numOne !== "0") {
        const num = props.numOne * -1;
        props.setNumOne(num);
        props.setWindow(num);
      } else {
        const num = props.numTwo * -1;
        props.setNumTwo(num);
        props.setWindow(num);
      }
    }

    if (item.type === "percent") {
      if (props.sign === "") {
        const num = props.numOne / 100;
        props.setNumOne(num);
        props.setWindow(num);
      } else {
        const num = props.numTwo / 100;
        props.setNumTwo(num);
        props.setWindow(num);
      }
    }
  };
  return (
    <div className="keyboard">
      {props.symbols.map((item) => {
        return (
          <button
            key={item.id}
            className={item.class}
            onClick={() => click(item)}
          >
            {item.value}
          </button>
        );
      })}
    </div>
  );
};
