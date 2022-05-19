import { Card, CardImg } from 'react-bootstrap';

const Product = ({ product }: any) => {
  return (
    <Card className='rounded my-3 p-3'>
      <a href={`/product/${product._id}`}>
        <CardImg src={product.image} variant='top'></CardImg>
      </a>

      <Card.Body>
        <a href={`/product/${product._id}`}>
          <Card.Title as='div'>
            <strong>{product.name}</strong>
          </Card.Title>
        </a>
      </Card.Body>

      <Card.Text as='div'>
        <div className='my-3'>
          {product.rating} from {product.numReviews} Reviews
        </div>
      </Card.Text>
      <Card.Text as='h3'>${product.price}</Card.Text>
    </Card>
  );
};

export default Product;
