function Carregar(horaParam) {
  var msg = window.document.getElementById('msg');
  var img = window.document.getElementById('imagem');

  // se horaParam foi passada (número entre 0 e 23), usa ela;
  // senão usa a hora atual
  var hora;
  if (typeof horaParam === 'number' && horaParam >= 0 && horaParam <= 23) {
    hora = Math.floor(horaParam);
  } else {
    var data = new Date();
    hora = data.getHours();
  }

  msg.innerHTML = `Agora são ${hora} horas.`;

  if (hora >= 0 && hora < 12) {
    // MANHÃ
    img.src = 'fotomanha.png';
    document.body.style.background = '#4e7fafff';
  } else if (hora >= 12 && hora < 18) {
    // TARDE
    img.src = 'fototarde.png';
    document.body.style.background = '#ef4a09ff';
  } else {
    // NOITE
    img.src = 'fotonoite.png';
    document.body.style.background = '#08012eff';
  }
}

// função chamada pelo botão "Testar" — pega o valor do input e chama Carregar
function CarregarTest() {
  var input = document.getElementById('hourInput').value;
  if (input === '') {
    alert('Digite uma hora entre 0 e 23 para testar.');
    return;
  }
  var horaNum = Number(input);
  if (Number.isNaN(horaNum) || horaNum < 0 || horaNum > 23) {
    alert('Hora inválida. Digite um número entre 0 e 23.');
    return;
  }
  Carregar(horaNum);
}




