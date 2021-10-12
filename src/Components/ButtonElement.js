import styled from 'styled-components'

export const Button = styled.button`
  border-radius: 50px;
  background: ${( { primary } ) => ( primary ? '#383F42' : '#383F42' )};
  white-space: nowrap;
  padding: ${( { big } ) => ( big ? '14px 48px' : '12px 30px' )};
  color: ${( { dark } ) => ( dark ? '#F7E3A1' : '#383F42' )};
  font-size: ${( { big } ) => ( big ? '20px' : '16px' )};
  outline: none;
  border: none;
  cursor: pointer;
  display: flex;
  justify-content: center;
  align-items: center;
  transition: all 0.2s ease-in-out;

  &:hover {
    transition: all 0.2s ease-in-out;
    background: ${( { primary } ) => ( primary ? '#75A1BD' : '#383F42' )};
    color: #F7E3A1;
  }
`