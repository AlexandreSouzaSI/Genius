function simon(){
    let sequenciaJogo = [];
    let sequenciaJogador = [];
    let acender;
    let turno;
    let feito;
    let computarturno;
    let intervalId;
    let som = true;
    let on = false;
    let win;
    let valor;
    let comprouDisco = false;

    return {
        sequenciaJogo,
        sequenciaJogador,
        on,
        intervalId,
        som,
        win,
        acender,
        turno,
        feito,
        computarturno,
        valor,
        comprouDisco,
    }

}

var jogo = document.getElementById("jogo");


let Jogo1 = new simon();


const ligar = document.getElementById("ligar");
const start = document.getElementById("start")
const contador = document.getElementById("score");
const botaoAmarelo = document.getElementById("amarelo");
const botaoAzul = document.getElementById("azul");
const botaoVermelho = document.getElementById("vermelho");
const botaoVerde = document.getElementById("verde");
const moeda = document.getElementById("valor");
const fortuna = document.getElementById("riqueza");
const comprarD = document.getElementById("comprarD");
const compraA = document.getElementById("compraA");
const compraR = document.getElementById("compraR");
const menuConf = document.getElementById("menuConf");
const descricao = document.getElementById("descricao");
var dinheiro = 0;
var nivel = 3;


function ligarSimon(){
    on = true;
    moeda.innerHTML = "G$  0";
    contador.innerHTML = "--";
}

function desligarSimon(){
    on = false;
    contador.innerHTML = "";
    moeda.innerHTML = "";

    clearColor();
    clearInterval(intervalId);
}

start.addEventListener('click', (event) => {
    if (on || win) {
      play();
    }
  });

function play(){
    win = false;
    valor = 0;
    nivel;
    sequenciaJogo = [];
    sequenciaJogador = [];
    acender = 0;
    intervalId = 0;
    turno = 1;
    contador.innerHTML = 1;
    feito = true;
    for (var i = 0; i < 20; i++){
        sequenciaJogo.push(Math.floor(Math.random() * 4) + 1);
    }
    computarturno = true;

    intervalId = setInterval (jogarTurno, 800);

}

function jogarTurno(){
    on = false;

    if (acender == turno){
        clearInterval(intervalId);
        computarturno = false;
        clearColor();
        on = true;
    }

    if (computarturno){
        clearColor();
        setTimeout(() => {
            if (sequenciaJogo[acender] == 1) primeira();
            if (sequenciaJogo[acender] == 2) segunda();
            if (sequenciaJogo[acender] == 3) terceira();
            if (sequenciaJogo[acender] == 4) quarta();
            acender++;
        }, 200);
    }
}

