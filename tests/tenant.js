import http from 'k6/http';
import { check, group, sleep } from 'k6';
import { BASE_URL } from '../endpoint.js';


export const getBusinessInfo = (data) => {
    http.get(`${BASE_URL}/tenant/tenants/business-info/`, data)
    sleep(1)
}

export const getCheckoutSettings = (data) => {
    http.get(`${BASE_URL}/tenant/tenants/checkout-settings`, data)
    sleep(1)
}
export const getPaymentMethod = (data) => {
    http.get(`${BASE_URL}/tenant/tenants/payment-method`, data)
    sleep(1)
}
