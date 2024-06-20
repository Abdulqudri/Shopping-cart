import { Navbar, Container, Nav , Button} from "react-bootstrap"
import { NavLink } from "react-router-dom"
import {useShopCart } from "../context/shoppingCartContext";

export const NavBar = () => {
	const {openCart, cartQuantity} = useShopCart();
	return(
		<Navbar sticky="top" className= "bg-white shadow-sm mb-3">
			<Container>
				<Nav className="me-auto">
					<Nav.Link as={NavLink} to="/">Home</Nav.Link>
					<Nav.Link as={NavLink} to="/store">Store</Nav.Link>
					<Nav.Link as={NavLink} to="/about">About</Nav.Link>
					
				</Nav>
				<Button onClick={openCart} style={{width:"3rem",height:"3rem",position:"relative"}} variant="outline-primary" className="rounded-circle">
					<svg xmlns="http://www.w3.org/2000/svg" 
						viewBox="0 0 576 512"
						fill="currentColor"
						>
					
						<path d="M0 24C0 10.7 10.7 0 24 0H69.5c22 0 41.5 12.8 50.6 32h411c26.3 0 45.5 25 38.6 50.4l-41 152.3c-8.5 31.4-37 53.3-69.5 53.3H170.7l5.4 28.5c2.2 11.3 12.1 19.5 23.6 19.5H488c13.3 0 24 10.7 24 24s-10.7 24-24 24H199.7c-34.6 0-64.3-24.6-70.7-58.5L77.4 54.5c-.7-3.8-4-6.5-7.9-6.5H24C10.7 48 0 37.3 0 24zM128 464a48 48 0 1 1 96 0 48 48 0 1 1 -96 0zm336-48a48 48 0 1 1 0 96 48 48 0 1 1 0-96z"/></svg>
					{ cartQuantity > 0 && (
					<div className="rounded-circle bg-danger d-flex justify-content-center" style={{
			color:"white",
			width:"1.5rem",
			height:"1.5rem",
			position:"absolute",
			bottom:"0",
			right:"0",
			transform:"translate(25%, 25%)"
					}}>{cartQuantity}</div>)}
				</Button>
			</Container>
		</Navbar>
	)
}
