import {Row, Col} from "react-bootstrap";
import Items from "../data/store.json";
import {StoreItem} from '../components/StoreItem';

const Store = () => {
	return (
		<>
			<h1>Store</h1>
			<Row md={2} xs={1} lg={3} className="g-3">
				{Items.map((item) =>{
					return <Col key={item.id}>
						<StoreItem {...item} />
					</Col>
				})}
			</Row>
		</>
	)
}
export default Store;