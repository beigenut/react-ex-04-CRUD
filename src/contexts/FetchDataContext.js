import React, {
  useState,
  createContext,
  useEffect
} from 'react'

export const FetchDataContext = createContext();

export const FetchDataProvider = (props) => {
  const defaultData = [{
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
  }]
  const [data, setUpdateData] = useState([])
  const [inputs, setInputs] = useState({})
  const [isUpdated, setIsUpdated] = useState(false)

  useEffect(() => {
    setUpdateData(defaultData)
  }, [])

  return (
    <FetchDataContext.Provider value={[data, setUpdateData, inputs, setInputs, isUpdated, setIsUpdated]}>
      {props.children}
    </FetchDataContext.Provider>
  )
}