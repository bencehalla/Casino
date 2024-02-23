export interface Users {
    users: User[]
    total: number
    skip: number
    limit: number
}

export interface User {
    //id: number
    name: string
    email: string
}


