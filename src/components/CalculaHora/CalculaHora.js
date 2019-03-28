import React, { Component } from "react";

class CalculaHora extends React.Components {
  return() {

    var patt = /([0-9]{1,2}:[0-9]{2})/;

    if (patt.test(elemento.value)) {
      var strsplit = elemento.value.split(":");
      0;
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
}

export default CalculaHora();

