import { useDisclosure, UseDisclosureReturn} from "@chakra-ui/hooks";
import { useRouter } from "next/router";
import { createContext, ReactNode, useContext,useEffect } from "react";


interface SidebarDraweProviderProps{
    children:ReactNode
}

type SidebarDrawerContextData = UseDisclosureReturn 

const SidebarDrawerContext = createContext({} as SidebarDrawerContextData);


export function SidebarDraweProvider({children}:SidebarDraweProviderProps){

    const disclosure = useDisclosure()
    const router = useRouter()


    //Toda a vez que a rota mudar atraves do clique de um link
    useEffect(()=>{
        disclosure.onClose()
    },[router.asPath])

    return (
        <SidebarDrawerContext.Provider value={disclosure}>
            {children}
        </SidebarDrawerContext.Provider>
    )
}


export const useSidebarDrawer = () => useContext(SidebarDrawerContext)