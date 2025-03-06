import './App.css'
import Employment from './components/Employment';
import About from './components/About';
import Nav from './components/Nav';
import { createBrowserRouter, Route, RouterProvider, Routes} from "react-router";

function Root(){
    return(
        <>
            <Nav />
            <Routes>
                <Route path="/" element={ <About /> } />
                <Route path="/employment" element={ <Employment />} />
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
