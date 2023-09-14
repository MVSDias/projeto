function toggleMode(){
//  alert("OI")
  const html = document.documentElement//representação do documento em formato objeto html - (documentElement = HTML)
  html.classList.toggle("light")

  //outra forma de fazer
  // if(html.classList.contains('light')){// se html na lista de classes contem o 'light'?
  //   html.classList.remove('light')//se contem remove o 'light'

  // }else{//se não adiciona o 'light'
  //   html.classList.add('light')
  // }

  //pegando a tag img:

  const img = document.querySelector('#profile img')

  //substituir a imagem:
  if(html.classList.contains('light')){
    //se tiver light mode add imagem e descrição light
    img.setAttribute('src', './assets/light-mode-avatar.png')
    img.setAttribute("alt", "Foto de perfil do Marcus de óculos escuros e boné branco no quiosque na beira da praia do Recreio-Reserva")
  }else{
    // tiver dark mode add img dar e descrição dark
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
