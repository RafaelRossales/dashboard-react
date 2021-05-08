import{Box,Stack, Text, Link,Icon} from '@chakra-ui/react'
import { ReactNode } from 'react'

// children = propriedade filhas do componente nesse caso, os filhos de NavSection serão os 
// links passados como parâmetros
interface NavSectionProps{
    title:string
    children:ReactNode
}

export function NavSection({title,children}:NavSectionProps){
    return(
    <Box>
        <Text
        fontWeight="bold"
        color="gray.400"
        fontSize="small"
        >
            {title}
            <Stack spacing="4" mt="8" align="strech">
                {children}
            </Stack>
        </Text>
    </Box>
    )
}