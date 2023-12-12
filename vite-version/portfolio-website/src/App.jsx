import './App.css';
import {RouterProvider,createBrowserRouter} from 'react-router-dom';
import ErrorPage from "./components/Pages/ErrorPage";
import HomePage from "./components/Pages/HomePage";
import AboutPage from "./components/Pages/AboutPage";
import ProjectsPage from "./components/Pages/ProjectsPage";
import NavigationBar from './components/Navigation/NavigationBar';
import {Fragment} from 'react'; 

const errorPage = <Fragment><NavigationBar/><ErrorPage error="Page not found..."/></Fragment>;

const router = createBrowserRouter(
[{
name:'Navigation Bar',
path:'/',
element: <NavigationBar/>,  
errorElement:errorPage,
children: [
{
name:'Home',
path: '/',
element: <HomePage/>,
},
{
name:'About',
path: '/about',
element: <AboutPage/>,
},
{
name:'Projects',
path: '/projects',
element: <ProjectsPage/>,
},
]}]);


function App() {
  return (
    <RouterProvider router={router}></RouterProvider>
  );
}

export default App;

