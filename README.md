En el código de JS en la línea 586 hay un error. La línea dice ganador.textContent = `El ganador es ${local.value}`; cuando debería decir  ganador.textContent = `El ganador es ${visitante.value}`;
El error hace que la final la gane siempre el local.

PD: perdón por tanto choclazo de código pero no me daba el tiempo.
