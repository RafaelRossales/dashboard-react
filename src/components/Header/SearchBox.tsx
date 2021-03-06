import {Flex, Input, Icon} from '@chakra-ui/react'
import { useRef } from 'react';
import { RiSearchLine } from 'react-icons/ri'

export function  SearchBox(){

    //Uncontrolled Components

    const searchInputRef = useRef<HTMLInputElement>(null)

    // console.log(searchInputRef.current.value)

    return(
        <Flex
                
        as="label"
        flex="1"
        py="4"
        px="8"
        ml="6"
        maxWidth={400}
        alignSelf="center"
        bg="gray.800"
        borderRadius="full"
    >
        <Input
            color="gray.50"
            px="4"
            mr="4"
            variant="unstyled"
            placeholder="Buscar na plataforma"
            _placeholder={{ color:'gray.400' }}
            ref={searchInputRef}
        />
        <Icon as={RiSearchLine} fontSize="20"/>
    </Flex>
    );
}