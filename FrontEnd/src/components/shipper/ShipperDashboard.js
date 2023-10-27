import { Container } from "react-bootstrap";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import { Tab, Tabs } from "react-bootstrap";
import { useNavigate } from 'react-router-dom';
import { useState, useEffect } from "react";
import OrdersList from "./OrdersList";
import tempOrders from "./orders";

const ShipperDashboard = (props) => {

  const [user, setUser] = useState()
  const [orders, setOrders] = useState([])
  const [readyToShipOrders, setReadyToShipOrders] = useState([])
  const [deleveredOrders, setDeleverdOrders] = useState([])
  const [ongoingOrders, setOngoingOrders] = useState([])

  const navigate = useNavigate();

  useEffect(() => {
    let userString = sessionStorage.getItem("user")
    if (userString) {
      let u = JSON.parse(userString)
      if(u.usertype == 'shipper'){
        setUser(u)
      }else{
        navigate('/login');
      }
      
    } else {
      navigate('/login');
    }
  }, [])

  useEffect(() => {
    if (user != undefined) {
      let shopId = user.shopid
      fetch(`http://localhost:8080/shippers/${shopId}/orders`)
        .then(res => res.json())
        .then(data => setOrders(data))
    }
  }, [user])

  useEffect(() => {
    if (orders.length) {
      let rtso = orders.filter((item) => item.ostatus == "ready")
      let dlvo = orders.filter((item) => item.ostatus == "delivered")
      let oo = orders.filter((item) => !["ready", "delivered"].includes(item.ostatus))
      setReadyToShipOrders(rtso)
      setDeleverdOrders(dlvo)
      setOngoingOrders(oo)
    }
  }, [orders])

  const deliverOrder = (id) => {
    let status = {
      "pstatus": "paid",
      "ostatus": "delivered"
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
        fetch(`http://localhost:8080/shippers/${shopId}/orders`)
          .then(res => res.json())
          .then(data => setOrders(data))
      }
    })


  }



  return (
    <Container>
      <Row className="justify-content-md-center">
        <Col md="auto">
          <h2>
            <strong>Shipper Dashboard</strong>
          </h2>
        </Col>
      </Row>
      <Row className="justify-content-md-center">
        <Col md="auto">
          <Tabs
            defaultActiveKey="form1"
            id="uncontrolled-tab-example"
            className="mb-3"
          >
            <Tab eventKey="form1" title="Ready to ship">
              <OrdersList
                orders={readyToShipOrders}
                ordersType="ready"
                deliverOrder={deliverOrder}
              />
            </Tab>
            <Tab eventKey="form2" title="Delevered">
              <OrdersList orders={deleveredOrders} />
            </Tab>
            <Tab eventKey="form3" title="Ongoing">
              <OrdersList orders={ongoingOrders} />
            </Tab>
          </Tabs>
        </Col>
      </Row>
    </Container>
  );
};
export default ShipperDashboard;
