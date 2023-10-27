import { Container } from "react-bootstrap";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import {Tab, Tabs} from "react-bootstrap";
import { useNavigate } from 'react-router-dom';
import {useState, useEffect} from "react";
import OrdersList from './OrdersList';
import ProductStockList from './ProductStockList';
import UpdateStockForm from './UpdateStockForm';

const ShopperDashboard = (props) => {

    const [user, setUser] = useState()
    const [stock, setStock] = useState([])

    const navigate = useNavigate();

    const fetchStock = () => {
      if(user){
        fetch(`http://localhost:8080/productstock/${user.uid}`)
        .then(res => res.json())
        .then(data => setStock(data))
      }
    }
    useEffect(fetchStock, [user])

    useEffect(()=>{
        let userString = sessionStorage.getItem("user")
        if(userString){
            let u = JSON.parse(userString)
            if(u.usertype === "shopper"){
                setUser(u)
            }else{
                navigate('/login');
            }
        }else{
            navigate('/login');
        }
    },[navigate])


  return (
    <Container>
      <Row className="justify-content-md-center">
        <Col md="auto">
          <h2>
            <strong>Shopper Dashboard</strong>
          </h2>
        </Col>
      </Row>
      <Row>
        <Col md="auto">
          <Tabs
            defaultActiveKey="form1"
            id="uncontrolled-tab-example"
            className="mb-3"
          >
            <Tab eventKey="form1" title="Ongoing Orders">
              <OrdersList user={user}/>
            </Tab>
            <Tab eventKey="form2" title="Product Stock">
                <ProductStockList products={stock}/>
            </Tab>
            <Tab eventKey="form3" title="Update Stock">
              <UpdateStockForm products={stock} fetchStock={fetchStock}/>
            </Tab>
          </Tabs>
        </Col>
      </Row>
    </Container>
  );
};
export default ShopperDashboard;
