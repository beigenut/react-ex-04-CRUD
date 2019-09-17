import React, { useContext } from 'react'
import { FetchDataContext } from '../contexts/FetchDataContext'

const DataButtons = () => {
  const [data, setUpdateData, inputs, setInputs, isUpdated, setIsUpdated] = useContext(FetchDataContext)

  const handleCreateData = (e) => {
    const inputEls = document.querySelectorAll('input')
    if (inputs.sku && inputs.productName && inputs.seller && inputs.price) {
      e.preventDefault();
      setUpdateData([...data, inputs])
      inputEls.forEach(i => (i.value = ''))
      setInputs({})
    } else alert("Fill in the blank field(s)")
  }

  const handleDeleteAll = e => {
    setUpdateData({})
  }

  const handleIsUpdate = e => {
    setIsUpdated(!isUpdated)
    const inputEls = document.querySelectorAll('.form-group input')
    inputEls.forEach(e => e.style.backgroundColor = 'transparent')
  }

  return (
    <div className="d-flex justify-content-center">
      <button className="btn btn-success" type="button" onClick={handleCreateData}>Create</button>
      <button className="btn btn-primary" type="button">Read</button>
      {isUpdated ? <button className="btn btn-warning" type="button" onClick={handleIsUpdate}>Update All</button> : <button className="btn btn-warning" type="button" onClick={handleIsUpdate}>Bulk Update</button>}
      <button className="btn btn-danger" type="button" onClick={handleDeleteAll}>Delete All</button>
    </div>
  )
}

export default DataButtons