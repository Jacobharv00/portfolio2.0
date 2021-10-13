import React from 'react'
import { Container, FormContent, FormWrap, Icon, Form, FormH1, FormButton, FormLabel, FormInput, Text } from './EmailElements'


const Email = () => {
  return (
    <>
      <Container>
        <FormWrap>
          <Icon to='/'>Home</Icon>
          <FormContent>
            <Form action='mailto:jacobharv00@gmail.com'>
              <FormH1>Email Me!</FormH1>
              <FormLabel htmlFor='email'>Email:</FormLabel>
              <FormInput type='text' placeholder='Type Here' required />
              <FormButton type='submit'>SEND</FormButton>
              <Text>Talk Soon!</Text>
            </Form>
          </FormContent>
        </FormWrap>
      </Container>
    </>
  )
}

export default Email
