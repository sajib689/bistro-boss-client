import { useQuery } from "@tanstack/react-query";
import { useContext } from "react";
import { AuthContext } from "../../Providers/AuthProviders/AuthProviders";
const useCart = () => {
    const {user,loading} = useContext(AuthContext)
    const token = localStorage.getItem('token')
    const { refetch, data: cart = [] } = useQuery({
        queryKey: ['carts', user?.email],
        enabled: !loading,
        queryFn: async () => {
            const res = await fetch(`http://localhost:3000/carts?email=${user?.email}`,{
          
               headers: {
                authorization: `Bearer ${token}`,
            }
            })
            return res.json()
        },
      })
      return [cart, refetch]
    
};

export default useCart;
