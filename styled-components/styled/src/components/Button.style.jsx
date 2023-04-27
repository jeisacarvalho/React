import styled from 'styled-components'
import ButtonStyled from './Button'

export const StyledButton = styled.button`

background-color: ${(prop) => prop.backgroundcolor ? prop.backgroundcolor : 'pink'};
width: 100px;
height: 60px;

&:hover {
    background-color: pink;
}
`

export const Button2 = styled(ButtonStyled)`
background-color: red;
width: 100px;
height: 60px;
`