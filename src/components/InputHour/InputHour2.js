import React from "react";
// import React, {InputHour2} from "react";

class InputHour2 extends React.Components {
  constructor(props) {
    super(props);
    this.state = {


    };
  }

  repeticao(e) {
    var inputs = document.querySelectorAll(".input");
    for (let i = 0; i < inputs.length; i++) {
      inputs[i].addEventListener("change", function() {
        for (let j = i + 1; j < inputs.length; j++) {
          inputs[j].value = calculaHora(inputs[j - 1]);

          inputs[j].value = inputs[i].value;
        }
      });
    }
  }
  //repeticao(e)

  //InputHour2()

  render() {
    return (
      <div>
        <input
          id="input-1"
          className="input"
          type="text"
          onChange={e => {
            this.repeticao(e);
          }}
        />
        <input id="input-2" className="input" type="text" />
        <input id="input-3" className="input" type="text" />
      </div>
    );
  }
}

function calculaHora(elemento) {
  var patt = /([0-9]{1,2}:[0-9]{2})/;

  if (patt.test(elemento.value)) {
    var strsplit = elemento.value.split(":");
    var hora = Number(strsplit[0]) + 2;
    var min = strsplit[1];
    var stringFinal = "";

    if (hora > 23) {
      hora = hora - 24;
    }
    if (hora < 10) {
      stringFinal += "0" + hora;
    } else {
      stringFinal += hora;
    }
    stringFinal += ":" + min;
    return stringFinal;
  }
}

export default InputHour2;
