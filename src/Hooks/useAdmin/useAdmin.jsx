import { useContext } from "react"
import { AuthContext } from "../../Providers/AuthProviders/AuthProviders"
import { useQuery } from "@tanstack/react-query"

const useAdmin = () => {
    const token = localStorage.getItem('token')
    const { user } = useContext(AuthContext)
    const { data: isAdmin, isLoading: isAdminLoading } = useQuery({
        queryKey: ['isAdmin', user?.email],
        queryFn: async () => {
            const res = await fetch(`http://localhost:3000/users/admin/${user?.email}`, {
                headers: {
                    authorization: `Bearer ${token}`
                }
            });

            if (!res.ok) {
                throw new Error(`HTTP error! Status: ${res.status}`);
            }

            const responseData = await res.json();

            return responseData.admin;
        }
    });
    return [isAdmin, isAdminLoading];
}


export default useAdmin