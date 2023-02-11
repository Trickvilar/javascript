function tabuada(){
    var num = document.querySelector('#num')
    var tab = document.querySelector('#tabuada')
    if(num.value.length == 0){
        alert('ERRO! Digite um número....')
    }else{
        var n = Number(num.value)
        c = 1
        tab.innerHTML = ''
        while(c <= 10){
            var item = document.createElement('option')
            item.text = `${n} x ${c} = ${n*c}`
            tab.appendChild(item)
            c++
        }
    }
}