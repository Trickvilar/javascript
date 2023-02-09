function tabuada(){
    var num = document.querySelector('#txtn')
    var tab = document.querySelector('#seltab')
    if(num.value.length == 0){
        alert('ERRO! Digite um número.')
    }else{
        n = Number(num.value)
        c = 1
        tab.innerHTML = ''
        while(c <=10){
            var item = document.createElement('option')
            item.text = `${n} x ${c} = ${n*c}`
            tab.appendChild(item)
            c++
        }
    }
}