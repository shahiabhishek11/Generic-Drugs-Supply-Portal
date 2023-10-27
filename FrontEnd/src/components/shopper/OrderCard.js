import {Card, Button} from 'react-bootstrap';

const OrderCard = ({order, markOrderReady}) => {
    let user = order.customer

    return (
        <Card style={{ width: '18rem' }}>
  <Card.Body>
    <Card.Title>#{order.oid} - {user.fname} {user.lname}</Card.Title>
    <Card.Subtitle className="mb-2 text-muted">{user.contact}</Card.Subtitle>
     <ol>
        {
          order.orderItemList.map((o, i) => {
            return <li key={i}>{o.product.pname} - {o.qty}</li>
          })
        }
     </ol>
    <Button variant="primary" onClick={() => markOrderReady(order.oid)}>Mark as Ready</Button>
  </Card.Body>
</Card>
    )
}

export default OrderCard;