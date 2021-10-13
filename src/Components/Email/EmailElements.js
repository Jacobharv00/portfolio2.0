import styled from 'styled-components'
import { Link } from 'react-router-dom'

export const Container = styled.div`
  min-height: 692px;
  position: fixed;
  bottom: 0;
  left: 0;
  right: 0;
  top: 0;
  z-index: 0;
  overflow: hidden;
  background: #75A1BD;
`

export const FormWrap = styled.div`
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;

  @media screen and (max-width: 400px) {
    height: 80%;
  }
`

export const Icon = styled( Link )`
  margin-left: 50px;
  margin-top: 50px;
  text-decoration: none;
  color: #F7E3A1;
  font-weight: 700;
  font-size: 32px;

  @media screen and (max-width: 480px) {
    margin-left: 16px;
    margin-top: 8px;
  }
`

export const FormContent = styled.div`
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;

  @media screen and (max-width: 480px) {
    padding: 10px;
  }
`

export const Form = styled.form`
  background: #75A1BD;
  max-width: 800px;
  height: auto;
  width: 100%;
  z-index: 1;
  display: grid;
  margin: 0 auto;
  padding: 80px 32px;
  border-radius: 4px;
  box-shadow: 0 1px 3px rgba(0,0,0,0.9);

  @media screen and (max-width: 400px) {
    padding: 32px 32px;
    width: 200px;
  }
`

export const FormH1 = styled.h1`
  margin-bottom: 40px;
  color: #F7E3A1;
  font-size: 50px;
  font-weight: 400;
  text-align: center;
`

export const FormLabel = styled.label`
  margin-bottom: 0;
  font-size: 20px;
  color: #383F42;
`

export const FormInput = styled.input`
  padding: 16px 16px;
  height: 20vh;
  margin-bottom: 32px;
  border: none;
  border-radius: 4px;
`

export const FormButton = styled.button`
  background: #383F42;
  padding: 16px 0;
  border: none;
  border-radius: 4px;
  color: #F7E3A1;
  font-size: 25px;
  font-weight: 800;
  cursor: pointer;

  &:hover {
    background-color: #F7E3A1;
    color: #383F42;
  }

`

export const Text = styled.span`
  text-align: center;
  margin-top: 30px;
  margin-bottom: -20px;
  color: #F7E3A1;
  font-size: 20px;
`

