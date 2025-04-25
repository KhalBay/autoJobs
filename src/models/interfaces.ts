export type PostT = {
    userId: number
    id: number
    title: string
    body: string
}

export interface ApiResponse<T> {
    data: T
}