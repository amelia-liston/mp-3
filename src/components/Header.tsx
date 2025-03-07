import styled from 'styled-components';
import { useParams} from "react-router";
import { useEffect } from "react";

const HeaderWrapper=styled.header`
    position: relative;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: center;
    font-size: calc(2px + 2vw);
    background-color: lavender;
    padding: 1vh 1vw;
    color: rebeccapurple;

    @media screen and (max-width: 750px){
        align-items: center;
    }
`;

export default function Header() {
    const currentPath=useParams();
    let lastValue=Object.values(currentPath).pop() || "";
    lastValue = lastValue.charAt(0).toUpperCase() + lastValue.slice(1);
    if(lastValue===""){
        lastValue = "Home"
    }else {
        document.title=lastValue+" | Resume";
    }
    useEffect(()=>{
        document.title=lastValue+" | Resume";
    },[lastValue])

    return(
        <>
            <HeaderWrapper>
                <h1>Amelia Liston</h1>
                <p>{lastValue}</p>
            </HeaderWrapper>
        </>
    )
}