import axios from "axios";
import { USER_LOCALSTORAGE_KEY } from "../const/localstorage"

export const $api = axios.create({
    baseURL: import.meta.env.VITE_APP_BASE_URL,
    headers: {
        authorization: `Bearer ${localStorage.getItem(USER_LOCALSTORAGE_KEY)}` || '',
        Accept: import.meta.env.VITE_APP_ACCEPT,
        // 'Content-Type': import.meta.env.VITE_APP_CONTENT_TYPE
    }
})