"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var b = {
    "IdBoleto": 127679,
    "DueDate": "2018-10-05T00:00:00",
    "PaymentDate": "2018-10-05T00:00:00",
    "CreditDate": "2018-10-08T00:00:00",
    "PrincipalValue": 1752.16,
    "InterestValue": 0,
    "FineValue": 0,
    "TotalValue": 1752.16,
    "PaidValue": 1752.16,
    "Status": 5,
    "MailToSend": "diego.lima@gm.com",
    "PhoneToSend": "(11) 97583-6579",
    "Comments": "<br>Após 05/10/2018 Multa de 10,00% - R$ 174,92<br>Após 04/11/2018 Juros de 1,00% - R$ 17,49 ao mês<br>",
    "OurNumber": "000000023817",
    "Identifier": null,
    "ReturnMessage": " liquidação",
    "ReturnCode": "06",
    "Barcode": "03397766800001752169786899500000002381710101",
    "DigitableLine": "03399.78686 99500.000007 23817.101019 7 76680000175216",
    "OccurrenceMotive": [
        {
            "OccurrenceCode": "06",
            "OccurrenceMessage": " liquidação",
            "Motives": []
        },
        {
            "OccurrenceCode": "02",
            "OccurrenceMessage": " entrada tít. confirmada",
            "Motives": []
        }
    ]
};
function exibeDadosBoleto(boleto) {
    console.log("ID Boleto: " + boleto.IdBoleto + "\n\n                 Codigo deBarras: " + boleto.Barcode + "\n\n                 Comentarios: " + boleto.Comments + "\n\n                 \n                 Ocorrencia 0 = " + boleto.OccurrenceMotive[0].OccurrenceMessage);
}
exibeDadosBoleto(b);
