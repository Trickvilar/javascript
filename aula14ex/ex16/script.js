function contar() {
    var fi = document.querySelector('#txti')
    var ff = document.querySelector('#txtf')
    var fp = document.querySelector('#txtp')
    var res = document.querySelector('#res')

    if (fi.value.length == 0 || ff.value.length == 0 || fp.value.length == 0){
        alert('ERRO Faltam Dados')
    } else {
        i = Number(fi.value)
        f = Number(ff.value)
        p = Number(fp.value)
        res.innerHTML = 'Contando<br>'
        if(p <=0){
            alert('Passo Inválido! Considerando PASSO 1')
            p = 1
        }
        if (i < f) {
            for (i; i <= f; i += p) {
                res.innerHTML += `${i} \u{1F449}`
            }
        }else{
            for(i ; i >= f ; i-=p){
                res.innerHTML+= `${i} \u{1F449}`
            }
        }
    }
}