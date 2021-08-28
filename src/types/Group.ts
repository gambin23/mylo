import { User } from "./user";

export interface Group {
    id: string
    name: string
    description: string
    dateCreated?: Date
    dateUpdated?: Date
    img: string
    users: User[]
    usersCount: number
}
