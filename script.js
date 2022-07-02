//Esto crea las tablas
let groups = [
  ['A', ['Qatar', 'Ecuador', 'Senegal', 'Países Bajos']],
  ['B', ['Inglaterra', 'Irán', 'EEUU', 'Gales']],
  ['C', ['Argentina', 'A. Saudita', 'México', 'Polonia']],
  ['D', ['Francia', 'Australia', 'Dinamarca', 'Túnez']],
  ['E', ['España', 'Costa Rica', 'Alemania', 'Japón']],
  ['F', ['Bélgica', 'Canadá', 'Marruecos', 'Croacia']],
  ['G', ['Brasil', 'Serbia', 'Suiza', 'Camerún']],
  ['H', ['Portugal', 'Ghana', 'Uruguay', 'Corea del Sur']]
];
let cols = ['Equipos', 'PJ', 'PG', 'PE', 'PP', 'GF', 'GC', 'DG', 'Pts'];

for (let g of groups) {
  let div = document.createElement('div');
  if (g[0] == 'A') { div.id = 'GrupoA'; };
  if (g[0] == 'B') { div.id = 'GrupoB'; };
  if (g[0] == 'C') { div.id = 'GrupoC'; };
  if (g[0] == 'D') { div.id = 'GrupoD'; };
  if (g[0] == 'E') { div.id = 'GrupoE'; };
  if (g[0] == 'F') { div.id = 'GrupoF'; };
  if (g[0] == 'G') { div.id = 'GrupoG'; };
  if (g[0] == 'H') { div.id = 'GrupoH'; };
  let title = document.createElement('h3');
  title.id = 'title';
  let table = document.createElement('table');
  table.id = 'table';
  title.textContent = g[0];
  div.classList.add('group');
  let header = document.createElement('tr')
  for (let c of cols) {
    let data = document.createElement('th');
    data.textContent = c;
    header.append(data);
  }
  table.append(header);
  for (let team of g[1]) {
    let tr = document.createElement('tr');
    let td = document.createElement('td');
    td.textContent = team;
    tr.append(td);
    for (let i = 0; i < 8; i++) {
      let zero = document.createElement('td');
      zero.textContent = '0';
      tr.append(zero);
    }
    table.append(tr);
  }
  div.append(title);
  div.append(table);
  //Estos if colocan las tablas intercaladas con las fechas
  if (g[0] == 'A') { document.querySelector('.tables').prepend(div); };
  if (g[0] == 'B') { document.querySelector('.tables').children[2].before(div); };
  if (g[0] == 'C') { document.querySelector('.tables').children[4].before(div); };
  if (g[0] == 'D') { document.querySelector('.tables').children[6].before(div); };
  if (g[0] == 'E') { document.querySelector('.tables').children[8].before(div); };
  if (g[0] == 'F') { document.querySelector('.tables').children[10].before(div); };
  if (g[0] == 'G') { document.querySelector('.tables').children[12].before(div); };
  if (g[0] == 'H') { document.querySelector('.tables').children[14].before(div); };
}
//Esto oculta y muestra las tablas y fechas
let TA = document.getElementById('GrupoA');
TA.style.display = 'none';
let FA = document.getElementById('g-A');
FA.style.display = 'none';
let TB = document.getElementById('GrupoB');
TB.style.display = 'none';
let FB = document.getElementById('g-B');
FB.style.display = 'none';
let TC = document.getElementById('GrupoC');
TC.style.display = 'none';
let FC = document.getElementById('g-C');
FC.style.display = 'none';
let TD = document.getElementById('GrupoD');
TD.style.display = 'none';
let FD = document.getElementById('g-D');
FD.style.display = 'none';
let TE = document.getElementById('GrupoE');
TE.style.display = 'none';
let FE = document.getElementById('g-E');
FE.style.display = 'none';
let TF = document.getElementById('GrupoF');
TF.style.display = 'none';
let FF = document.getElementById('g-F');
FF.style.display = 'none';
let TG = document.getElementById('GrupoG');
TG.style.display = 'none';
let FG = document.getElementById('g-G');
FG.style.display = 'none';
let TH = document.getElementById('GrupoH');
TH.style.display = 'none';
let FH = document.getElementById('g-H');
FH.style.display = 'none';
function GA(e) {
  if (e.target.checked) {
    TA.style.display = 'inline';
    FA.style.display = 'inline';
  } else {
    TA.style.display = 'none';
    FA.style.display = 'none';
  }
}
function GB(e) {
  if (e.target.checked) {
    TB.style.display = 'inline';
    FB.style.display = 'inline';
  } else {
    TB.style.display = 'none';
    FB.style.display = 'none';
  }
}
function GC(e) {
  if (e.target.checked) {
    TC.style.display = 'inline';
    FC.style.display = 'inline';
  } else {
    TC.style.display = 'none';
    FC.style.display = 'none';
  }
}
function GD(e) {
  if (e.target.checked) {
    TD.style.display = 'inline';
    FD.style.display = 'inline';
  } else {
    TD.style.display = 'none';
    FD.style.display = 'none';
  }
}
function GE(e) {
  if (e.target.checked) {
    TE.style.display = 'inline';
    FE.style.display = 'inline';
  } else {
    TE.style.display = 'none';
    FE.style.display = 'none';
  }
}
function GF(e) {
  if (e.target.checked) {
    TF.style.display = 'inline';
    FF.style.display = 'inline';
  } else {
    TF.style.display = 'none';
    FF.style.display = 'none';
  }
}
function GG(e) {
  if (e.target.checked) {
    TG.style.display = 'inline';
    FG.style.display = 'inline';
  } else {
    TG.style.display = 'none';
    FG.style.display = 'none';
  }
}
function GH(e) {
  if (e.target.checked) {
    TH.style.display = 'inline';
    FH.style.display = 'inline';
  } else {
    TH.style.display = 'none';
    FH.style.display = 'none';
  }
}

