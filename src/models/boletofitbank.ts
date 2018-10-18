export interface BoletoFitbank {
    IdBoleto: number;
    DueDate: string;
    PaymentDate: string;
    CreditDate: string;
    PrincipalValue: number;
    InterestValue: number;
    FineValue: number;
    TotalValue: number;
    PaidValue: number;
    Status: number;
    MailToSend: string;
    PhoneToSend: string;
    Comments: string;
    OurNumber: string;
    Identifier?: any;
    ReturnMessage: string;
    ReturnCode: string;
    Barcode: string;
    DigitableLine: string;
    OccurrenceMotive: OccurrenceMotive[];
  }
  
  export interface OccurrenceMotive {
    OccurrenceCode: string;
    OccurrenceMessage: string;
    Motives: any[];
  }