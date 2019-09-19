import React, { useContext } from 'react'
import { FetchDataContext } from '../contexts/FetchDataContext'

const DataButtons = () => {
  const [data, setUpdateData, inputs, setInputs, isUpdated, setIsUpdated, tempUpdates, setTempUpdates] = useContext(FetchDataContext)

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

  const handleIsUpdateFalse = e => {
    setIsUpdated(!isUpdated)
  }

  const handleIsUpdateTrue = e => {

    setIsUpdated(!isUpdated)
    const inputEls = document.querySelectorAll('.form-group input')
    inputEls.forEach(e => e.style.backgroundColor = 'transparent')
  }

  return (
    <div className="d-flex justify-content-center">
      <button className="btn btn-success" type="button" onClick={handleCreateData}>Create</button>
      <button className="btn btn-primary" type="button">Read</button>
      {isUpdated ? <button className="btn btn-warning" type="button" onClick={handleIsUpdateTrue}>Update All</button> : <button className="btn btn-warning" type="button" onClick={handleIsUpdateFalse}>Bulk Update</button>}
      <button className="btn btn-danger" type="button" onClick={handleDeleteAll}>Delete All</button>
    </div>
  )
}

export default DataButtons