//Esto llena la tabla (cant. goles, PJ, etc)
function handleSubmit(event) {
  event.preventDefault();
  let local = event.target.children[0].textContent;
  let visitante = event.target.children[3].textContent;
  let golesLocal = event.target.children[1].value;
  let golesVisitante = event.target.children[2].value;
  let ganoLocal = false;
  let ganoVisitante = false;
  let empate = false;
  if (golesLocal > golesVisitante) ganoLocal = true;
  else if (golesLocal < golesVisitante) ganoVisitante = true
  else if (golesLocal == golesVisitante) empate = true;
  let tds = document.querySelectorAll('td');
  for (let td of tds) {
    if (td.textContent == local || td.textContent == visitante) {
      //Ambos tienen PE + 1
      if (empate) {
        td.nextElementSibling.nextElementSibling.nextElementSibling.textContent = parseInt(td.nextElementSibling.nextElementSibling.textContent) + 1;
        td.parentElement.children[8].textContent = parseInt(td.parentElement.children[8].textContent) + 1;
      }
      //Y ambos tienen PJ + 1
      td.nextElementSibling.textContent = parseInt(td.nextElementSibling.textContent) + 1;
    }
    if (td.textContent == local) {
      //Local tiene PG + 1 y Pts + 3
      if (ganoLocal) {
        td.parentElement.children[2].textContent = parseInt(td.parentElement.children[2].textContent) + 1;
        td.parentElement.children[8].textContent = parseInt(td.parentElement.children[8].textContent) + 3;
      } else if (ganoVisitante) {
      //Local tiene PP + 1
        td.parentElement.children[4].textContent = parseInt(td.parentElement.children[4].textContent) + 1;
      }
      //GF del local
      td.parentElement.children[5].textContent = parseInt(td.parentElement.children[5].textContent) + parseInt(golesLocal);
      //GC del local
      td.parentElement.children[6].textContent = parseInt(td.parentElement.children[6].textContent) + parseInt(golesVisitante);
    }
    //Lo mismo para el visitante
    if (td.textContent == visitante) {
      if (ganoLocal) {
        td.parentElement.children[4].textContent = parseInt(td.parentElement.children[4].textContent) + 1;
      } else if (ganoVisitante) {
        td.parentElement.children[2].textContent = parseInt(td.parentElement.children[2].textContent) + 1;
        td.parentElement.children[8].textContent = parseInt(td.parentElement.children[8].textContent) + 3;
      }
      td.parentElement.children[5].textContent = parseInt(td.parentElement.children[5].textContent) + parseInt(golesVisitante);
      td.parentElement.children[6].textContent = parseInt(td.parentElement.children[6].textContent) + parseInt(golesLocal);
    }
    //DG de cada uno
    td.parentElement.children[7].textContent = parseInt(td.parentElement.children[5].textContent) - parseInt(td.parentElement.children[6].textContent);
  }

  //Esto inhabilita los submit
  let tilde = event.target.children[4];
  let af11 = document.getElementById('af11');
  let af12 = document.getElementById('af12');
  let af21 = document.getElementById('af21');
  let af22 = document.getElementById('af22');
  let af31 = document.getElementById('af31');
  let af32 = document.getElementById('af32');
  let bf11 = document.getElementById('bf11');
  let bf12 = document.getElementById('bf12');
  let bf21 = document.getElementById('bf21');
  let bf22 = document.getElementById('bf22');
  let bf31 = document.getElementById('bf31');
  let bf32 = document.getElementById('bf32');
  let cf11 = document.getElementById('cf11');
  let cf12 = document.getElementById('cf12');
  let cf21 = document.getElementById('cf21');
  let cf22 = document.getElementById('cf22');
  let cf31 = document.getElementById('cf31');
  let cf32 = document.getElementById('cf32');
  let df11 = document.getElementById('df11');
  let df12 = document.getElementById('df12');
  let df21 = document.getElementById('df21');
  let df22 = document.getElementById('df22');
  let df31 = document.getElementById('df31');
  let df32 = document.getElementById('df32');
  let ef11 = document.getElementById('ef11');
  let ef12 = document.getElementById('ef12');
  let ef21 = document.getElementById('ef21');
  let ef22 = document.getElementById('ef22');
  let ef31 = document.getElementById('ef31');
  let ef32 = document.getElementById('ef32');
  let ff11 = document.getElementById('ff11');
  let ff12 = document.getElementById('ff12');
  let ff21 = document.getElementById('ff21');
  let ff22 = document.getElementById('ff22');
  let ff31 = document.getElementById('ff31');
  let ff32 = document.getElementById('ff32');
  let gf11 = document.getElementById('gf11');
  let gf12 = document.getElementById('gf12');
  let gf21 = document.getElementById('gf21');
  let gf22 = document.getElementById('gf22');
  let gf31 = document.getElementById('gf31');
  let gf32 = document.getElementById('gf32');
  let hf11 = document.getElementById('hf11');
  let hf12 = document.getElementById('hf12');
  let hf21 = document.getElementById('hf21');
  let hf22 = document.getElementById('hf22');
  let hf31 = document.getElementById('hf31');
  let hf32 = document.getElementById('hf32');
  if (tilde == af11) {af11.disabled = true;} else
  if (tilde == af12) {af12.disabled = true;} else
  if (tilde == af21) {af21.disabled = true;} else
  if (tilde == af22) {af22.disabled = true;} else
  if (tilde == af31) {af31.disabled = true;} else
  if (tilde == af32) {af32.disabled = true;} else
  if (tilde == bf11) {bf11.disabled = true;} else
  if (tilde == bf12) {bf12.disabled = true;} else
  if (tilde == bf21) {bf21.disabled = true;} else
  if (tilde == bf22) {bf22.disabled = true;} else
  if (tilde == bf31) {bf31.disabled = true;} else
  if (tilde == bf32) {bf32.disabled = true;} else
  if (tilde == cf11) {cf11.disabled = true;} else
  if (tilde == cf12) {cf12.disabled = true;} else
  if (tilde == cf21) {cf21.disabled = true;} else
  if (tilde == cf22) {cf22.disabled = true;} else
  if (tilde == cf31) {cf31.disabled = true;} else
  if (tilde == cf32) {cf32.disabled = true;} else
  if (tilde == df11) {df11.disabled = true;} else
  if (tilde == df12) {df12.disabled = true;} else
  if (tilde == df21) {df21.disabled = true;} else
  if (tilde == df22) {df22.disabled = true;} else
  if (tilde == df31) {df31.disabled = true;} else
  if (tilde == df32) {df32.disabled = true;} else
  if (tilde == ef11) {ef11.disabled = true;} else
  if (tilde == ef12) {ef12.disabled = true;} else
  if (tilde == ef21) {ef21.disabled = true;} else
  if (tilde == ef22) {ef22.disabled = true;} else
  if (tilde == ef31) {ef31.disabled = true;} else
  if (tilde == ef32) {ef32.disabled = true;} else
  if (tilde == ff11) {ff11.disabled = true;} else
  if (tilde == ff12) {ff12.disabled = true;} else
  if (tilde == ff21) {ff21.disabled = true;} else
  if (tilde == ff22) {ff22.disabled = true;} else
  if (tilde == ff31) {ff31.disabled = true;} else
  if (tilde == ff32) {ff32.disabled = true;} else
  if (tilde == gf11) {gf11.disabled = true;} else
  if (tilde == gf12) {gf12.disabled = true;} else
  if (tilde == gf21) {gf21.disabled = true;} else
  if (tilde == gf22) {gf22.disabled = true;} else
  if (tilde == gf31) {gf31.disabled = true;} else
  if (tilde == gf32) {gf32.disabled = true;} else
  if (tilde == hf11) {hf11.disabled = true;} else
  if (tilde == hf12) {hf12.disabled = true;} else
  if (tilde == hf21) {hf21.disabled = true;} else
  if (tilde == hf22) {hf22.disabled = true;} else
  if (tilde == hf31) {hf31.disabled = true;} else
  if (tilde == hf32) {hf32.disabled = true;}
}

