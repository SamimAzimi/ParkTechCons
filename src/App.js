
import './App.css';
import Home from './components/pages/Main'
import Services from './components/pages/Services';
import AboutUs from './components/pages/AboutUs';
import ContactUs from './components/pages/ContactUs';
import Footer from './components/Footer';
import Header from './components/Header';

import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home/>,
  },
  {
    path: "/Services",
    element: <Services/>,
  },
  {
    path: "/About_Us",
    element: <AboutUs/>,
  },
  {
    path: "/Contact_Us",
    element: <ContactUs/>,
  },
]);
function App() {
  return (
    <>
    <Header/>
    <RouterProvider router={router} />
    <Footer/>
    </>
  );
}

export default App;
