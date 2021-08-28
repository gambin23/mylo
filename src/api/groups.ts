import { Group } from '@/types/group'
import { mockUser } from './users'

const mockGroups: Group[] = [{
    id: '1',
    name: 'Family Gambin',
    description: 'The upcoming food roster of Family Gambin. You can vote for your preferred choice',
    img: 'menu-default.png',
    users: [mockUser, mockUser, mockUser],
    usersCount: 5
},
{
    id: '2',
    name: 'GiG Lunch | Malta',
    description: 'All the lunch menu offered at GiG Malta.',
    img: 'gig.png',
    users: [mockUser, mockUser, mockUser],
    usersCount: 70
}]

export function getGroups(): Promise<Group[]> {
    return new Promise((resolve) => resolve(mockGroups))
}

export function getGroup(id: string): Promise<Group> {
    return new Promise((resolve) => resolve(mockGroups.find(x => x.id === id)))
}
