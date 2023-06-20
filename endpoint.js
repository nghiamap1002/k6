export const BASE_URL = 'https://api.devrpay.com'
const CUSTOMER_URL = 'customer/customers'

export const CUSTOMER_ENDPOINT = {
    index: `${BASE_URL}/${CUSTOMER_URL}`,
    history: `${BASE_URL}/${CUSTOMER_URL}/history`,
    info: `${BASE_URL}/${CUSTOMER_URL}/info`,
    remove: `${BASE_URL}/${CUSTOMER_URL}/remove`
}

export const STAFF_ENDPOINT = {
    list: `${BASE_URL}/staff/staffs`,
}


export const GIFTCARD_ENDPOINT = {
    get: `${BASE_URL}/pos/gift-card`,
}

export const TEMP_TICKET_ENDPOINT = {
    get: `${BASE_URL}/pos/temp-ticket`,
}

export const PAYROLL_ENDPOINT = {
    byStaff: `${BASE_URL}/pos/v2/payroll`,
}