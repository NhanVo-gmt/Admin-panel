import React from 'react'
import C01SimpleHelloWorldModal from './components/C01SimpleHelloWorldModal'
import C02ShowImageModal from './components/C02ShowImageModal'

const ModalPage = () => {
  return (
    <div className='bg-white rounded-lg mx-4 p-4'>
        <h1>This is Model page</h1>
        <br />
        <br />
        <br />
        <C01SimpleHelloWorldModal />
        <C02ShowImageModal/>
    </div>
  )
}

export default ModalPage