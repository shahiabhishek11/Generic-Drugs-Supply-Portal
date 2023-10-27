import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import { Container } from "react-bootstrap";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import {Link} from "react-router-dom";

const LoginForm = (props) => {
  return (
    <Container>
      <Row className="justify-content-md-center">
      <Col md="auto">
          <h2><strong>Welcome to Generic Medicine Portal</strong></h2>
          </Col>
      </Row>
      <Row className="justify-content-md-center">
        <Col md="auto">
          <Form>
            <Form.Group className="mb-3" controlId="formBasicEmail">
              <Form.Label>Email address</Form.Label>
              <Form.Control type="email" placeholder="Enter email" />
              <Form.Text className="text-muted">
                We'll never share your email with anyone else.
              </Form.Text>
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicPassword">
              <Form.Label>Password</Form.Label>
              <Form.Control type="password" placeholder="Password" />
            </Form.Group>
            <Button variant="primary" type="submit">
              Submit
            </Button>
            <Link to="/register">Register</Link>
          </Form>
        </Col>
      </Row>
    </Container>
  );
};
export default LoginForm;