//A partir de ahora pasamos a las llaves

function octavos(e) {
  let A1 = document.getElementById('A1').value;
  let A2 = document.getElementById('A2').value;
  let B1 = document.getElementById('B1').value;
  let B2 = document.getElementById('B2').value;
  let C1 = document.getElementById('C1').value;
  let C2 = document.getElementById('C2').value;
  let D1 = document.getElementById('D1').value;
  let D2 = document.getElementById('D2').value;
  let E1 = document.getElementById('E1').value;
  let E2 = document.getElementById('E2').value;
  let F1 = document.getElementById('F1').value;
  let F2 = document.getElementById('F2').value;
  let G1 = document.getElementById('G1').value;
  let G2 = document.getElementById('G2').value;
  let H1 = document.getElementById('H1').value;
  let H2 = document.getElementById('H2').value;
  let octs = [A1, A2, B1, B2, C1, C2, D1, D2, E1, E2, F1, F2, G1, G2, H1, H2];
  let i = 0;
  while (i < 16) {
    //Si alguno de los input queda en "Seleccionar país"
    if (octs[i] == 'Seleccionar País') {
      alert('Ingresá algún país');
      break;
    }
    else i++;
  }
  //Que i == 16 se asegura de que ningún input haya quedado en "Seleccionar país"

  //Esto es por si se selecciona dos veces el mismo país
  if (i == 16 && (octs[0] == octs[1] || octs[2] == octs[3] || octs[4] == octs[5] || octs[6] == octs[7] || octs[8] == octs[9] || octs[10] == octs[11] || octs[12] == octs[13] || octs[14] == octs[15])) {
    alert('No podés elegir dos veces el mismo país');
  } else
    if (i == 16) {
      let local = e.target.previousElementSibling.previousElementSibling;
      local.id = e.target.previousElementSibling.previousElementSibling.id;
      let visitante = e.target.nextElementSibling.nextElementSibling;
      visitante.id = e.target.nextElementSibling.nextElementSibling.id;
      console.log(local);
      let golesLocal = e.target.previousElementSibling.value;
      let golesVisitante = e.target.nextElementSibling.value;
      console.log(golesLocal);
      if (golesLocal == null) { console.log(golesLocal); }
      let ganoLocal = false;
      let ganoVisitante = false;
      let empate = false;
      if (golesLocal > golesVisitante) ganoLocal = true;
      else if (golesLocal < golesVisitante) ganoVisitante = true
      else if (golesLocal == golesVisitante) empate = true;
      let Cuar1 = document.getElementById('Cuar1');
      let Cuar2 = document.getElementById('Cuar2');
      let Cuar3 = document.getElementById('Cuar3');
      let Cuar4 = document.getElementById('Cuar4');
      let Cuar5 = document.getElementById('Cuar5');
      let Cuar6 = document.getElementById('Cuar6');
      let Cuar7 = document.getElementById('Cuar7');
      let Cuar8 = document.getElementById('Cuar8');

      //Esto asigna el valor del ganador de los octavos al input vacío de los cuartos
      if (ganoLocal) {
        console.log(local.id);
        if (local.id == document.getElementById('A1').id) {
          Cuar1.value = local.value;
          console.log(Cuar1.value);
        }
        if (local.id == document.getElementById('B1').id) {
          Cuar5.value = local.value;
          console.log(Cuar5.value);
        }
        if (local.id == document.getElementById('C1').id) {
          Cuar2.value = local.value;
          console.log(Cuar2.value);
        }
        if (local.id == document.getElementById('D1').id) {
          Cuar6.value = local.value;
          console.log(Cuar6.value);
        }
        if (local.id == document.getElementById('E1').id) {
          Cuar3.value = local.value;
          console.log(Cuar3.value);
        }
        if (local.id == document.getElementById('F1').id) {
          Cuar7.value = local.value;
          console.log(Cuar7.value);
        }
        if (local.id == document.getElementById('G1').id) {
          Cuar4.value = local.value;
          console.log(Cuar4.value);
        }
        if (local.id == document.getElementById('H1').id) {
          Cuar8.value = local.value;
          console.log(Cuar8.value);
        }
      } else if (empate) {
        alert('Hacemela fácil y poné que gana alguno');
      } else if (ganoVisitante) {
        if (visitante.id == document.getElementById('A2').id) {
          Cuar5.value = visitante.value;
          console.log(Cuar5.value);
        }
        if (visitante.id == document.getElementById('B2').id) {
          Cuar1.value = visitante.value;
          console.log(Cuar1.value);
        }
        if (visitante.id == document.getElementById('C2').id) {
          Cuar6.value = visitante.value;
          console.log(Cuar6.value);
        }
        if (visitante.id == document.getElementById('D2').id) {
          Cuar2.value = visitante.value;
          console.log(Cuar2.value);
        }
        if (visitante.id == document.getElementById('E2').id) {
          Cuar7.value = visitante.value;
          console.log(Cuar7.value);
        }
        if (visitante.id == document.getElementById('F2').id) {
          Cuar3.value = visitante.value;
          console.log(Cuar3.value);
        }
        if (visitante.id == document.getElementById('G2').id) {
          Cuar8.value = visitante.value;
          console.log(Cuar8.value);
        }
        if (visitante.id == document.getElementById('H2').id) {
          Cuar4.value = visitante.value;
          console.log(Cuar4.value);
        }
      }
    }
}
function cuartos(e) {
  //Este if se asegura de que todos los input de los cuartos tengan un país
  if (Cuar1.value != "" && Cuar2.value != "" && Cuar3.value != "" && Cuar4.value != "" && Cuar5.value != "" && Cuar6.value != "" && Cuar7.value != "" && Cuar8.value != "") {
    let local = e.target.previousElementSibling.previousElementSibling;
    local.id = e.target.previousElementSibling.previousElementSibling.id;
    let visitante = e.target.nextElementSibling.nextElementSibling;
    visitante.id = e.target.nextElementSibling.nextElementSibling.id;
    console.log(local);
    console.log(visitante);
    let golesLocal = e.target.previousElementSibling.value;
    let golesVisitante = e.target.nextElementSibling.value;
    let ganoLocal = false;
    let ganoVisitante = false;
    let empate = false;
    if (golesLocal > golesVisitante) ganoLocal = true;
    else if (golesLocal < golesVisitante) ganoVisitante = true
    else if (golesLocal == golesVisitante) empate = true;
    let S1 = document.getElementById('S1');
    let S2 = document.getElementById('S2');
    let S3 = document.getElementById('S3');
    let S4 = document.getElementById('S4');
    console.log(Cuar1.value);
    console.log(Cuar1.value == "");
    //Lo mismo que el que expliqué en los octavos pero para los cuartos
    if (ganoLocal) {
      console.log(local.id);
      if (local.id == document.getElementById('Cuar1').id) {
        S1.value = local.value;
        console.log(S1.value);
      } if (local.id == document.getElementById('Cuar3').id) {
        S2.value = local.value;
        console.log(S2.value);
      } if (local.id == document.getElementById('Cuar5').id) {
        S3.value = local.value;
        console.log(S3.value);
      } if (local.id == document.getElementById('Cuar7').id) {
        S4.value = local.value;
        console.log(S4.value);
      }
    } else if (empate) {
      alert('Hacemela fácil y poné que gana alguno');
    } else if (ganoVisitante) {
      if (visitante.id == document.getElementById('Cuar2').id) {
        S1.value = visitante.value;
        console.log(S1.value);
      } if (visitante.id == document.getElementById('Cuar4').id) {
        S2.value = visitante.value;
        console.log(S2.value);
      } if (visitante.id == document.getElementById('Cuar6').id) {
        S3.value = visitante.value;
        console.log(S3.value);
      } if (visitante.id == document.getElementById('Cuar8').id) {
        S4.value = visitante.value;
        console.log(S4.value);
      }
    }
  } else alert('Ningún país seleccionado');

}

