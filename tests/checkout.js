import http from 'k6/http';
import { check, group, sleep } from 'k6';

export const cashCheckout = (data) => {

    const payloadCashCheckout = {
        "ticketId": "WR-061623-0009",
        "createdDate": new Date().getTime(),
        "timezone": "Asia/Jakarta",
        "ticketInfo": {
            "customerName": "Unknown",
            "discount": 0,
            "taxes": 0,
            "gratuity": 0,
            "staffList": [
                {
                    "staffName": "nghia",
                    "staffId": "cf0b1142-f9f4-46e4-8284-6a89ba32e39f",
                    "staffDiscount": 0,
                    "services": [
                        {
                            "serviceId": "cfc1bd2b-a08a-432e-a319-842eca1a6170",
                            "serviceName": "service 2",
                            "servicePrice": 10,
                            "cashDiscountPrice": 10.5,
                            "serviceDiscount": 0,
                            "serviceQuantity": 1,
                            "serviceDiscounter": "Owner Only",
                            "serviceSupplyFee": 0
                        }
                    ]
                }
            ],
            "discountType": "DiscountByPercent",
            "cashDiscountAndTransactionFee": {
                "cashDiscount": 5,
                "chosen": "cashDiscount",
                "transactionFee": {
                    "customName": "Transaction Fee",
                    "transactionFeeType": "Percentage",
                    "amount": 0,
                    "percentage": 0
                }
            }
        },
        "payments": [
            {
                "total": 10,
                "paymentMethod": "cash",
                "transactionStatus": "SUCCESSFUL",
                "transactionNo": 99506,
                "gratuity": 0
            }
        ]
    }

    const res = http.post('https://api.devrpay.com/pos/pos/checkout/v2', JSON.stringify(payloadCashCheckout), data)
    console.log(res, 'res')
    sleep(2)
}

// --out json=my_test_result.json //get result by json
//--vus 10  with  10 user
//--duration 30s  time out