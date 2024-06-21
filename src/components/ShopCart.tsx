import {Offcanvas, Stack } from "react-bootstrap";
import {CartItem} from "../components/CartItem" ;
import {useShopCart} from "../context/shoppingCartContext";
import {formatCurrency} from "../utils/formatCurrency";
import storeItems from "../data/store.json";
export const ShopCart = ({isOpen}: {isOpen: boolean}) => {
	const {cartItems, closeCart, cartQuantity} = useShopCart();
	return(
		<Offcanvas show={isOpen} onHide={closeCart} placement="end" className="bg-white shadow-sm">
			<Offcanvas.Header closeButton>
				<Offcanvas.Title><h1>Cart</h1></Offcanvas.Title>
			</Offcanvas.Header>
			<Offcanvas.Body>
				{cartQuantity === 0 ? (<div style={{height:"100%"}} className="d-flex justify-content-center align-items-center"><span>You have no item in your cart</span></div>): (
			<Stack gap={3}>
				{
					cartItems.map(item => {
						return <CartItem key={item.id} {...item} />
					})
				}
				<div className="ms-auto fw-bold fs-5">
					 Total:  {
						 formatCurrency(cartItems.reduce((total, cartItem) => {
							 const item = storeItems.find(i => i.id === cartItem.id)
							 return total + (item?.price || 0) * cartItem.quantity
						 }, 0))
					 }
				</div>
			</Stack>
				)}
			</Offcanvas.Body>
		</Offcanvas>
	)
}