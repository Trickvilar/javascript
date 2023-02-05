function verificar(){
    var data = new Date()
    var ano = data.getFullYear()
    var fano = document.querySelector('#txtano')
    var res = document.querySelector('#res')
    if(fano.value.length == 0 || fano.value > ano){
        alert('Verifique os dados e tente novamente')
    }else{
        alert('Tudo Ok!')
    }
}