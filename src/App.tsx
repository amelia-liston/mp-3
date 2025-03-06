import './App.css'
import styled from 'styled-components';
import Employment from './components/pages/Employment.tsx';
import About from './components/pages/About.tsx';
import Nav from './components/Nav';
import Header from './components/Header';
import Footer from './components/Footer';
import Achievements from './components/pages/Achievements.tsx';
import Education from './components/pages/Education.tsx';
import Activities from './components/pages/Activities.tsx';
import Projects from './components/pages/Projects.tsx';
import StyledContainer from "./components/styled-components/StyledContainer.tsx";
import { createBrowserRouter, Route, RouterProvider, Routes} from "react-router";

const PageWrapper=styled.div`
    width: 80%;
    margin: 0 auto;
`;

function Root(){
    return(
        <>
            <Nav />
            <Routes>
                <Route path="/" element={ <About /> } />
                <Route path="/employment" element={ <Employment />} />
                <Route path="/achievements" element={ <Achievements /> } />
                <Route path="/education" element={ <Education />} />
                <Route path="/activities" element={ <Activities />} />
                <Route path="/projects" element={ <Projects />} />
            </Routes>
        </>
    );
}
const router=createBrowserRouter(
    [
        {path:"*", Component: Root},
    ]
)


export default function App(){
    return (
        <>
            <PageWrapper>
                <Header />
                <StyledContainer>
                    <RouterProvider router={router}/>
                </StyledContainer>
                <Footer />
            </PageWrapper>
        </>
    );
}
