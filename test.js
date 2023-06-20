import http from 'k6/http';
import { check, group, sleep } from 'k6';
export {
  cashCheckout,
  getBusinessInfo,
  getCheckoutSettings,
  getCustomers,
  getPaymentMethod,
  getServices,
  getStaffs,
  updateCustomer,
  addNewCustomer,
  loginPasscode,
  getGiftCard,
  getTempTicket,
  getPayrollByStaff,
} from './tests/index.js'

export const options = {
  scenarios: {
    // getBusinessInfo: {
    //   executor: 'constant-vus',
    //   vus: 2,
    //   duration: '10s',
    //   exec: 'getBusinessInfo',
    // },
    // getCheckoutSettings: {
    //   executor: 'constant-vus',
    //   vus: 2,
    //   duration: '10s',
    //   exec: 'getCheckoutSettings',
    // },
    // getPaymentMethod: {
    //   executor: 'constant-vus',
    //   vus: 2,
    //   duration: '10s',
    //   exec: 'getPaymentMethod',
    // },

    // getCustomers: {
    //   executor: 'constant-vus',
    //   vus: 2,
    //   duration: '10s',
    //   exec: 'getCustomers',
    // },

    // updateCustomer: {
    //   executor: 'constant-vus',
    //   vus: 2,
    //   duration: '10s',
    //   exec: 'updateCustomer',
    // },

    // addNewCustomer: {
    //   executor: 'constant-vus',
    //   vus: 2,
    //   duration: '10s',
    //   exec: 'addNewCustomer',
    // },

    // getStaffs: {
    //   executor: 'constant-vus',
    //   vus: 2,
    //   duration: '10s',
    //   exec: 'getStaffs',
    // },

    // getServices: {
    //   executor: 'constant-vus',
    //   vus: 2,
    //   duration: '10s',
    //   exec: 'getServices',
    // },
    // cashCheckout: {
    //   executor: 'constant-vus',
    //   vus: 1,
    //   duration: '10s',
    //   exec: 'cashCheckout',
    // },

    // loginPasscode: {
    //   executor: 'constant-vus',
    //   vus: 1,
    //   duration: '10s',
    //   exec: 'loginPasscode',
    // },

    // getGiftCard: {
    //   executor: 'constant-vus',
    //   vus: 1,
    //   duration: '10s',
    //   exec: 'getGiftCard',
    // },

    getTempTicket: {
      executor: 'constant-vus',
      vus: 1,
      duration: '10s',
      exec: 'getTempTicket',
    },


    getPayrollByStaff: {
      executor: 'constant-vus',
      vus: 1,
      duration: '10s',
      exec: 'getPayrollByStaff',
    },

  },
  throw: true,
  thresholds: {
    // 'http_req_duration{scenario:getBusinessInfo}': [],
    // 'http_req_duration{scenario:getCheckoutSettings}': [],
    // 'http_req_duration{scenario:getPaymentMethod}': [],
    // 'http_req_duration{scenario:getCustomers}': [],
    // 'http_req_duration{scenario:updateCustomers}': [],
    // 'http_req_duration{scenario:addNewCustomer}': [],
    // 'http_req_duration{scenario:loginPasscode}': [],
    // 'http_req_duration{scenario:getStaffs}': [],
    // 'http_req_duration{scenario:getServices}': [],
    // 'http_req_duration{scenario:cashCheckout}': [],
    // 'http_req_duration{scenario:getGiftCard}': [],
    'http_req_duration{scenario:getTempTicket}': [],
    'http_req_duration{scenario:getPayrollByStaff}': [],
  },
};

export function setup() {
  const payload = JSON.stringify({ "username": "bededuxe102", "password": "Nmap123456789", "role": "TenantAdmin" });
  const data = http.post('https://api.devrpay.com/auth/auth/login', payload)
  const { accessToken, tenantId, role } = JSON.parse(data.body).data
  return {
    headers: {
      'Authorizer': accessToken,
      'X-Tenant-Id': tenantId
    },
  }
}