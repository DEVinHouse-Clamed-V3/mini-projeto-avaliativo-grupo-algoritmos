function carregarDados() {
  const medicamentoMemoria = JSON.parse(localStorage.getItem('medicamento'))
  const lista = document.getElementById('lista-medicamentos')

  const div = document.createElement('div')
  div.classList.add('item-medicamento')

  const img = document.createElement('img')
  img.setAttribute("width", "150px")
  img.setAttribute("src", "https://www.drogariaminasbrasil.com.br/media/product/013/tylenol-750mg-com-20-comprimidos-e10.jpg")
  div.appendChild(img)

  const h2 = document.createElement('h2')
  h2.innerText = 'Tilenol'
  div.appendChild(h2)

  div.appendChild(lista)


}




document.addEventListener('DOMContentLoaded', carregarDados) 