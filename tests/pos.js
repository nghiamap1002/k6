import { sleep } from 'k6';
import http from 'k6/http';
import { GIFTCARD_ENDPOINT, PAYROLL_ENDPOINT, TEMP_TICKET_ENDPOINT } from '../endpoint.js';

export const getGiftCard = (data) => {
    http.get(`${GIFTCARD_ENDPOINT.get}/123456789`)
    sleep(1)
}


export const getTempTicket = (data) => {
    const res = http.get(`${TEMP_TICKET_ENDPOINT.get}`, data)
    sleep(1)
}



export const getPayrollByStaff = (data) => {
    const payload = { "limit": 20, "lastKey": "", "startDate": "1687107600", "endDate": "1687193999", "filterType": "yesterday", "staffName": "long" }
    const res = http.post(`${PAYROLL_ENDPOINT.byStaff}/086c2d90-3968-48a0-b4b1-daa9ca47eb33`, JSON.stringify(payload), data)
    sleep(1)
}
