var btn = document.getElementById("btnTop");

// quando rolar a página 20px do topo para baixo, o botão será exibido
window.onscroll = function(){scrollFunction()};

function scrollFunction(){
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20){
    btn.style.display = "flex";
    console.log("aqui");
  } else {
    btn.style.display = "none";
  }
}