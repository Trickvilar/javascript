var idade = 66
console.log(`Você tem ${idade} anos.`)
if(idade >= 18 && idade <= 65){
    console.log ('Voto Obrigatório')
}else if(idade >= 16 || idade > 65){
    console.log('Voto Opcional')
}else{
    console.log('Não Vota')
}