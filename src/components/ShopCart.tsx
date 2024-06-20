import {Offcanvas, Stack } from "react-bootstrap";
import {CartItem} from "../components/CartItem" ;
import {useShopCart} from "../context/shoppingCartContext";
export const ShopCart = ({isOpen}: {isOpen: boolean}) => {
	const {cartItems, closeCart, cartQuantity} = useShopCart();
	return(
		<Offcanvas show={isOpen} onHide={closeCart} placement="end" className="bg-white shadow-sm">
			<Offcanvas.Header closeButton>
				<Offcanvas.Title><h1>Cart</h1></Offcanvas.Title>
			</Offcanvas.Header>
			<Offcanvas.Body>
				<h3>Your Cart</h3>
				{cartQuantity === 0 ? (<p>You have no item in your cart</p>): (
			<Stack gap={3}>
				{
					cartItems.map(item => {
						return <CartItem key={item.id} {...item} />
					})
				}
			</Stack>
				)}
			</Offcanvas.Body>
		</Offcanvas>
	)
}