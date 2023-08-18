import { useState } from 'react'
import Modal from './Modal'
import Button from './Button'

const RenderModal = () => {
  const [show, setShow] = useState(false)

  return (
    <div>
       <Button onClick={() => setShow(true)}>open modal</Button>

      {show && (
        <Modal closeOnClick={() => setShow(false)}>
         <p> I am opened as a modal</p>

          <Button onClick={() => setShow(false)}>close me</Button>
        </Modal>
      )}
    </div>
  )
}

export default RenderModal