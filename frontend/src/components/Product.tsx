import { Card, CardImg } from 'react-bootstrap';
import Rating from './Rating';
import { Link } from 'react-router-dom';

const Product = ({ product }: any) => {
  return (
    <Card className='rounded my-3 p-3'>
      <Link to={`/product/${product._id}`}>
        <CardImg src={product.image} variant='top'></CardImg>
      </Link>

      <Card.Body>
        <Link to={`/product/${product._id}`}>
          <Card.Title as='div'>
            <strong>{product.name}</strong>
          </Card.Title>
        </Link>
      </Card.Body>

      <Card.Text as='div'>
        <Rating value={product.rating} text={`${product.numReviews} Reviews`} />
      </Card.Text>
      <Card.Text as='h3'>${product.price}</Card.Text>
    </Card>
  );
};

export default Product;
