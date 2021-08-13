class Invoice {
    readonly client: string;
    readonly details: string;
    readonly amount: number;

    constructor(c: string, d: string, a: number){
        this.client = c;
        this.details = d;
        this.amount = a;
    }

    format(){
        return `$(this.client) owes $(this.amount) for $(this.details)`;
    }
}

const form = document.querySelector('.new-item-form') as HTMLFormElement;

form.addEventListener('submit',(e: Event)=>{
    e.preventDefault();

    console.log(
        type.value,
        toFrom.value,
        details.value,
        amount.valueAsNumber
    )
    const inv1 = new Invoice(toFrom.value , details.value , amount.valueAsNumber);

    console.log(inv1);
})
// inputs
const type = document.querySelector("#type") as HTMLSelectElement;

const toFrom = document.querySelector("#tofrom") as HTMLInputElement;

const details = document.querySelector("#details") as HTMLInputElement;

const amount = document.querySelector("#amount") as HTMLInputElement;
