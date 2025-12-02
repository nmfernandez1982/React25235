import styled from 'styled-components'



const BotonStyled = styled.button`
background-color:  #98FF98;
color:white;
padding: 10px 15px;
font-size: 16px;
border:none;
border-radius:5px;
cursor:pointer;

&:hover{
background-color: #28a745;
}
`;

export default function Boton()
{
    return <BotonStyled>Ingresar</BotonStyled>
}