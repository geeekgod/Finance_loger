import {Invoice} from './classes/invoice.js';
const form = document.querySelector(".new-item-form") as HTMLFormElement;

form.addEventListener("submit", (e: Event) => {
  e.preventDefault();

  console.log(type.value, toFrom.value, details.value, amount.valueAsNumber);
  const inv1 = new Invoice(toFrom.value, details.value, amount.valueAsNumber);

  console.log(inv1);
});
// inputs
const type = document.querySelector("#type") as HTMLSelectElement;

const toFrom = document.querySelector("#tofrom") as HTMLInputElement;

const details = document.querySelector("#details") as HTMLInputElement;

const amount = document.querySelector("#amount") as HTMLInputElement;



// Interface
interface isPerson {
    name: string,
    age: number,
    speak(a: string): void,
    spend(a: number): number
}

let firstPerson: isPerson = {
    name : "Rishabh",
    age : 18,
    speak(text){
        console.log(text);
    },
    spend(amount){
        console.log(amount);
        return (amount/3000)*100;
    }
}