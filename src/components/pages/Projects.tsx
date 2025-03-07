import StyledMain from '../styled-components/StyledMain.tsx';
import StyledContentSection from '../styled-components/StyledContentSection';
import StyledHeader1 from '../styled-components/StyledHeader1';
import StyledHeader2 from "../styled-components/StyledHeader2.tsx";
import { useEffect, useState } from "react";

export default function Projects() {
    const [result, setResult] = useState<number>();

    function addition(){
        setResult(1+1);
    }

    function subtraction(){
        setResult(3-3);
    }

    function multiply(){
        setResult(-4);
    }

    function divide(){
        setResult(1);
    }

    function power(){
        setResult(5);
    }

    function clearAll(){
        setResult(0);
    }

    useEffect(() => {
        
    }, []);
    return(
        <>
            <StyledMain>
                <StyledHeader1>Technical Projects</StyledHeader1>
                <StyledContentSection>
                    <h3>AccessiScan</h3>
                    <h4>Tech Stack: React, TypeScript, Next.js, MongoDB, Flask, Python, HTML, CSS, JavaScript, Git </h4>
                    <p>
                        Developed a website and Chrome extension on a team with 3 technical teammates and one UI/UX
                        designer to teach students
                        about accessibility, and to scan their websites to determine how accessible it is based on 4 key
                        accessibility types.
                    </p>
                </StyledContentSection>
                <br/>
                <StyledContentSection>
                    <h3>Spark! Bytes Website</h3>
                    <h4>Tech Stack: React, TypeScript, Git</h4>
                    <p>
                        Developed and implemented secure login and signup features using Node.js and JWT, and Ant Design
                        implementing robust user
                        authentication and authorization ensuring seamless user experience with real-time input
                        validation and error handling.
                    </p>
                </StyledContentSection>
                <br/>
                <StyledContentSection>
                    <h3>BUGH</h3>
                    <h4>Tech Stack: React Remix, HTML, CSS, Figma</h4>
                    <p>
                        On October 7, 2023 I participated in Spark!'s Mini-Hack event. Our idea is an app that is
                        connected to
                        GrubHub at BU that both allows students to deliver
                        food for one another and allowed students
                        to resell their orders when they were unable to pick up their orders. Our idea touched on two
                        sustainability issues 1) students often
                        order food through DoorDash or other delivery services when they do not have time to pick up
                        their own food, thus creating more carbon
                        emissions, and 2) students often order food on their way to class but are unable to pick up
                        their food because their orders take longer
                        than anticipated to be ready, leading to food waste.
                        We developed our prototype for our project on Figma, and began coding a website version of the
                        app using HTML and CSS in the limited time
                        we had. When we were awarded Best Hack
                        Overall, we presented our project on stage
                        in front of the entire event.
                    </p>
                </StyledContentSection>
                <br/>
                <StyledContentSection>
                    <h3>Space News</h3>
                    <h4>Tech Stack: React</h4>
                    <p>
                        During the spring semester of my sophomore year at BU, I took CS391 Software Engineering. In
                        this
                        class, one of the assignments was
                        this project called Space News. We were given the code for general structure of the website, and
                        were tasked with adding a News page and
                        About page. The news page focused on space-related news using Next.js and Ant Design components.
                        The website fetches and displays articles from a public API, and I used various components like
                        article cards, lists, and tables to organize the content. Additionally, I implemented features
                        such as pagination, search functionality, and summary statistics.
                    </p>
                </StyledContentSection>
                <StyledHeader2>Calculator</StyledHeader2>
                <div>
                    <input type="number" placeholder={"Number 1"} />
                    <input type="number" placeholder={"Number 2"} />
                    <button onClick={addition}>+</button>
                    <button onClick={subtraction}>-</button>
                    <button onClick={multiply}>*</button>
                    <button onClick={divide}>/</button>
                    <button onClick={power}>**</button>
                    <button onClick={clearAll}>clear</button>
                    <p>{result}</p>
                </div>
                <div id="calc-buttons">

                </div>
                <div >
                    <h4>Result:</h4>
                    <h4 id="output"></h4>
                </div>
            </StyledMain>
        </>
    );
}