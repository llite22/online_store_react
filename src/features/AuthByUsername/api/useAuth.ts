import { User, UserSchema } from '@/entities/User/model/types/user'
import { $api } from '@/shared/api/api'
import { USER_LOCALSTORAGE_KEY } from '@/shared/const/localstorage'
import { userStore } from '@/shared/lib/zustand/userStore'
import { useMutation, useQuery } from '@tanstack/react-query'

interface LoginByUsernameProps {
    username: string
    password: string
}

export const useAuth = () => {
    const { setUser, clearUser } = userStore();

    const { mutate, isPending, isError } = useMutation({
        mutationFn: async ({ username, password }: LoginByUsernameProps) => {
            return await $api.post<UserSchema>('/auth', { username, password })
        },
        onSuccess: ({ data }) => {
            if (data) {
                localStorage.setItem(USER_LOCALSTORAGE_KEY, data.token)
                setUser(data.data);
            }
        },
        onError: (error) => {
            console.error(error)
            clearUser();
        }
    })
    const { refetch, isPending: isPendingRefetch } = useQuery({
        queryKey: ['auth'],
        queryFn: async () => await $api.get<User>('/auth_me'),
        select: (response) => response.data,
        enabled: false
    })
    return { mutate, isPending, isError, refetch, isPendingRefetch }
}