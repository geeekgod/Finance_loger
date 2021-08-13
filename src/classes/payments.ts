import {HasFormatter} from '../interface/HasFormatter.js'

export class Payment implements HasFormatter {
    constructor(
      readonly recipient: string,
      readonly details: string,
      readonly amount: number
    ) {}
  
    format() {
      return `$(this.recipient) is owed $(this.amount) for $(this.details)`;
    }
  }
  