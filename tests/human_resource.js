import { sleep } from 'k6';
import http from 'k6/http';
import { BASE_URL, CUSTOMER_ENDPOINT, STAFF_ENDPOINT } from '../endpoint.js';

export const getCustomers = (data) => {
    http.get(CUSTOMER_ENDPOINT.index, data)
    sleep(1)
}

export const addNewCustomer = (data) => {
    const payload = { "name": `nghia1${Math.round(Math.random() * 1000)}`, "phone": "(121) 454-5454" }
    http.post(CUSTOMER_ENDPOINT.index, JSON.stringify(payload), data)
    sleep(1)
}

export const updateCustomer = (data) => {
    const payload = {
        "gs2sk": "customer#1685005782737#c3cb92a4-2321-481f-9349-b7de6a1e16ba",
        "gs1sk": "customer#1685005782737#c3cb92a4-2321-481f-9349-b7de6a1e16ba",
        "gs1pk": "org#2fa79288-7130-4f27-99ef-d5abd6417a98#customers",
        "gs4sk": "customer#c3cb92a4-2321-481f-9349-b7de6a1e16ba",
        "gs3sk": "customer#c3cb92a4-2321-481f-9349-b7de6a1e16ba",
        "email": "nghia@gmail.com",
        "name": `nghia12${Math.round(Math.random() * 1000)}`,
        "gs3pk": "phone#1234567891",
        "gs2pk": "store#2fa79288-7130-4f27-99ef-d5abd6417a98#customers",
        "points": 0,
        "gs4pk": "email#nghia@gmail.com",
        "sk": "customer#c3cb92a4-2321-481f-9349-b7de6a1e16ba",
        "pk": "customer#c3cb92a4-2321-481f-9349-b7de6a1e16ba",
        "phone": "(123) 456-7891",
        "customerId": "c3cb92a4-2321-481f-9349-b7de6a1e16ba",
        "firstName": 'nghia123',
        "PK": "customer#c3cb92a4-2321-481f-9349-b7de6a1e16ba",
        "SK": "customer#c3cb92a4-2321-481f-9349-b7de6a1e16ba",
        "customerPhoneCleaned": "1234567891"
    }
    const res = http.put(CUSTOMER_ENDPOINT.info, JSON.stringify(payload), data)
    console.log(res, 'res')
    sleep(1)
}

export const getStaffs = (data) => {
    http.get(STAFF_ENDPOINT.list, data)
    sleep(1)
}

export const addNewStaffs = (data) => {
    http.get(STAFF_ENDPOINT, data)
    sleep(1)
}


export const removeCustomer = (data) => {
    const payload = { "PK": "staff#086c2d90-3968-48a0-b4b1-daa9ca47eb33", "SK": "staff#086c2d90-3968-48a0-b4b1-daa9ca47eb33" }
    http.post(`${CUSTOMER_ENDPOINT.info}/remove`, JSON.stringify(payload), data)
    sleep(1)
}

export const loginPasscode = (data) => {
    const payload = { "passcode": "R!CH", "page": "Checkout" }
    http.post(`${BASE_URL}/roles/login-passcode`, JSON.stringify(payload), data)
    sleep(1)
}

