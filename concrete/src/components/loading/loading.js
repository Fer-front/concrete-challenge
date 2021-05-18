import { FaSpinner } from 'react-icons/fa'
import './loading.scss'

function Loading (props) {
    
    const isAbsolute = props.position === 'absolute' ? 'loading--absolute' : ''
    
    const template = (
        <div className={ isAbsolute ? 'loading__background' : '' }>
            <FaSpinner className={`loading loading--animated ${isAbsolute}`}/>
        </div>
    )

    return props.visible ? template : null
}

export default Loading