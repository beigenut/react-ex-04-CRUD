import React from 'react'

const DataForm = (props) => {
  const { inputs, setInputs } = props

  const handleInputChange = (e) => {
    e.persist();
    setInputs(inputs => ({ ...inputs, [e.target.name]: e.target.value }));
  }

  return (
    <div className="d-flex justify-content-center create-data">
      <form className="w-50">
        <input type="text" className="form-control" readOnly name="sku" value={localStorage.getItem('sku-cnt')} />
        <input type="text" className="form-control" placeholder="Product Name" name="productName" onChange={handleInputChange} value={inputs.productName} />
        <div className="row">
          <div className="col">
            <input type="text" className="form-control m-0" placeholder="Assignee" name="assignee" onChange={handleInputChange} value={inputs.assignee} />
          </div>
          <div className="col">
            <input type="text" className="form-control m-0" placeholder="Price" name="price" onChange={handleInputChange} value={inputs.price} />
          </div>
        </div>
      </form>
    </div>
  )
}

export default DataForm
