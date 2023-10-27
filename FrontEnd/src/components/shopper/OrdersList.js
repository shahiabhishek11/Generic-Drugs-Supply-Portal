import { useEffect, useState } from "react";
import { Container, Row, Col } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import OrderCard from './OrderCard';
import tempOrders from './orders';

const OrdersList = ({ user }) => {

  const [orders, setOrders] = useState([])

  const markOrderReady = (id) => {
    let status = {
      "pstatus": "cod",
      "ostatus": "ready"
    }
    const requestOptions = {
      method: 'PUT',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(status)
    };
    fetch(`http://localhost:8080/shippers/orders/${id}`, requestOptions)
      .then(res => {
        if (res.ok) {
          let shopId = user.shopid
          fetch(`http://localhost:8080/shippers/${user?.uid}/orders`)
            .then(res => res.json())
            .then(data => {
              let o = data.filter(order => order.ostatus === 'pending')
              setOrders(o)
            })
        }
      })


  }

  useEffect(() => {
    if (user) {
      fetch(`http://localhost:8080/shippers/${user?.uid}/orders`)
        .then(res => res.json())
        .then(data => {
          let o = data.filter(order => order.ostatus === 'pending')
          setOrders(o)
        })
    }
  }, [user])

  return (
    <Container>
      <Row>
        {
          orders.map((order, i) => {
            return (
              <Col key={i} md={4}>
                <OrderCard order={order} markOrderReady={markOrderReady} />
              </Col>
            )
          })
        }
      </Row>
    </Container>
  )
}

export default OrdersList