const buttonValues = [
    "AC", "+/-", "%", "/", 
    "7", "8", "9", "x",
    "4", "5", "6", "-",
    "1", "2", "3", "+",
    "0", ".", "="
];
const rightSymbols = ["/", "x", "-", "+", "="];
const topSymbols = ["AC", "+/-", "%"];


const buttonEl = document.querySelectorAll("button")
const display = document.querySelector(".calc-result")

let a = 0
let operator = null
let b = null

function clearAll(){
    a = 0
    operator = null
    b = null
}

for( let i = 0; i<buttonEl.length; i++){
    const value = buttonEl[i].innerText

    buttonEl[i].addEventListener("click", () => {
        
        
        if(rightSymbols.includes(value)){
            
            if ( "=" === value){
                if( a === null){
                    display.value = display.value
                }
                else{
                    b = display.value
                    let numA = Number(a)
                    let numB = Number(b)

                    if( "/" === operator){
                        display.value = numA / numB
                    }
                    else if( "x" === operator){
                        display.value =  numA * numB
                    }
                    
                    else if( "-" === operator){
                        display.value =  numA - numB
                    }
                    
                    else if( "+" === operator){
                        display.value =  numA + numB
                    }
                }


            }
            else{
                a = display.value
                operator = value
                display.value = ""

            }
        }
        else if(topSymbols.includes(value)){
            if( "AC" === value){
                clearAll();
                display.value = ""
            }
            else if("%" === value){
                if(display.value !== ""){
                    display.value = Number(display.value) / 100
                }
            }
            else if( display.value !== "" && display.value !== "0"){
                if(display.value[0] === "-"){
                    display.value = display.value.slice(1)
                }
                else{
                    display.value = "-" + display.value
                }

                    // or another method

                // display.value = Number(display.value) * -1
            }
    
        }
        else{
            if( "." === value){
                if( display.value != "" && !display.value.includes(value)){
                    display.value += value       
                }
            }
            else if( display.value === "0"){
                display.value = value
            }
            else{
                display.value+= value
            }
        }
    })
    

    
    
}











