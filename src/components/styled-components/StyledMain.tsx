import styled from 'styled-components';

const StyledMain=styled.main`
    display: flex;
    flex-direction: column;
    width: 70%;
    height: 120vw;
    background-color: rgb(216, 255, 218);
    text-align: center;
    padding: 2vh 2vw;
    
    @media screen and (max-width: 750px){
        width: 100%;
        height: auto;
    }
`;

export default StyledMain;