function primeira() {
    if (Jogo1.som) {
      let audio = document.getElementById("audio1");
      audio.play();
    }
    som = true;
    botaoVerde.style.fill = "lightgreen";
  }
  
  function segunda() {
    if (Jogo1.som) {
      let audio = document.getElementById("audio2");
      audio.play();
    }
    som = true;
    botaoVermelho.style.fill = "tomato";
  }
  
  function terceira() {
    if (Jogo1.som) {
      let audio = document.getElementById("audio3");
      audio.play();
    }
    som = true;
    botaoAmarelo.style.fill = "yellow";
  }
  
  function quarta() {
    if (Jogo1.som) {
      let audio = document.getElementById("audio4");
      audio.play();
    }
    som = true;
    botaoAzul.style.fill = "lightskyblue";
  }

  function clearColor() {
    botaoVerde.style.fill = "#61C151";
    botaoVermelho.style.fill = "#DD6F6F";
    botaoAmarelo.style.fill = "#D5C95D";
    botaoAzul.style.fill = "#6D79E9";
  }
  
  function acenderColor() {
    botaoVerde.style.fill = "lightgreen";
    botaoVermelho.style.fill = "tomato";
    botaoAmarelo.style.fill = "yellow";
    botaoAzul.style.fill = "lightskyblue";
  }
  
  botaoVerde.addEventListener('click', (event) => {
    if (on) {
      sequenciaJogador.push(1);
      verificar();
      primeira();
      if(!win) {
        setTimeout(() => {
          clearColor();
        }, 300);
      }
    }
  })
  
  botaoVermelho.addEventListener('click', (event) => {
    if (on) {
      sequenciaJogador.push(2);
      verificar();
      segunda();
      if(!win) {
        setTimeout(() => {
          clearColor();
        }, 300);
      }
    }
  })
  
  botaoAmarelo.addEventListener('click', (event) => {
    if (on) {
      sequenciaJogador.push(3);
      verificar();
      terceira();
      if(!win) {
        setTimeout(() => {
          clearColor();
        }, 300);
      }
    }
  })
  
  botaoAzul.addEventListener('click', (event) => {
    if (on) {
      sequenciaJogador.push(4);
      verificar();
      quarta();
      if(!win) {
        setTimeout(() => {
          clearColor();
        }, 300);
      }
    }
  })

  function ganharMoeda(){
      moeda.innerHTML = `S$ ${valor = 100}`;
      fortuna.innerHTML = `${dinheiro += 100}`;
      dinheiro = dinheiro +100;
      intervalId = setInterval(() => {
          moeda.innerHTML = "";
      }, 1000);
  }
  
  function verificar() {
    if (sequenciaJogador[sequenciaJogador.length - 1] !== sequenciaJogo[sequenciaJogador.length - 1])
      feito = false;

  
    if (sequenciaJogador.length == nivel && feito) {
      venceu();
    }
  
    if (feito == false) {
      acenderColor();
        let audioerror = document.getElementById("audio5");
        audioerror.play();
      contador.innerHTML = "-_-";
      setTimeout(() => {
          contador.innerHTML = turno;
          clearColor();
          play();

      }, 800);

       som = false;
    }

    if (turno == sequenciaJogador.length && feito && !win) {
      turno++;
      ganharMoeda();
      sequenciaJogador = [];
      computarturno = true;
      acender = 0;
      contador.innerHTML = turno;
      intervalId = setInterval(jogarTurno, 700);
    }

}
  
  function venceu() {
    clearColor();
    ganharMoeda(dinheiro += 300);
    contador.innerHTML = "'WIN'";
    on = false;
    win = true;
  }
 
  function compras1(){
    if (dinheiro >= 20000){
      compraA.innerHTML = `Compra Realizada com Sucesso`;
    intervalId = setInterval(() => {
        compraA.innerHTML = "";
    }, 1000);
      
      dinheiro = dinheiro - 20000;
      fortuna.innerHTML = `${dinheiro}`;
      comprouDisco = true;

    } else {
      compraR.innerHTML = `Dinheiro Insuficiente`;

      intervalId = setInterval(() => {
        compraR.innerHTML = "";
    }, 1000);
      
      comprouDisco = false;
    }
  }

  function compras2(){
    if (dinheiro >= 1000){
      compraA.innerHTML = `Compra Realizada com Sucesso`;
    intervalId = setInterval(() => {
        compraA.innerHTML = "";
    }, 1000);
      
      dinheiro = dinheiro - 1100;
      fortuna.innerHTML = `${dinheiro}`;
      nivel++;

    } else {
      compraR.innerHTML = `Dinheiro Insuficiente`;  

      intervalId = setInterval(() => {
        compraR.innerHTML = "";
    }, 1000);
      
      comprouDisco = false;
    }
  }

  let show = false;

  function mostrarDescricao(){
    if(show == false){
      show = true;
      descricao.innerHTML = `
      <div id="descricao">
        <p>Clique no botão ON para ligar o jogo, em seguida aperte Start para iniciar</p>
        <p>Junte moedas e compre niveis na loja</p>
      </div>`;
      document.getElementById('caixa-ajuda').style = "background-color: rgba(128, 128, 128, 0.200)";
    }else{
      show = false;
      descricao.innerHTML = ``;
      document.getElementById('caixa-ajuda').style = "background-color: none";
    }
    
  }