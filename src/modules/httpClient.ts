import axios from "axios"

const baseURL = 'https://jsonplaceholder.typicode.com'
// const baseURL = 'https://huggingface.co/ai-forever/sage-fredt5-distilled-95m'

const instance = axios.create({
    baseURL: baseURL,
})

export const httpClient = instance;
