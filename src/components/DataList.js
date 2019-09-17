import React, { useContext } from 'react'
import { FetchDataContext } from '../contexts/FetchDataContext'
import DataItems from './DataItems'

const DataList = () => {
  const [data, setUpdateData] = useContext(FetchDataContext)

  const handleDeleteData = sku => {
    const newData = data.filter(i => i.sku !== sku)
    setUpdateData(newData)
    alert('Deleted')
  }

  return (
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
          {data.length > 0 ?
            data.map(i => (
              <DataItems key={i.sku} sku={i.sku} productName={i.productName} price={i.price} seller={i.seller} onDelete={handleDeleteData}></DataItems>
            )) :
            <p className="notfound">There's no data</p >
          }
        </tbody>
      </table>
    </div>
  )
}

export default DataList