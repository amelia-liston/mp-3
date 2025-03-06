import './App.css'
import Employment from './components/Employment';
import About from './components/About';
import Nav from './components/Nav';
import Achievements from './components/Achievements';
import Education from './components/Education';
import Activities from './components/Activities';
import Projects from './components/Projects';
import { createBrowserRouter, Route, RouterProvider, Routes} from "react-router";

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
            <RouterProvider router={router}/>
        </>
    )
}
