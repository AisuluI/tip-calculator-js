const bill = document.querySelector('#bill');
const service = document.querySelector('#service');
const people = document.querySelector('#people');
const result = document.querySelector('#result');
const each = document.querySelector('#each');
const button = document.querySelector('#calculate');
const total = document.querySelector('#total');

button.addEventListener('click', calculate)

function calculate(){
    let index = service.selectedIndex;
    let totalTip = Number(bill.value)
* Number(service.options[index].value)/100
 result.style.visibility = 'visible';
 total.style.visibility = 'visible';


if(people.value>1){
    result.innerHTML = ((Number(bill.value)+totalTip)/Number(people.value)).toFixed(2)
    each.style.visibility = 'visible'
} else {
    result.innerHTML = (Number(bill.value)+ totalTip).toFixed(2)
   
}


}