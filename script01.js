const input = document.getElementById('prime')
const check_btn = document.querySelector('.check-btn')
const result_div = document.querySelector('.result')

let inp_val = 0
let result = ''

input.addEventListener('input',(e) =>{
    inp_val = e.target.value
    console.log(inp_val)
})

check_btn.addEventListener('click',() => {
    result = checkPrime(inp_val)
    console.log(result)
    addres()
})


function checkPrime(num){
    if(num > 1){
        if(num === 2){
            console.log("PRIME")
        }else{
            for(i=2; i<num-1; i++){
                if(num % i === 0){
                    return 'NOT PRIME'
                    break;
                }
            }
            return 'PRIME'
        }
    }
}


function addres(){
    result_div.innerHTML=`
        <h1>${result}
    `
}
