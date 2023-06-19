export const BASE_URL = 'https://api.devrpay.com'
const CUSTOMER_URL = 'customer/customers'

export const CUSTOMER_ENDPOINT = {
    index: `${BASE_URL}/${CUSTOMER_URL}`,
    history: `${BASE_URL}/${CUSTOMER_URL}/history`,
    info: `${BASE_URL}/${CUSTOMER_URL}/info`
}

export const STAFF_ENDPOINT = {
    list: `${BASE_URL}/staff/staffs`,
}

