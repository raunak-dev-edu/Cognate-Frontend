import React from 'react'
import Sidebar from './Sidebar'
import ContentArea from './ContentArea';

const HomeContent = () => {
  return (
    <div className='homecontent'>
      <Sidebar/>
      <ContentArea/>
    </div>
  )
}

export default HomeContent
