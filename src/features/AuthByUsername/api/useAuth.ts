import { $api } from '@/shared/api/api'
import { USER_LOCALSTORAGE_KEY } from '@/shared/const/localstorage'
import { useMutation, useQuery } from '@tanstack/react-query'

interface LoginByUsernameProps {
    username: string
    password: string
}

export const useAuth = () => {
    const { mutate, isPending, isError } = useMutation({
        mutationFn: async ({ username, password }: LoginByUsernameProps) => {
            return await $api.post('/auth', { username, password })
        },
        onSuccess: ({ data }) => {
            if (data) {
                localStorage.setItem(USER_LOCALSTORAGE_KEY, data.token)
            }

        },
        onError: (error) => {
            console.error(error)
        }
    })
    const { refetch } = useQuery({
        queryKey: ['auth'],
        queryFn: () => $api.get('/auth_me'),
        enabled: false
    })
    return { mutate, isPending, isError, refetch }
}