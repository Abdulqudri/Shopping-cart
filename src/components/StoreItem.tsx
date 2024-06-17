type StoreItemProps = {
	id: number;
	name: string;
	price: number;
	imgUrl: string;
}
import {Card} from "react-bootstrap";

export const StoreItem = ({id, name,price, imgUrl}:StoreItemProps) => {
	return (<>
			<Card>
				<Card.Img variant="top" src={imgUrl} height="200px" style={{ objectFit: "cover"}} />
			</Card>
		
	</>)
}