import { User } from '@/types/user'

const mockUser: User = {
    id: '1',
    name: 'Gilbert',
    surname: 'Gambin',
    dateRegistered: new Date(),
    img: 'https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500'
}

export function getUser(id: string): Promise<User> {
    console.log(`User ID: ${id}`)
    return new Promise((resolve) => resolve(mockUser))
}
