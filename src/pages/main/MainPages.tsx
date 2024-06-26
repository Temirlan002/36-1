import React, { FC } from 'react'
import Souz from '../../components/Souz.tsx'



const MainPages:FC = () => {

    const buttonClick = () => {
        alert('Hello!')
    }

  return (
    <div>
        <Souz
            title='Souz'
            description='sfdasfsdfsdsdf'
            second_description='sdfdsfsd'
            onClick={buttonClick}
        />
    </div>
  )
}

export default MainPages;