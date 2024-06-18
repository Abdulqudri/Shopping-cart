import {Routes, Route} from "react-router-dom"
import { Container } from "react-bootstrap"
import { NavBar } from "./components/NavBar"
import Home from "./pages/Home"
import Store from "./pages/Store"
import About from "./pages/About"
import {ShoppingCartProvider} from "./context/shoppingCartContext"






export default function App() {
  return (
    <>
    	<ShoppingCartProvider>
    		<NavBar />
   	 		<Container className="mb-4">
    			<Routes>
       	 		<Route path="/" element={<Home />} />
       	 		<Route path="/store" element={<Store />} />
        		<Route path="/about" element={<About />} />
        
      		</Routes>
    		</Container>
      </ShoppingCartProvider>
    </>
  )
}