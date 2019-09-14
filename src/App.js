import React from 'react';
import { Grommet } from 'grommet'
import './index.scss';
import DataTable from './components/DataTable'

const theme = {
  global: {
    colors: {
      'main': '#ffd602',
      'sub': '#B721FF'
    },
    font: {
      // size: '40px',
      // family: ''
    },
    hover: {
      dark: '#B721FF'
    }
  }
}
function App() {
  return (
    <Grommet theme={theme}>
      <DataTable />
    </Grommet>
  );
}

export default App;
