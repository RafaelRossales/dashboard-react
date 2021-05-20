
import { Flex,Stack,Button} from '@chakra-ui/react'
import { SubmitHandler, useForm } from 'react-hook-form'
import { Input } from '../components/Form/Input'

import * as yup from 'yup'
import {yupResolver } from '@hookform/resolvers/yup'

type SignInFormData ={
  email:string,
  password:string
}

const signInFormSchema = yup.object().shape({
  email:yup.string().required('E-mail obrigatorio').email('E-mail invalido'),
  password:yup.string().required('Senha obrigatoria')
})

export default function Home() {
  
  const { register, handleSubmit,formState} = useForm({
    resolver:yupResolver(signInFormSchema)
  });

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
            error={errors.email}
            {...register('email')}
            />

            <Input 
            name="password" 
            type="password" 
            label="Senha" 
            error={errors.password}
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
