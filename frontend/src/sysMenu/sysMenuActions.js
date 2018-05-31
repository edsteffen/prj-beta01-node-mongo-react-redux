import axios from 'axios'
import { toastr } from 'react-redux-toastr'
import { reset as resetForm, initialize } from 'redux-form'

const BASE_URL = 'http://localhost:3003/api'

export function getList() {
    const request = axios.get(`${BASE_URL}/sysMenus`)
    return {
        type: 'BILLING_CYCLES_FETCHED',
        payload: request
    }
}

export function init() {
    return getList()
}