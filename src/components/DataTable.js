import React, { useState } from 'react'
import { Button, Grommet, Box, Collapsible } from 'grommet'
import { Notification } from 'grommet-icons'

const customTheme = {
  button: {
    width: "20px",
    border: {
      radius: '50px',
      color: '#B721FF'
    },
    primary: {
      color: "#ffd602"
    }
  }
};

const defaultData = [
  {
    "id": "1",
    "name": "name1",
    "occupation": "student"
  }, {
    "id": "2",
    "name": "name2",
    "occupation": "engineer"
  }, {
    "id": "3",
    "name": "name3",
    "occupation": "doctor"
  },
]

const DataTable = () => {
  const [isAuthorized, setAuthorize] = useState(false)
  const [data, setData] = useState(defaultData)

  return (
    <Grommet theme={customTheme}>
      <Button style={{ width: '200px' }} primary icon={<Notification />} label="Load Data" hoverIndicator onClick={() => { setAuthorize(!isAuthorized) }} />
      <Collapsible direction="vertical" open={isAuthorized}>
        <Box flex
          width='medium'
          background='light-2'
          elevation='small'
          align='center'
          justify='center'>
          <ul>
            {data.map(i => (
              <li>{i.name}</li>
            ))}
          </ul>
        </Box>
      </Collapsible>
    </Grommet>
  )
}

export default DataTable

