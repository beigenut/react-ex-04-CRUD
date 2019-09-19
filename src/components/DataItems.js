import React, { useContext } from 'react'
import { Form, Col } from 'react-bootstrap'
import { Trash, Close } from 'grommet-icons'
import { FetchDataContext } from '../contexts/FetchDataContext'

const DataItems = (props) => {
  const { sku, productName, price, seller, createdDate } = props
  const [data, setUpdateData, inputs, setInputs, isUpdated, setIsUpdated] = useContext(FetchDataContext)

  const handleDeleteData = sku => {
    const newData = data.filter(i => i.sku !== sku)
    setUpdateData(newData)
    alert('Deleted')
  }

  const handleDataChange = (e) => {
    e.target.style.backgroundColor = '#ffc107'
  }

  const handleBlankString = (e) => {
    e.target.nextElementSibling.value = ''
    e.target.nextElementSibling.focus()
  }

  return (
    < tr >
      <td>
        <Form>
          <Form.Group controlId="skuForm">
            <Col xs>
              {isUpdated ? <><Close onClick={handleBlankString} size="small" color="#fff" /> <Form.Control onChange={handleDataChange} defaultValue={sku} /></> : <Form.Control plaintext readOnly defaultValue={sku} />}
            </Col>
          </Form.Group>
        </Form>
      </td>
      <td>
        <Form>
          <Form.Group controlId="productNameForm">
            <Col xs>
              {isUpdated ? <><Close onClick={handleBlankString} size="small" color="#fff" /> <Form.Control onChange={handleDataChange} defaultValue={productName} /></> : <Form.Control plaintext readOnly defaultValue={productName} />}
            </Col>
          </Form.Group>
        </Form>
      </td>
      <td>
        <Form>
          <Form.Group controlId="sellerForm">
            <Col xs>
              {isUpdated ? <><Close onClick={handleBlankString} size="small" color="#fff" /><Form.Control onChange={handleDataChange} defaultValue={seller} /></> : <Form.Control plaintext readOnly defaultValue={seller} />}
            </Col>
          </Form.Group>
        </Form>
      </td>
      <td>
        <Form>
          <Form.Group controlId="priceForm">
            <Col xs>
              {isUpdated ? <><Close onClick={handleBlankString} size="small" color="#fff" /><Form.Control onChange={handleDataChange} defaultValue={price} /></> : <Form.Control plaintext readOnly defaultValue={price} />}
            </Col>
          </Form.Group>
        </Form>
      </td>
      <td>
        <Form>
          <Form.Group controlId="createdDate">
            <Col xs className="created-date__div">
              {createdDate}
            </Col>
          </Form.Group>
        </Form>
      </td>
      <td><Trash onClick={e => handleDeleteData(sku)} /></td>
    </tr >
  )
}

export default DataItems