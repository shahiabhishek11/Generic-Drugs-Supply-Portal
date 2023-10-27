import {Table, Button} from "react-bootstrap"

const OrdersList = ({orders, ordersType="", deliverOrder}) => {
    return (
       <Table striped bordered hover>
  <thead>
    <tr>
      <th>Name</th>
      <th>Order ID</th>
      <th>Address</th>
      <th>Amount</th>
      <th>Contact</th>
      {ordersType === "ready" ? <th></th> : <th>Order Status</th>}
    </tr>
  </thead>
  <tbody>
    {
        orders.map((o) => {
            let cust = o.customer
            return(
                <tr key={o.oid}>
                    <td>{cust.fname} {cust.lname}</td>
                    <td>{o.oid}</td>
                    <td>{cust.area}, {cust.city}, {cust.pincode}</td>
                    <td>{o.price}</td>
                    <td>{cust.contact}</td>
                    {ordersType === "ready" ? 
                        <th>
                            <Button
                                variant="primary"
                                onClick={() => deliverOrder(o.oid)}
                            > Delivered
                            </Button>
                        </th>
                        :
                        <th>{o.ostatus}</th>
                    }
                </tr>
            )
        })
    }
  </tbody>
</Table>
    )
}

export default OrdersList