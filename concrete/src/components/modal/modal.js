import './modal.scss'

import { BsXCircleFill } from 'react-icons/bs'




function Modal(props) {

    const SIZES = {
        large: 'Modal--large',
        full: 'Modal--full',
    }

    const sizeDefined = SIZES[props.size] || ''

    const template = (
        <section id={props.title} className={`Modal ${sizeDefined}`}>
            <header className="px-3 header d-flex justify-content-between align-items-center">
                <h2 className="">{props.title}</h2>

                <BsXCircleFill
                    className="header__close"
                />

            </header>

            <div className="body px-3">
                {props.body}
            </div>

            <div className="footer px-3">
                {props.footer}
            </div>
        </section>
    )

    return props.show ? template : null
}

export default Modal