function semifinales(e) {
  //Ídem explicado arriba
  if (S1.value != "" && S2.value != "" && S3.value != "" && S4.value != "") {
    let local = e.target.previousElementSibling.previousElementSibling;
    local.id = e.target.previousElementSibling.previousElementSibling.id;
    let visitante = e.target.nextElementSibling.nextElementSibling;
    visitante.id = e.target.nextElementSibling.nextElementSibling.id;
    console.log(local);
    console.log(visitante);
    let golesLocal = e.target.previousElementSibling.value;
    let golesVisitante = e.target.nextElementSibling.value;
    let ganoLocal = false;
    let ganoVisitante = false;
    let empate = false;
    if (golesLocal > golesVisitante) ganoLocal = true;
    else if (golesLocal < golesVisitante) ganoVisitante = true
    else if (golesLocal == golesVisitante) empate = true;
    let FI1 = document.getElementById('FI1');
    let FI2 = document.getElementById('FI2');
    //Ídem explicado arriba
    if (ganoLocal) {
      console.log(local.id);
      if (local.id == document.getElementById('S1').id) {
        FI1.value = local.value;
        console.log(FI1.value);
      } if (local.id == document.getElementById('S3').id) {
        FI2.value = local.value;
        console.log(FI2.value);
      }
    } else if (empate) {
      alert('Hacemela fácil y poné que gana alguno');
    } else if (ganoVisitante) {
      if (visitante.id == document.getElementById('S2').id) {
        FI1.value = visitante.value;
        console.log(FI1.value);
      } if (visitante.id == document.getElementById('S4').id) {
        FI2.value = visitante.value;
        console.log(FI2.value);
      }
    }
  } else alert('Ningún país seleccionado');

}

