import Link,{LinkProps} from "next/link";
import { useRouter } from "next/router";
import { cloneElement, ReactElement } from "react";

interface ActiveLink extends LinkProps{
    children:ReactElement //<element></element>
    shouldMacthExactHref?:boolean
}

export function ActiveLink({children,shouldMacthExactHref=false ,...rest}:ActiveLink){

    let isActive = false;

    const{asPath } = useRouter();

    if(shouldMacthExactHref && (asPath === rest.href || asPath === rest.as))
    {
        isActive = true;
    }

    if(!shouldMacthExactHref && (asPath.startsWith(String(rest.href)) || asPath.startsWith(String(rest.as))))
    {
        isActive = true;
    }

    return(
        <Link {...rest}>
            {cloneElement(children,{
                color: isActive ? 'pink.400':'gray.50'
            })}
        </Link>
    )
}