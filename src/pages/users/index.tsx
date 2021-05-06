import { Flex,SimpleGrid,Box, theme,Heading,Button,Icon,Table,Text,Thead,Tr,Th,Checkbox,Tbody,Td} from '@chakra-ui/react';
import { Sidebar } from '../../components/Sidebar'
import {Header} from '../../components/Header'
import { RiAddLine, RiPencilLine } from 'react-icons/ri';



export default function  UserList(){
    return(
        <Box>
            <Header/>
            <Flex w="100%" my="6" maxWidth={1480} mx="auto" px="6">
                <Sidebar/>
                <Box flex='1' borderRadius={8} bg="gray.800" p="8">
                    <Flex mb="8" justify="space-between" align="center">
                    <Heading size="lg" fontWeight="normal">Listagem de Usuários</Heading>
                    
                    <Button 
                    as="a" 
                    size="sm" 
                    fontSize="sm" 
                    colorScheme="pink"
                    leftIcon={<Icon as={RiAddLine} fontSize="20" />}
                    >
                        Criar Novo
                    </Button>
                    </Flex>

                    <Table colorScheme="whiteAlpha">
                        <Thead>
                            <Tr>
                                <Th px="6" color="gray.300" width="8">
                                    <Checkbox colorScheme="pink"/>
                                </Th>
                            <Th> Usuário</Th>
                            <Th>Data de Cadastro</Th>
                            <Th width="8"></Th>
                            </Tr>
                        </Thead>
                        <Tbody>
                            <Td px="6">
                                <Checkbox colorScheme="pink"/>
                            </Td>
                            <Td>
                                <Box>
                                    <Text fontWeight="bold">Maria Fernandes</Text>
                                    <Text fontSize="sm" color="gray.300">maria@gmail.com</Text>
                                </Box>
                            </Td>
                            <Td>04 de Abril de 2021</Td>
                            <Td>
                            <Button 
                            as="a" 
                            size="sm" 
                            fontSize="sm" 
                            colorScheme="purple"
                            leftIcon={<Icon as={RiPencilLine} fontSize="16"/>}
                            >
                                Editar
                            </Button>
                            </Td>
                        </Tbody>
                    </Table>
                </Box>
            </Flex>
        </Box>
    )
}