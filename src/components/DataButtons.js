import React, { useContext, useState } from 'react'
import { FetchDataContext } from '../contexts/FetchDataContext'
import { Modal } from 'react-bootstrap';

const DataButtons = () => {
  const [data, setUpdateData, inputs, setInputs, isUpdated, setIsUpdated, tempUpdates, setTempUpdates] = useContext(FetchDataContext)
  const inputEls = document.querySelectorAll('.form-group input')

  // Modal control
  const [isModalOpen, setIsModalOpen] = useState(false)
  const handleClose = () => setIsModalOpen(false);
  const handleShow = () => setIsModalOpen(true);

  function handleTimeStamp() {
    let current_datetime = new Date()
    let formatted_date = (current_datetime.getMonth() + 1) + "-" + current_datetime.getDate() + "-" +
      current_datetime.getFullYear() + " " + current_datetime.getHours() + ":" + current_datetime.getMinutes() + ":" + current_datetime.getSeconds()
    return formatted_date
  }

  const handleCreateData = (e) => {
    let skuCnt = localStorage.getItem('sku-cnt')
    if (inputs.productName && inputs.assignee && inputs.price) {
      const inputEls = document.querySelectorAll('.create-data input')
      const timeStamp = handleTimeStamp();
      const newData = { ...inputs, "createdDate": timeStamp, "sku": skuCnt }
      setUpdateData([...data, newData])
      inputEls.forEach(i => (i.value = ''))
      setInputs({})
      localStorage.setItem('sku-cnt', Number(skuCnt) + 1)
    } else alert("Fill in the blank field(s)")
  }

  const handleDeleteAll = e => {
    setUpdateData({})
  }

  const handleEnableInputs = e => {
    // Enable input elements
    setIsUpdated(!isUpdated)
  }

  const handleUpdateItems = e => {
    // Disable inputs
    setIsUpdated(!isUpdated)
    // Update Data based on temp state
    setUpdateData(tempUpdates)
    inputEls.forEach(e => e.style.backgroundColor = 'transparent')
    // Close modal
    handleClose()
  }

  const handleCancelUpdate = e => {
    setIsUpdated(!isUpdated)
    handleClose()
  }


  return (
    <div className="d-flex justify-content-center">
      <button className="btn btn-success" type="button" onClick={handleCreateData}>Create</button>
      <button className="btn btn-primary" type="button">Read</button>
      {isUpdated ? <button className="btn btn-warning" type="button" onClick={handleShow}>Update Confrim</button> : <button className="btn btn-warning" type="button" onClick={handleEnableInputs}>Bulk Update</button>}
      <button className="btn btn-danger" type="button" onClick={handleDeleteAll}>Delete All</button>

      <Modal show={isModalOpen} onHide={handleClose}>
        <Modal.Body>Are you sure you want to update all the change?</Modal.Body>
        <Modal.Footer>
          <button className="btn btn-secondary" type="button" onClick={handleCancelUpdate}>
            Close without save
          </button>
          <button className="btn btn-warning" type="button" onClick={handleUpdateItems}>
            Yes, update all
          </button>
        </Modal.Footer>
      </Modal>
    </div>
  )
}

export default DataButtons