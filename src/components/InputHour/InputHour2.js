import React from "react";


class InputHour2 extends React.Component {
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

          //inputs[j].value = inputs[i].value;
        }
      });
    }
  }


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
        <input id="input-4" className="input" type="text" />
        <input id="input-5" className="input" type="text" />
        <input id="input-6" className="input" type="text" />
        <input id="input-7" className="input" type="text" />
        <input id="input-8" className="input" type="text" />
        <input id="input-9" className="input" type="text" />
        <input id="input-10" className="input" type="text" />
        <input id="input-11" className="input" type="text" />
        <input id="input-12" className="input" type="text" />
        <input id="input-13" className="input" type="text" />
        <input id="input-14" className="input" type="text" />
        <input id="input-15" className="input" type="text" />
        <input id="input-16" className="input" type="text" />
        <input id="input-17" className="input" type="text" />
        <input id="input-18" className="input" type="text" />
        <input id="input-19" className="input" type="text" />
        <input id="input-20" className="input" type="text" />
        <input id="input-21" className="input" type="text" />
        <input id="input-22" className="input" type="text" />
        <input id="input-23" className="input" type="text" />
        <input id="input-24" className="input" type="text" />
        <input id="input-25" className="input" type="text" />
        <input id="input-26" className="input" type="text" />
        <input id="input-27" className="input" type="text" />
        <input id="input-28" className="input" type="text" />
        <input id="input-29" className="input" type="text" />
        <input id="input-30" className="input" type="text" />
        <input id="input-31" className="input" type="text" />
        <input id="input-32" className="input" type="text" />
        <input id="input-33" className="input" type="text" />
        <input id="input-34" className="input" type="text" />
        <input id="input-35" className="input" type="text" />
        <input id="input-36" className="input" type="text" />
        <input id="input-37" className="input" type="text" />
        <input id="input-38" className="input" type="text" />
        <input id="input-39" className="input" type="text" />
        <input id="input-40" className="input" type="text" />
        <input id="input-41" className="input" type="text" />
        <input id="input-42" className="input" type="text" />
        <input id="input-43" className="input" type="text" />
        <input id="input-44" className="input" type="text" />
        <input id="input-45" className="input" type="text" />
        <input id="input-46" className="input" type="text" />
        <input id="input-47" className="input" type="text" />
        <input id="input-48" className="input" type="text" />
        <input id="input-49" className="input" type="text" />
        <input id="input-50" className="input" type="text" />
        <input id="input-51" className="input" type="text" />
        <input id="input-52" className="input" type="text" />
        <input id="input-53" className="input" type="text" />
        <input id="input-54" className="input" type="text" />
        <input id="input-55" className="input" type="text" />
        <input id="input-56" className="input" type="text" />
        <input id="input-57" className="input" type="text" />
        <input id="input-58" className="input" type="text" />
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
