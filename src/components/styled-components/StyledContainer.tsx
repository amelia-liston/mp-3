import styled from 'styled-components';

const StyledContainer=styled.div`
    width: 100%;
    display: flex;
    flex-direction: row;
    position: relative;
    
    @media screen and (max-width: 750px){
        flex-direction: column;
    }
`;

export default StyledContainer;