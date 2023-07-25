import { useState } from 'react'
import Modal from './Modal'

const RenderModal = () => {
  const [show, setShow] = useState(false)

  return (
    <div>
       <button onClick={() => setShow(true)}>open modal</button>

      {show && (
        <Modal closeOnClick={() => setShow(false)}>
         <p> I am opened as a modal</p>

          <button onClick={() => setShow(false)}>close me</button>
        </Modal>
      )}
    </div>
  )
}

export default RenderModal