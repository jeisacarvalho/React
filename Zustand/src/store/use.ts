import create from 'zustand'

type UserType = {
    name: string;
    email: string;
}

export type State = {
    user: UserType[];
    addUser: (user: UserType) => void;
}

const useUseStore = create((set) => ({
    user: [],

    addUser: (user: UserType) => {
    set(state => ({users: [...state.users, user]}))
}
}))

export default useUseStore