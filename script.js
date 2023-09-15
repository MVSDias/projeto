function toggleMode(){

  const html = document.documentElement
  html.classList.toggle("light")

  
  //pegando a tag img:

  const img = document.querySelector('#profile img')

  //substituir a imagem:
  if(html.classList.contains('light')){
    
    img.setAttribute('src', './assets/light-mode-avatar.png')
    img.setAttribute("alt", "Foto de perfil do Marcus de óculos escuros e boné branco no quiosque na beira da praia do Recreio-Reserva")
  }else{
    
    img.setAttribute('src', './assets/dark-mode-avatar.png')
    img.setAttribute("alt", "Foto de perfil do Marcus com camisa social ao volante do carro")
  }

  
}
/*Contador de Likes*/
const likeCount = document.getElementById('contagem')
let counter = 0
function contador(){
  
  counter++
  likeCount.textContent = counter.toString()
  
}
