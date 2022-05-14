import React from 'react'

const LayoutContainer = (props) => {
  return (
    <div className='layout-container'>
        {props.children}
    </div>
  )
}

export default LayoutContainer