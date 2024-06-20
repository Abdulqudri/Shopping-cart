import {Offcanvas } from "react-bootstrap";
import {useShopCart} from "../context/shoppingCartContext";
export const ShopCart = ({isOpen}: {isOpen: boolean}) => {
	const {closeCart, cartQuantity} = useShopCart();
	return(
		<Offcanvas show={isOpen} onHide={closeCart} placement="end" className="bg-white shadow-sm">
			<Offcanvas.Header closeButton>
				<Offcanvas.Title><h1>Cart</h1></Offcanvas.Title>
			</Offcanvas.Header>
			<Offcanvas.Body>
				<h3>Your Cart</h3>
				{cartQuantity === 0 && (<p>You have no item in your cart</p>)}
			</Offcanvas.Body>
		</Offcanvas>
	)
}