type StoreItemProps = {
	id: number;
	name: string;
	price: number;
	imgUrl: string;
}
import {Card, Button} from "react-bootstrap";
import {formatCurrency} from "../utils/formatCurrency";
import {useShopCart} from "../context/shoppingCartContext";

export const StoreItem = ({id, name,price, imgUrl}:StoreItemProps) => {
	const { getItemQuantity, increaseItemQuantity, decreaseItemQuantity, removeItem } = useShopCart();
	let quantity = getItemQuantity(id);
	return (<>
			<Card className="h-100">
				<Card.Img variant="top" src={imgUrl} height="200px" style={{ objectFit: "cover"}} />
				<Card.Body className="d-flex flex-column">
					<Card.Title className="d-flex justify-content-between align-items-baseline mb-4">
						<span className="fs-2">{name}</span>
						<span className="ms-2 text-muted" style={{fontSize:"0.95rem"}}>{formatCurrency(price)}</span>
					</Card.Title>
					<div className="mt-auto">
						{
							quantity === 0 ? (
								<Button variant="primary" className="w-100" onClick={() => increaseItemQuantity(id)} >
									+Add to Cart
								</Button>
							): <div className="d-flex align-items-center flex-column" style={{gap:"0.5rem"}}>
								<div className="d-flex align-items-center justify-content-center" style={{gap:"0.5rem"}}>
									<Button onClick={() => increaseItemQuantity(id)}>+</Button>
									<div>
										<span className="fs-3">{quantity} </span> In Cart
									</div>
									<Button onClick={() => decreaseItemQuantity(id)}>-</Button>
								</div>
								<Button variant="danger" size="sm" onClick={() => removeItem(id)}  >Remove</Button>
							</div>
						}
					</div>
				</Card.Body>
			</Card>
		
		</>)
}


