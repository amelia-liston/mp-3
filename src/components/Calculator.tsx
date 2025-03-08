import {useState} from "react";
import styled from "styled-components";

const StyledDivInputs = styled.div`
    align-items: center;
    display: flex;
    flex-direction: column;
    max-width: 100%;
`;

const StyledDivButtons = styled.div`
    text-align: center;
    padding: 1% .5%;
`;

const StyledInput = styled.input`
    margin-bottom: 1vw;
    border-color: green;

    @media screen and (max-width: 750px){
        font-size: calc(5px + 1vw);
    }
`;

const StyledButton = styled.button`
    background-color: rgb(103, 178, 103);
    border-radius: 10%;
    border-color: green;
    padding: 1% 2%;
    font-size: calc(5px + 1vw);
`;

const StyledLabel = styled.label`
    font-size: calc(5px + 1vw);
`;

export default function Calculator(){
    const [firstNum, setFirstNum] = useState(0);
    const [secondNum, setSecondNum] = useState(0);
    const [result, setResult] = useState("");
    const [color, setColor] = useState("black");


    function displayResult(numResult: number){
        if(result!= null){
            setResult(String(numResult));

            if (numResult < 0){
                console.log(numResult);
                console.log(color);
                setColor("red");
                console.log(color);
            } else {
                setColor("black");
            }
        }
    }

    function addition(){
        displayResult(firstNum+secondNum);
    }

    function subtraction(){
        displayResult(firstNum-secondNum);
    }

    function multiply(){
        displayResult(firstNum*secondNum);
    }

    function divide(){
        displayResult(firstNum/secondNum);
    }

    function power(){
        let currentNum = 1;
        //if input number 2 is negative, make num1 its reciprocal
        if (secondNum < 0){
            const pos2 = secondNum * -1;
            for (let i = 0; i < pos2; i++){
                currentNum = currentNum * (1/firstNum);
            }
            // else if input number 2 is not negative
        } else {
            for (let i = 0; i < secondNum; i++){
                currentNum = currentNum * firstNum;
            }
        }
        displayResult(currentNum);
    }

    function clearAll(){
        if(result != null){
            setResult("");
            setFirstNum(0);
            setSecondNum(0);
            setColor("black");
        }
    }

    return(
        <>
            <StyledDivInputs>
                <StyledLabel id="label1">First Number: </StyledLabel><StyledInput type="number" placeholder={"Number 1"} value={firstNum} onChange={(e) => setFirstNum(Number(e.target.value))} />
                <StyledLabel id="label2">Second Number: </StyledLabel><StyledInput type="number" placeholder={"Number 2"} value={secondNum} onChange={(e) => setSecondNum(Number(e.target.value))} />
            </StyledDivInputs>
            <StyledDivButtons>
                <StyledButton onClick={addition}>+</StyledButton>
                <StyledButton onClick={subtraction}>-</StyledButton>
                <StyledButton onClick={multiply}>*</StyledButton>
                <StyledButton onClick={divide}>/</StyledButton>
                <StyledButton onClick={power}>**</StyledButton>
                <StyledButton onClick={clearAll}>clear</StyledButton>
            </StyledDivButtons>
            <div >
                <h4>Result:</h4>
                <div style={{color: color}}>
                    {result}
                </div>
            </div>
        </>
    )
}