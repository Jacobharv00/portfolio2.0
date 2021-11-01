import styled from 'styled-components'
import { Link } from 'react-router-dom'

export const Container = styled.div`
  min-height: 690px;
  /* position: fixed; */
  bottom: 0;
  left: 0;
  right: 0;
  top: 0;
  z-index: 0;
  overflow: hidden;
  background: #277F91;
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
  margin-left: 32px;
  margin-top: 32px;
  text-decoration: none;
  color: #F7E3A1;
  font-weight: 700;
  font-size: 3rem;

  &:hover {
    color: #383F42;
  }

  @media screen and (max-width: 480px) {
    margin-left: 16px;
    margin-top: 8px;
  }
`

export const FormContent = styled.div`
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding: 20px;

  @media screen and (max-width: 480px) {
    padding: 10px;
  }
`

export const Form = styled.form`
  background: #277F91;
  height: auto;
  width: 100%;
  z-index: 1;
  display: grid;
  margin: 0 auto;
  padding: 80px 32px;
  border-radius: 4px;
  box-shadow: rgba(0, 0, 0, 0.25) 0px 54px 55px, rgba(0, 0, 0, 0.12) 0px -12px 30px, rgba(0, 0, 0, 0.12) 0px 4px 6px, rgba(0, 0, 0, 0.17) 0px 12px 13px, rgba(0, 0, 0, 0.09) 0px -3px 5px;

  @media screen and (max-width: 1300px) {
    padding: 32px 32px;
  }
`

export const FormH1 = styled.h1`
  margin-bottom: 40px;
  color: #F7E3A1;
  font-size: 40px;
  font-weight: 400;
  text-align: center;
`

// export const FormLabel = styled.label`
//   margin-bottom: 8px;
//   font-size: 18px;
//   color: #383F42;
// `

export const FormInput = styled.textarea`
  resize: none;
  padding: 16px 16px;
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
  font-size: 20px;
  cursor: pointer;

  &:hover {
    background-color: #F7E3A1;
    color: #383F42;
  }
`

export const Text = styled.span`
  text-align: center;
  margin-top: 24px;
  color: #F7E3A1;
  font-size: 14px;
`

