import http from 'k6/http';
import { check, group, sleep } from 'k6';

export const getServices = (data) => {
    http.get('https://api.devrpay.com/catalog/catalog/services', data)
    sleep(1)
}