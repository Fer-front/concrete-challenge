import './boxmsg.scss'
import { BsXCircle, BsCheckCircle } from "react-icons/bs";

function composeClassCss(status) {
    return status === 'error' 
        ? 'boxmsg boxmsg--error'
        : 'boxmsg boxmsg--success'
}

function composeList(msg) {
    const isArray = Array.isArray(msg) 
    if (!isArray) return msg

    return msg.map((msg) => (<li className="boxmsg__list-item">{msg}</li>))
}

function boxmsg (props) {

    const _class = composeClassCss(props.status)
    const listRender = composeList(props.message)
    
    if (!props.visible) return null 

    return (
        <div className={`${_class} d-flex align-items-center`} >
            <div className="icon">
                { props.status === 'error' ? <BsXCircle className='boxmsg__icon'/> : <BsCheckCircle className='boxmsg__icon'/> }
            </div>
            <ul className="boxmsg__list">
                {listRender}
            </ul>
        </div>
    )
}

export default boxmsg