import { useCallback } from "react";
import { useHttp } from "../http";


export const useAuth = () => {
    const http = useHttp()
    const auth = useCallback(async () => await http('/check', 'GET'), [http])
    return auth
}