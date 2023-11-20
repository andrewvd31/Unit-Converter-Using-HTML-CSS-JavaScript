/*
1 meter = 3.281 feet
1 liter = 0.264 gallon
1 kilogram = 2.204 pound
*/
myUnit = []
let meterEl = 3.281
let literEl = 0.264
let kiloEl = 2.204
let insideTextEl = document.getElementById("inside-text")
let convertBtn = document.getElementById("convert-btn")
let clearBtn = document.getElementById("clear-btn")
let lengthcEl = document.getElementById("second-in-box")
let litercEl = document.getElementById("second-in-box-1")
let kilocEl = document.getElementById("second-in-box-2")

clearBtn.addEventListener("click", function(){
    insideTextEl.value= ""
    lengthcEl.textContent = ""
    litercEl.textContent = ""
    kilocEl.textContent = ""
    myUnit = []
})

function lengthConversion(){
    myUnit.push(insideTextEl.value)
    let toFeet = (myUnit[0]*meterEl).toFixed(2)
    let toMeter = (myUnit[0]/meterEl).toFixed(2)
    lengthcEl.innerHTML += `<p class='second-in-box-in-p'>Length (Meter/Feet)</p>`
    lengthcEl.innerHTML += `<p class='second-in-box-in-p-2'>${myUnit[0]} meters = ${toFeet} feet | ${myUnit[0]} feet = ${toMeter} meters</p>`
}

function volumeConversion(){
    myUnit.push(insideTextEl.value)
    let toGallon = (myUnit[0]*literEl).toFixed(2)
    let toLiter = (myUnit[0]/literEl).toFixed(2)
    litercEl.innerHTML += `<p class='second-in-box-in-p'>Volume (Liters/Gallons)</p>`
    litercEl.innerHTML += `<p class='second-in-box-in-p-2'>${myUnit[0]} litres = ${toGallon} gallons | ${myUnit[0]} gallons = ${toLiter} litres</p>`
}

function massConversion(){
    myUnit.push(insideTextEl.value)
    let toPound = (myUnit[0]*literEl).toFixed(2)
    let toKiloGram = (myUnit[0]/literEl).toFixed(2)
    kilocEl.innerHTML += `<p class="second-in-box-in-p">Mass (Kilograms/Pounds)</p>`
    kilocEl.innerHTML += `<p class='second-in-box-in-p-2'>${myUnit[0]} kilos = ${toPound} pounds | ${myUnit[0]} pounds = ${toKiloGram} kilos</p>`
}

convertBtn.addEventListener("click",function(){
    if(insideTextEl.value){
        lengthConversion()
        volumeConversion()
        massConversion()
    }  
})