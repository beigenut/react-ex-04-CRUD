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
    "seller": "Kate",
    "createdDate": "Sep 18 2019"
  }, {
    "sku": "2",
    "productName": "name2",
    "price": "12",
    "seller": "Joe",
    "createdDate": "Sep 18 2019"
  }, {
    "sku": "3",
    "productName": "name3",
    "price": "10",
    "seller": "Francoise",
    "createdDate": "Sep 18 2019"
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