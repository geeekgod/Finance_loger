import {HasFormatter} from '../interface/HasFormatter.js'

export class Invoice implements HasFormatter {
    constructor(
      readonly client: string,
      readonly details: string,
      readonly amount: number
    ) {}
  
    format() {
      return this.client+" owes"+this.amount+" for "+this.details;
    }
  }
  