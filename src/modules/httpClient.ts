import axios from "axios"

const baseURL = 'https://hh.ru'

const instance = axios.create({
    baseURL: baseURL,
})

export const httpClient = instance;
