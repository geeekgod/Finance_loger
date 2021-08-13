import { Invoice } from './classes/invoice.js';
const form = document.querySelector(".new-item-form");
form.addEventListener("submit", (e) => {
    e.preventDefault();
    console.log(type.value, toFrom.value, details.value, amount.valueAsNumber);
    const inv1 = new Invoice(toFrom.value, details.value, amount.valueAsNumber);
    console.log(inv1);
});
// inputs
const type = document.querySelector("#type");
const toFrom = document.querySelector("#tofrom");
const details = document.querySelector("#details");
const amount = document.querySelector("#amount");
let firstPerson = {
    name: "Rishabh",
    age: 18,
    speak(text) {
        return (text);
    },
    spend(amount) {
        console.log(amount);
        return (amount / 3000) * 100;
    }
};
const speakAboutPerson = (person) => {
    console.log(person.name + " has an age of " + person.age + " says " + person.speak("My name is Rishabh") + " and spends " + person.spend(20));
};
speakAboutPerson(firstPerson);
