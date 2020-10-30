import React from 'react'

export default function NameForm() {
    return (
        <>
        <Modal
            open={open}
            onClose={handleClose}
            aria-labelledby="simple-modal-title"
            aria-describedby="simple-modal-description"
            >
            {body}
        </Modal> 
        </>
    )
}