function final(e) {
  //Ídem explicado arriba
  if (FI1.value != "" && FI2.value != "") {
    let local = e.target.previousElementSibling.previousElementSibling;
    local.id = e.target.previousElementSibling.previousElementSibling.id;
    let visitante = e.target.nextElementSibling.nextElementSibling;
    visitante.id = e.target.nextElementSibling.nextElementSibling.id;
    console.log(local);
    console.log(visitante);
    let golesLocal = e.target.previousElementSibling.value;
    let golesVisitante = e.target.nextElementSibling.value;
    let ganoLocal = false;
    let ganoVisitante = false;
    let empate = false;
    if (golesLocal > golesVisitante) ganoLocal = true;
    else if (golesLocal < golesVisitante) ganoVisitante = true
    else if (golesLocal == golesVisitante) empate = true;
    let ganador = document.createElement('h1');
    ganador.id = 'gana';
    let tick = document.getElementById('botonfin');
    //Ídem explicado arriba
    if (ganoLocal) {
      console.log(local.id);
      ganador.textContent = `El ganador es ${local.value}`;
      document.body.append(ganador);
      tick.disabled = true;
    } else if (empate) {
      alert('Hacemela fácil y poné que gana alguno');
    } else if (ganoVisitante) {
      ganador.textContent = `El ganador es ${local.value}`;
      document.body.append(ganador);
      tick.disabled = true;
    }
    let restart = document.createElement('button');
    restart.type = 'button';
    restart.onclick = function() {
      location.reload();
    }
    restart.id = 'restart';
    restart.textContent = 'Reinicia';
    let div1 = document.getElementsByClassName('restart');
    document.body.append(restart);
  } else alert('Ningún país seleccionado');

}