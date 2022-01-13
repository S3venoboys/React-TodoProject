import React from 'react'
import Button from './Button'

const DeleteModal = ({deleteTask, close, data, delate}) => {

    return (
        <div>
            {delate === true ?
                <div className='modal-container'>
                    <div className='modal-box'>
                        <h3>Are You Sure ?</h3>
                        <div className='btn-group'>
                            <Button text="ok" variant="primary" action={deleteTask} />
                            <Button text="cancel" variant="warning" action={close} />
                        </div>
                    </div>
                </div>
                : null
            }
        </div>
    )
}

export default DeleteModal
