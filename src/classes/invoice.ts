export class Invoice {
    constructor(
      readonly client: string,
      readonly details: string,
      readonly amount: number
    ) {}
  
    format() {
      return `$(this.client) owes $(this.amount) for $(this.details)`;
    }
  }
  