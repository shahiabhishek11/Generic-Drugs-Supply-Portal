import { useState } from "react";
import { Container, Row, Col, Form, Button } from "react-bootstrap";

const UpdateStockForm = ({ products, fetchStock }) => {
  let formData = {
    "psid": 0,
    "qty": 0
  }
  const [form, setForm] = useState(formData);
  const [updated, setUpdated] = useState()
  const onInputChange = e => {
    setForm({ ...form, [e.target.name]: parseInt(e.target.value) })
  }
  const onSubmit = (e) => {
    e.preventDefault();
    setUpdated(false)
    const requestOptions = {
      method: 'PUT',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({qty: form.qty})
    };
    fetch(`http://localhost:8080/productstock/${form.psid}`, requestOptions)
    .then(res => {
      if(res.ok){
        fetchStock()
        setUpdated(true)
      }
    })
  }
  return (
    <Container>
      <Row className="justify-content-md-center">
        <Col md="auto">
          <h2>
            <strong>Update stock</strong>
          </h2>
        </Col>
      </Row>
      {updated &&
      <Row className="justify-content-md-center">
      <Col md="auto">
        <h2>
          <strong>Stock updated.....</strong>
        </h2>
      </Col>
    </Row>
      }
      <Row>
        <Col>
          <Form>
            <Form.Group className="mb-3" controlId="formBasicEmail">
              <Form.Label>Select Product</Form.Label>
              <Form.Select name="psid" onChange={onInputChange}>
                <option>Please select product</option>
                {
                  products.map((stock, i) => <option key={i} value={stock.psid}>{stock.product.pname}</option>)
                }
              </Form.Select>
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicPassword">
              <Form.Label>Quantity</Form.Label>
              <Form.Control type="number" min={0} name="qty" placeholder="Enter quantity" onChange={onInputChange}/>
            </Form.Group>
            <Button variant="primary" type="submit"
            disabled={form.psid === 0 || form.qty===0}
            onClick={onSubmit}
            >
              Update
            </Button>
          </Form>
        </Col>
      </Row>
    </Container>
  )
}

export default UpdateStockForm;