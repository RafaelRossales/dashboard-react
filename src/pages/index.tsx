
import { Flex,Stack,Button} from '@chakra-ui/react'
import { SubmitHandler, useForm } from 'react-hook-form'
import { Input } from '../components/Form/Input'

type SignInFormData ={
  email:string,
  password:string
}

export default function Home() {
  
  const { register, handleSubmit,formState} = useForm();

  const { errors } = formState; 

  const handleSignIn:SubmitHandler<SignInFormData> = async (values) =>{

    await new Promise(resolve => setTimeout(resolve,2000));
  }


  return (
    <Flex 
      w="100vw" 
      h="100vh" 
      align="center" 
      justify="center"
      >
      <Flex 
        as="form"
        width="100%"
        maxWidth={360}
        bg="gray.800"
        p="8" //2rem
        borderRadius={8}
        flexDirection="column"
        onSubmit={handleSubmit(handleSignIn)}
        >
          <Stack spacing='4'>
            <Input 
            name="email" 
            type="email" 
            label="E-mail" 
            {...register('email')}
            />

            <Input 
            name="password" 
            type="password" 
            label="Senha" 
            {...register('senha')}
            />    
        </Stack>


        <Button 
        type="submit" 
        mt="6" 
        colorScheme="pink" 
        size="lg"
        isLoading={formState.isSubmitting}
        >
          Entrar
          </Button>
      </Flex>
    </Flex>
  )
}
