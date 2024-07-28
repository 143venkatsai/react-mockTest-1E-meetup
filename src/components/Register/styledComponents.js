import styled from 'styled-components'

export const RegisterContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  margin-top: 30px;
`

export const RegisterImage = styled.img`
  height: 350px;
  width: 350px;
`

export const RegisterPage = styled.form`
  display: flex;
  flex-direction: column;
  width: 20%;
`

export const RegisterHeading = styled.h1`
  font-family: 'Roboto';
  font-size: 40px;
  font-weight: 500;
  color: #334155;
`
export const RegisterLabel = styled.label`
  font-family: 'Roboto';
  font-size: 12px;
  font-weight: 500;
  color: #64748b;
  margin-bottom: 6px;
`
export const RegisterInput = styled.input`
  font-family: 'Roboto';
  font-size: 12px;
  padding: 8px 15px;
  margin-bottom: 20px;
  border: 1px solid #cbd5e1;
  border-radius: 3px;
  outline: none;
`

export const RegisterSelect = styled.select`
  font-family: 'Roboto';
  font-size: 12px;
  padding: 8px 15px;
  margin-bottom: 18px;
  border: 1px solid #cbd5e1;
  border-radius: 3px;
  outline: none;
`

export const RegisterButton = styled.button`
  align-self: flex-start;
  font-family: 'Roboto';
  font-size: 12px;
  font-weight: 500;
  color: #ffffff;
  background-color: #3b82f6;
  border: none;
  border-radius: 6px;
  padding: 10px 20px;
  outline: none;
  cursor: pointer;
  margin-top: 15px;
  margin-bottom: 4px;
`
export const RegisterOption = styled.option``

export const RegisterError = styled.p`
  font-family: 'Roboto';
  font-size: 12px;
  color: #ff0b37;
  margin-top: 0px;
`
