import './button.scss'

const MAP_TYPES = {
    primary: '--primary',
    success: '--success',
    error: '--error',
    infor: '--infor',
    alert: '--alert',
    disabled: '--disabled',
}

function composeClassCss(type = false, outline = false) {
    const _type = MAP_TYPES[type] || ''

    return outline 
        ? `g-btn g-btn__outline${_type}`
        : `g-btn g-btn${_type}` 
}

function Button (props) {
    const _class = composeClassCss(props.type, props.outline)

    return (
        <button 
            onClick={()=> (props.onClick())}
            className={_class}>{props.label}</button>
    )
}

export default Button