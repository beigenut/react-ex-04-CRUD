import React from 'react'
import { Button, Grommet, Box } from 'grommet'
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


const DataTable = () => {
  return (
    <Grommet theme={customTheme}>
      <Button style={{ width: '200px' }} primary icon={<Notification />} hoverIndicator onClick={() => { }} />
    </Grommet>
  )
}

export default DataTable

