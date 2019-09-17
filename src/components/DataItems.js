import React from 'react'
import { Edit, Trash } from 'grommet-icons'

const DataItems = (props) => {
  const { sku, productName, price, seller, onDelete } = props
  return (
    < tr >
      <td>{sku}</td>
      <td>{productName}</td>
      <td>{seller}</td>
      <td>{price}</td>
      <td><Edit /></td>
      <td><Trash onClick={e => onDelete(sku)} /></td>
    </tr >
  )
}

export default DataItems