import React, { setState, useState } from 'react'
import PropTypes from 'prop-types'

const DataButtons = props => {
  const { inputs, setInputs, data, setUpdateData } = props
  const [isUpdated, setIsUpdated] = useState(false)

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

  return (
    <div className="d-flex justify-content-center">
      <button className="btn btn-success" type="button" id="btn-create" onClick={handleCreateData}>Create</button>
      <button className="btn btn-primary" type="button" id="btn-read">Read</button>
      <button className="btn btn-warning" type="button" id="btn-update" disabled>Update</button>
      <button className="btn btn-danger" type="button" id="btn-delete" onClick={handleDeleteAll}>Delete All</button>
    </div>
  )
}

export default DataButtons