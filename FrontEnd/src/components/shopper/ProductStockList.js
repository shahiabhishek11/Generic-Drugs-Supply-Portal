import {Table} from "react-bootstrap"

const ProductStockList = ({products}) => {
    return (
       <Table striped bordered hover>
  <thead>
    <tr>
      <th>Sr.</th>
      <th>Product ID</th>
      <th>Product Name</th>
      <th>Description</th>
      <th>Quantity</th>
    </tr>
  </thead>
  <tbody>
    {
      products.map((stock, i) => {
        return (
          <tr key={i}>
            <td>{i+1}</td>
            <td>{stock.product.pid}</td>
            <td>{stock.product.pname}</td>
            <td>{stock.product.p_desc}</td>
            <td>{stock.qty}</td>
          </tr>
        )
      })
    }
  </tbody>
</Table>
    )
}

export default ProductStockList;