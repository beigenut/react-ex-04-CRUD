import React, { useContext } from 'react'
import { Form, Col } from 'react-bootstrap'
import { Trash, Close } from 'grommet-icons'
import { FetchDataContext } from '../contexts/FetchDataContext'

const DataItems = (props) => {
  const { sku, productName, price, assignee, createdDate, lastUpdated } = props
  const [data, setUpdateData, inputs, setInputs, isUpdated, setIsUpdated, tempUpdates, setTempUpdates] = useContext(FetchDataContext)

  function handleTimeStamp() {
    let current_datetime = new Date()
    let formatted_date = (current_datetime.getMonth() + 1) + "-" + current_datetime.getDate() + "-" +
      current_datetime.getFullYear() + " " + current_datetime.getHours() + ":" + current_datetime.getMinutes() + ":" + current_datetime.getSeconds()
    return formatted_date
  }

  const handleDeleteData = sku => {
    const deletedData = data.filter(i => i.sku !== sku)
    setUpdateData(deletedData)
  }

  const handleDataChange = (sku, e) => {
    const temp = tempUpdates.map((i) => {
      if (sku !== i.sku) return i;
      return { ...i, [e.target.name]: e.target.value, lastUpdated: handleTimeStamp() }
    })
    setTempUpdates(temp)
    e.target.style.backgroundColor = '#ffc107'
  }

  const handleBlankString = (e) => {
    e.target.nextElementSibling.value = ''
    e.target.nextElementSibling.focus()
  }

  const usdFormatter = new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'USD',
    minimumFractionDigits: 2
  })

  return (
    < tr >
      <td>
        <Form>
          <Form.Group controlId="skuForm">
            <Col xs>
              {<Form.Control plaintext readOnly defaultValue={sku} />}
            </Col>
          </Form.Group>
        </Form>
      </td>
      <td>
        <Form>
          <Form.Group controlId="productNameForm">
            <Col xs>
              {isUpdated ? <><Close onClick={handleBlankString} size="small" color="#fff" /> <Form.Control name="productName" onChange={e => handleDataChange(sku, e)} defaultValue={productName} /></> : <Form.Control name="productName" plaintext readOnly defaultValue={productName} />}
            </Col>
          </Form.Group>
        </Form>
      </td>
      <td>
        <Form>
          <Form.Group controlId="assigneeForm">
            <Col xs>
              {isUpdated ? <><Close onClick={handleBlankString} size="small" color="#fff" /><Form.Control onChange={e => handleDataChange(sku, e)} name="assignee" defaultValue={assignee} /></> : <Form.Control name="assignee" plaintext readOnly defaultValue={assignee} />}
            </Col>
          </Form.Group>
        </Form>
      </td>
      <td>
        <Form>
          <Form.Group controlId="priceForm">
            <Col xs>
              {isUpdated ? <><Close onClick={handleBlankString} size="small" color="#fff" /><Form.Control name="price" onChange={e => handleDataChange(sku, e)} defaultValue={price} /></> : <Form.Control name="price" plaintext readOnly defaultValue={usdFormatter.format(price)} />}
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
      <td>
        <Form>
          <Form.Group controlId="lastUpdated">
            <Col xs className="created-date__div">
              {lastUpdated}
            </Col>
          </Form.Group>
        </Form>
      </td>
      <td><Trash onClick={e => handleDeleteData(sku)} /></td>
    </tr >
  )
}

export default DataItems