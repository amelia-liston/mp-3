import {useState} from "react";

export default function Calculator(){
    const [firstNum, setFirstNum] = useState(0);
    const [secondNum, setSecondNum] = useState(0);

    const outputElement = document.getElementById("output");

    function displayResult(result: number){
        if(outputElement!= null){
            outputElement.innerHTML= String(result);

            if (result < 0){
                outputElement.style.color = "red";
            } else {
                outputElement.style.color = "black";
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
        if(outputElement != null){
            outputElement.innerHTML = "";
            setFirstNum(0);
            setSecondNum(0);
        }
    }

    return(
        <>
            <div>
                <input type="number" placeholder={"Number 1"} value={firstNum} onChange={(e) => setFirstNum(Number(e.target.value))} />
                <input type="number" placeholder={"Number 2"} value={secondNum} onChange={(e) => setSecondNum(Number(e.target.value))} />
                <button onClick={addition}>+</button>
                <button onClick={subtraction}>-</button>
                <button onClick={multiply}>*</button>
                <button onClick={divide}>/</button>
                <button onClick={power}>**</button>
                <button onClick={clearAll}>clear</button>
            </div>
            <div>

            </div>
            <div >
                <h4>Result:</h4>
                <h4 id="output"></h4>
            </div>
        </>
    )
}