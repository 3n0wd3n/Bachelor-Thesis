import React from 'react'
import { WrapperStyled } from './Assurance.style'
import { FaWindowClose } from 'react-icons/fa'

export default function Assurance({ warning }) {
    const [hide, setHide] = React.useState(false)


    return (
        <WrapperStyled hidden={hide}>
            {warning}
            <div onClick={() => setHide(true)}>
                <FaWindowClose />
            </div>
        </WrapperStyled>
    )
}
