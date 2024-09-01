
function deletar(idRecebido){
  const medicamentoMemoria = JSON.parse(localStorage.getItem('medicamento'))
  const medicamentoFiltrados =  petsAtuaisNaMemoria.filter((item) => item.id !== idRecebido  )

  localStorage.setItem('medicamento', JSON.stringify(medicamentoFiltrados))

  document.getElementById('medicamento').innerText = ''
  carregarDados()
}

function carregarDados() {
 console.log("chamei a funcao")
 const medicamentoMemoria = JSON.parse(localStorage.getItem('medicamento'))

 const lista = document.getElementById('medicamento')

 medicamentoMemoria.forEach((pemedicamentot) => {
 }
)}