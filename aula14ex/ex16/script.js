function contar() {
    var finicio = document.getElementById('txtinicio')
    var ffim = document.getElementById('txtfim')
    var fpasso = document.getElementById('txtpasso')
    var res = document.getElementById('res')

    if (finicio.value.length == 0 || ffim.value.length == 0 || fpasso.value.length == 0) {
        alert('ERRO - Faltam Dados!')
    }else{
        var inicio = Number(finicio.value)
        var fim = Number(ffim.value)
        var passo = Number(fpasso.value)
        res.innerHTML = '<p>Contando</p>'
        for(inicio ; inicio <= fim ; inicio+= passo){
            res.innerHTML+= `${inicio} \u{1F449}`
        }
    }
}