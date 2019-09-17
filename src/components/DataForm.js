import React from 'react'

const DataForm = (props) => {
  const { inputs, setInputs } = props

  const handleInputChange = (e) => {
    e.persist();
    setInputs(inputs => ({ ...inputs, [e.target.name]: e.target.value }));
  }

  return (
    <div className="d-flex justify-content-center">
      <form className="w-50">
        <input type="text" id="sku" className="form-control" placeholder="SKU#" onChange={handleInputChange} name="sku" value={inputs.sku} />
        <input type="text" id="proname" className="form-control" placeholder="Product Name" name="productName" onChange={handleInputChange} value={inputs.productName} />
        <div className="row">
          <div className="col">
            <input type="text" id="seller" className="form-control m-0" placeholder="Seller" name="seller" onChange={handleInputChange} value={inputs.seller} />
          </div>
          <div className="col">
            <input type="text" id="price" className="form-control m-0" placeholder="Price" name="price" onChange={handleInputChange} value={inputs.price} />
          </div>
        </div>
      </form>
    </div>
  )
}

export default DataForm
