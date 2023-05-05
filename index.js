// Code your solutions in this file
function writeCards(array, event){
    const newArray = []
    for (let i = 0; i < array.length; i++){
        newArray.push(`Thank you, ${array[i]}, for the wonderful ${event} gift!`)
    } 
    return newArray
}

function countDown(num){
    for (num; num >= 0; num--){
        console.log(num)
    }
}
