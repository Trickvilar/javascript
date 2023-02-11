var num = [5,8,2,9]
num.push(3)
num.sort()
num.push(15)
console.log(`Nosso Vetor é o ${num}`)
/*
for(pos = 0; pos < num.length ; pos++){
    console.log(num[pos])
}*/


for(var pos in num){
    console.log(num[pos])
}