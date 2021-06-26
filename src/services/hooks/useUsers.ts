import { useQuery } from "react-query"; // Utilizado para fazer requisições para a API
import { api } from "../api";


type User = {
    id:string;
    name:string;
    email:string;
    createdAt:string
}

export async function getUsers(){

    const { data } = await api.get('users')

    const users = data.users.map(user =>{
        return {
            id:user.id,
            name:user.name,
            email:user.email,
            createdAt: new Date(user.createdAt).toLocaleDateString('pt-br',{
                day:'2-digit',
                month:'long',
                year:'numeric'
            })
        };
    });
    
    return users;
}

export function useUsers(){
    return useQuery<User[]>('users', getUsers ,{ // Definindo intervalo para a query nao ser recarrecada 
        staleTime: 1000 * 60 // 5 segundos
    })
}