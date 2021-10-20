import React, { useState } from 'react'
import { Container, FormContent, FormWrap, Icon, Form, FormH1, FormButton, FormLabel, FormInput, Text } from './EmailElements'
import emailjs from 'emailjs-com'


const Email = () => {
  const [ success, setSuccess ] = useState( [] )
  const [ error, setError ] = useState( [] )

  function sendEmail ( e ) {
    e.preventDefault()

    emailjs.sendForm( 'service_azevy4w', 'template_l6ij3a2', e.target, 'user_WywgdTVZb1qNinEWvaa9l' )
      .then( ( result ) => {
        console.log( result.text )
        setSuccess( result.text )
      }, ( error ) => {
        console.log( error.text )
        setError( error.text )
      } )
    e.target.reset()
  }

  return (
    <>
      <Container>
        <FormWrap>
          <Icon to='/'>Home</Icon>
          <FormContent>
            <Form onSubmit={ sendEmail }>
              <FormH1>Email Me</FormH1>
              { success === 'OK' && <FormH1>Message Sent!</FormH1> }
              { error === 'error' && <FormH1>Sorry An Error Occurred!</FormH1> }
              <FormLabel>Name</FormLabel>
              <FormInput type='text' placeholder='Name' name='name' required />
              <FormLabel>Subject</FormLabel>
              <FormInput type='text' placeholder='Subject' name='subject' required />
              <FormLabel>Email Address</FormLabel>
              <FormInput type='email' placeholder='Email Address' name='email' required />
              <FormLabel>Message</FormLabel>
              <FormInput type='textarea' placeholder='Your Message' name='message' required style={ { height: '15vh' } } />
              <FormButton type='submit' value='Send'>SEND</FormButton>
              <Text>Talk Soon!</Text>
            </Form>
          </FormContent>
        </FormWrap>
      </Container>
    </>
  )
}

export default Email
