import React from 'react'
import Button from './Button'
import "../styles/EditModal.css"

const EditModal = ({edit, close, data, change, update}) => {
    return (
        <div>
        {edit === true ? 
            <div className='modal-container'>
                <div className='modal-box'>
                    <h3>Edit</h3>
                    <div className='input'>
                        <input type="text" value={data.title} onChange={change} />
                    </div>
                    <div className='btn-group'>
                        <Button text="ok" variant="primary" action={update} />
                        <Button text="cancel" variant="warning" action={close} />
                    </div>
                </div>
            </div>
            : null
        }
        </div>
    )
}

export default EditModal
