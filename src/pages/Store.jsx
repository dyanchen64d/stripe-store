import { Row, Col } from 'react-bootstrap';
import { products } from '../productsStore';
import ProductCard from '../components/ProductCard';

const Store = () => {
  return (
    <>
      <h1 align="center" className="p-3">
        Welcome to the store!
      </h1>
      <Row xs={1} md={3} className="g-4">
        {products.map((item) => (
          <Col align="center" key={item.id}>
            <ProductCard product={item} />
          </Col>
        ))}
      </Row>
    </>
  );
};

export default Store;
