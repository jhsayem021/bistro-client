// import {  useState } from "react";
// import useAxiosSecure from "./useAxiosSecure";
import { useQuery } from "@tanstack/react-query";

const useMenu = () =>{

    // const [menu,setMenu ] = useState([]);
    // const [loading, setLoading] = useState(true)
    // useEffect(()=>{
    //     fetch('https://bistro-server-olive.vercel.app/menu')
    //     .then(res=>res.json())
    //     .then(data => {
    //         setMenu(data);
    //         setLoading(false);
    //     })
    // },[])

    const { data: menu = [] , isloading: loading } = useQuery({
            queryKey: ['menu'],
            queryFn: async ()=>{
                const res = await fetch(`https://bistro-server-olive.vercel.app/menu`)
                return res.json();
            }  
          })

    return [menu, loading]

}

export default useMenu;