import React, { useState } from 'react'
import { Edit, Trash } from 'grommet-icons'

const defaultData = [
  {
    "sku": "1",
    "productName": "name1",
    "price": "13",
    "seller": "Kate"
  }, {
    "sku": "2",
    "productName": "name2",
    "price": "12",
    "seller": "Kate"
  }, {
    "sku": "3",
    "productName": "name3",
    "price": "10",
    "seller": "Kate"
  }
]

const DataTable = () => {
  const [data, setUpdateData] = useState(defaultData)
  const [inputs, setInputs] = useState({})
  const [sku, setSku] = useState('')
  const [productName, setProductName] = useState('')
  const [seller, setSeller] = useState('')
  const [price, setPrice] = useState(0)

  const handleCreateData = (e) => {
    const inputEls = document.querySelectorAll('input')
    if (inputs.sku && inputs.productName && inputs.seller && inputs.price) {
      e.preventDefault();
      setUpdateData([...data, inputs])
      inputEls.forEach(i => (i.value = ''))
      setInputs({})
    } else alert("Fill in the blank field(s)")
  }

  const handleInputChange = (e) => {
    e.persist();
    setInputs(inputs => ({ ...inputs, [e.target.name]: e.target.value }));
  }

  return (
    <React.Fragment>
      <div className="container text-center">
        <h1 className="bg-light py-4 text-info">
          Electronic Store
        </h1>
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
        <div className="d-flex justify-content-center">
          <button className="btn btn-success" type="button" id="btn-create" onClick={handleCreateData}>Create</button>
          <button className="btn btn-primary" type="button" id="btn-read">Read</button>
          <button className="btn btn-warning" type="button" id="btn-update">Update</button>
          <button className="btn btn-danger" type="button" id="btn-delete">Delete All</button>
        </div>

        <div className="d-flex table-data">
          <table className="table table-striped">
            <thead>
              <tr>
                <th scope="col">SKU</th>
                <th scope="col">Product Name</th>
                <th scope="col">Seller</th>
                <th scope="col">Price</th>
                <th scope="col">Edit</th>
                <th scope="col">Delete</th>
              </tr>
            </thead>
            <tbody id="tbody">
              {data.map(i => (
                <tr key={i.sku}>
                  <td>{i.sku}</td>
                  <td>{i.productName}</td>
                  <td>{i.seller}</td>
                  <td>{i.price}</td>
                  <td><Edit /></td>
                  <td><Trash /></td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <div id="notfound"></div>
      </div>

      <div className="w-100 btn btn-success insertmsg">Data Inserted Successfully...!</div>
      <div className="w-100 btn btn-warning updatemsg">Data Updated..! Refresh Database To See Result</div>
      <div className="w-100 btn btn-danger deletemsg">Data Deleted..!</div>
    </React.Fragment>
  )
}

export default DataTable

