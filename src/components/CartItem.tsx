import storeItems from "../data/store.json";
import {formatCurrency} from "../utils/formatCurrency";
import {useShopCart} from "../context/shoppingCartContext";
import {Stack, Button} from "react-bootstrap";
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
			<img src={item.imgUrl} width="110px" height= "75px" style={{objectFit: "cover"}} />
			<div className="me-auto">
				<div>{item.name} {" "}{quantity > 1 && (<span className="text-muted" style={{fontSize: "0.65rem"}}>x{quantity}</span>
																							 )}</div>
				<div className="text-muted" style={{fontSize: "0.75rem"}}>{formatCurrency(item.price)}</div>
			</div>
			<div>
				{formatCurrency(item.price * quantity)}
			</div>
			<Button variant="outline-danger" onClick={() => removeItem(item.id)}>&times;</Button>
		</Stack>
	)
}