import React from 'react'
import { Form, Col } from 'react-bootstrap'
import { Edit, Trash } from 'grommet-icons'

const DataItems = (props) => {
  const { sku, productName, price, seller, onDelete } = props
  return (
    < tr >
      <td>
        <Form>
          <Form.Group controlId="skuForm">
            <Col sm="10">
              <Form.Control plaintext readOnly defaultValue={sku} />
            </Col>
          </Form.Group>
        </Form>
      </td>
      <td>
        <Form>
          <Form.Group controlId="productNameForm">
            <Col sm="10">
              <Form.Control plaintext readOnly defaultValue={productName} />
            </Col>
          </Form.Group>
        </Form>
      </td>
      <td>
        <Form>
          <Form.Group controlId="sellerForm">
            <Col sm="10">
              <Form.Control plaintext readOnly defaultValue={seller} />
            </Col>
          </Form.Group>
        </Form>
      </td>
      <td>
        <Form>
          <Form.Group controlId="priceForm">
            <Col sm="10">
              <Form.Control plaintext readOnly defaultValue={price} />
            </Col>
          </Form.Group>
        </Form>
      </td>
      <td><Edit /></td>
      <td><Trash onClick={e => onDelete(sku)} /></td>
    </tr >
  )
}

export default DataItems