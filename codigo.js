function dados(){
  nome = inputNome.value
  data = inputData.value
  idade = inputIdade.value
  condicao = inputCondicao.value
  peso = inputPeso.value
  altura = inputAltura.value
  imc = peso/(altura*altura)
  
//calculo IMC
if(imc < 17)
  categoria = 'muito abaixo do peso'
if(imc > 17 && imc < 18.49)
  categoria = 'abaixo do peso'
if(imc > 18.50 && imc < 24.99)
  categoria = 'peso normal'
if(imc > 25 && imc < 29.99)
  categoria = 'acima do peso'
if(imc > 30 && imc < 34.99)
  categoria = 'obesidade I'
if(imc > 35 && imc < 39.99)
  categoria = 'obesidade II'  
    
  resultado.innerHTML =
    `<li><h3> Nome: ${nome} </h3></li>
     <li> Data de Nascimento: ${data} </li>
     <li> Idade: ${idade} anos </li>
     <li> Tem condição pré-existente? ${condicao} </li>
     <li> Peso: ${peso} </li>
     <li> Altura: ${altura} </li>
     <li> IMC:${imc.toFixed(2)}, ${categoria}</li>`
}
