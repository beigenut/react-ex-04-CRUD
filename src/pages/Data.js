import React from 'react'
import { FetchDataProvider } from '../contexts/FetchDataContext'
import DataContainer from '../containers/DataContainer'

const Data = () => {
  return (
    <FetchDataProvider>
      <DataContainer />
    </FetchDataProvider>
  )
}

export default Data