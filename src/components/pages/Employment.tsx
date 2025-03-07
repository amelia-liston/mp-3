import StyledMain from '../styled-components/StyledMain.tsx';
import styled from 'styled-components';

const StyledExperience = styled.div`
    text-align: left;
`;

export default function Employment() {
    return(
        <>
            <StyledMain>
                <h1>Employment</h1>
                <StyledExperience>
                    <h3>Apple | Cupertino, CA | Summer 2024</h3>
                    <h4><i>Software Engineering Intern</i></h4>
                    <ul>
                        <li>Developed and contributed to the development of a user-facing iOS feature for the Notes App
                            using <strong>Swift</strong> and <strong>Objective-C</strong> to
                            implement scalable solutions and enhance product functionality and improve user experience.
                        </li>
                        <li>Collaborated with cross-functional teams of designers and managers to align software
                            features with existing customers’ needs.
                        </li>
                    </ul>
                </StyledExperience>
                <br/>
                <StyledExperience>
                    <h3>BU Spark! | Boston, MA | January 2023 - Present</h3>
                    <h4><i>JEDI Program Manager & Ambassador</i></h4>
                    <ul>
                        <li>Led and collaborated on a cross-functional team with 5 ambassadors in the planning,
                            execution, and facilitation of 3 DEI trainings
                            each year for <b>80+ club leaders and Spark! staff</b>, ensuring alignment with
                            organizational goals.
                        </li>
                        <li>Assesses and deliberates current and upcoming projects with <b>5 project managers</b> in
                            weekly meetings, identifying and mitigating
                            risks and implementing contingency plans to keep projects on track and minimize disruptions.
                        </li>
                        <li>Researches DEI in tech to implement and build online training module to be used by Boston
                            University students and faculty.
                        </li>
                    </ul>
                </StyledExperience>
                <br/>
                <StyledExperience>
                    <h3>Girls Who Code Summer Immersion Program | Remote | Summer 2023</h3>
                    <h4><i>Teaching Assistant</i></h4>
                    <ul>
                        <li>Communicated regularly with the GWC teaching team of <b>6 TAs and 1 Lead Instructor</b> to
                            support the seamless delivery and
                            execution of lessons, activities, and partner engagements for <b>60+ students</b> for a
                            total of six weeks
                        </li>
                        <li>Responded and followed all escalation procedures for any student issues that arose during
                            the program.
                        </li>
                        <li>Designed and facilitated with fellow TA a discussion of DEI in Tech with <b>40+ students</b>.
                        </li>
                    </ul>
                </StyledExperience>
                <br/>
                <StyledExperience>
                    <h3>Woodside Bakery & Cafe | Menlo Park, CA</h3>
                    <h4><i>Sales Clerk / Barista</i></h4>
                    <ul>
                        <li>Serviced <b>20-100+ customers</b> daily with prompt and polite support in-person and via
                            telephone.
                        </li>
                        <li>Operated cash register to process sales; stocked merchandise and maintained and operated
                            espresso machine.
                        </li>
                    </ul>
                </StyledExperience>
            </StyledMain>
        </>
    )
}