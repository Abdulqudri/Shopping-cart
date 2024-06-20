import storeItems from "../data/store.json";
import {useShopCart} from "../context/shoppingCartContext";
import {Stack} from "react-bootstrap";
type CartItemProp = {
	id: number;
	quantity: number;
}
export const CartItem = ({id, quantity}: CartItemProp) => {
	const {removeItem } = useShopCart();
	const item = storeItems.find(item => item.id === id)
	if (item == null) return null;
	return (
		<Stack direction="horizontal" gap={2} className="d-flex align-items-center">
			<img src={item.imgUrl} width="125px"height= "75px" style={{objectFit: "cover"}} />
			<div className="me-auto">
				<div>{item.name} {quantity > 1 && (<span className="text-muted" style={{fontSize: "0.65rem"}}>x{quantity}</span>
																							 )}</div>
			</div>
		</Stack>
	)
}