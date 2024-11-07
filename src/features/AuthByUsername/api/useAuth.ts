import { $api } from '@/shared/api/api'
import { USER_LOCALSTORAGE_KEY } from '@/shared/const/localstorage'
import { userStore } from '@/shared/lib/zustand/UserStore'
import { useMutation, useQuery } from '@tanstack/react-query'

interface LoginByUsernameProps {
    username: string
    password: string
}

export const useAuth = () => {
    const setUser = userStore((state) => state.setUser);
    const clearUser = userStore((state) => state.clearUser);

    const { mutate, isPending, isError } = useMutation({
        mutationFn: async ({ username, password }: LoginByUsernameProps) => {
            return await $api.post('/auth', { username, password })
        },
        onSuccess: ({ data }) => {
            if (data) {
                localStorage.setItem(USER_LOCALSTORAGE_KEY, data.token)
                setUser(data.data.username);
            }

        },
        onError: (error) => {
            console.error(error)
            clearUser();
        }
    })
    const { refetch } = useQuery({
        queryKey: ['auth'],
        queryFn: () => $api.get('/auth_me'),
        enabled: false
    })
    return { mutate, isPending, isError, refetch }
}