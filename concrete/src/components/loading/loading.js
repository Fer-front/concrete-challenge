import { GoSync } from 'react-icons/go'
import './loading.scss'

function Loading (props) {
    
    const isAbsolute = props.position === 'absolute' ? 'loading--absolute' : ''
    
    const template = (
        <div className={ isAbsolute ? 'loading__background' : '' }>
            <GoSync className={`loading loading--animated ${isAbsolute}`}/>
        </div>
    )

    return props.visible ? template : null
}

export default Loading