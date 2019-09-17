import React, { useContext } from 'react'
import { FetchDataContext } from '../contexts/FetchDataContext'

import PageHeader from '../components/PageHeader'
import DataForm from '../components/DataForm'
import DataButtons from '../components/DataButtons'
import DataList from '../components/DataList'

const DataTable = () => {
  const [data, setUpdateData, inputs, setInputs, isUpdated, setIsUpdated] = useContext(FetchDataContext)

  return (
    <div className="container text-center">
      <PageHeader />
      <DataForm inputs={inputs} setInputs={setInputs} />
      <DataButtons />
      <DataList />
    </div>
  )
}

export default DataTable

