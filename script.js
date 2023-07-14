
let fruits = ["🍎", "🍊", "🍎", "🍊", "🍎"]
let appleEl = document.getElementById("apple-el")
let orangeEl = document.getElementById("orange-el")
let arrEl = document.getElementById("arr")
arrEl.textContent = fruits

// function sort(){
//     appleEl.textContent = ""
//     orangeEl.textContent = ""
//     for (let i=0; i<fruits.length; i++){
//         if (fruits[i] == "🍎"){
//             appleEl.textContent += fruits[i] 
//         }
//         else{
//             orangeEl.textContent += fruits[i]
//         }
//     }
// }


function start(){
    if (fruits.length != 0) {
        sort()
    }else{
        arrEl.textContent = "Its Empty"
    }
}

function sort(){
    if (fruits[fruits.length - 1] == "🍎"){
        appleEl.textContent += "🍎"
        fruits.pop()
        if (fruits.length == 0) {
            arrEl.textContent = "Its Empty"
        }else{
            arrEl.textContent = fruits
        }
        
    }else{
        orangeEl.textContent += "🍊"
        fruits.pop()
        if (fruits.length == 0) {
            arrEl.textContent = "Its Empty"
        }else{
            arrEl.textContent = fruits
        }
        
    }
}