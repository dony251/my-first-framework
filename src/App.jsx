
import Layout from "./Component/Layout/Layout.jsx";
import Home from "./Component/Home/Home.jsx";
import About from "./Component/About/About.jsx";
import Contact from "./Component/Contact/Contact.jsx";
import Footer from "./Component/Footer/Footer.jsx";
import Navbar from "./Component/Navbar/Navbar.jsx";
import Portfolio from "./Component/Portfolio/Portfolio.jsx";
import { RouterProvider, createBrowserRouter } from "react-router-dom";


// إنشـاء الراوتر
const routers = createBrowserRouter([
  {
    path: '/',element: <Layout />,children: [
      { index: true, element: <Home /> },
      { path: 'about', element: <About /> },
      { path: 'portfolio', element: <Portfolio /> },
      { path: 'contact', element: <Contact /> },
      // مش محتاجين Navbar وFooter كـ routes لأنهم جوه Layout
    ]
  }
]);

function App() {
  return (
    <RouterProvider router={routers} />
  );
}

export default App;
