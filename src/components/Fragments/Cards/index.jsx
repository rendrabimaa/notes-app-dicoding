import React, { useEffect, useState } from 'react'
import Card from '../../Elements/Card'
import NotFoundText from '../../Elements/NotFoundText'

const Cards = ({ datas }) => {
  return (
    <div className='flex flex-wrap gap-4'>
        {datas.length > 0 ? datas.map((data, index) => (
            <Card title={data.title} detail={data.body} key={index} />
        )) : <NotFoundText />}
    </div>
  )
}

export default Cards