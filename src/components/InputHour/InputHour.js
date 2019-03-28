import React from "react";
import "style.css";
import { CalculaHora } from "../CalculaHora/CalculaHora";

class InputHour extends React.Component {
  return() {
    var inputs = document.querySelectorAll(".input");

    function repeticao() {
      for (let i = 0; i < input.length; i++) {
        inputs[i].addEventListener("change", function() {
          for (let j = i + 1; j < inputs.length; j++) {
            inputs[j].value = CalculaHora(inputs[j - 1]);
          }
          inputs[j].value = inputs[i].value;
        });
      }
    }

    repeticao();
  }
}

export default InputHour;
