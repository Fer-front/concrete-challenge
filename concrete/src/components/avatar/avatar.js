
import './avatar.scss'


const map = {
    small: 'avatar--small',
    medium: 'avatar--medium',
    large: 'avatar--large',
    xlarge: 'avatar--xlarge',
}

function avatar (props) {
    return (
        <div className="d-inline-block">
            <figure className={map[props.size] || 'avatar--small'}>
                <img 
                    src={props.url} 
                    alt={props.alt} 
                    className={`avatar__img `} 
                    />
            </figure>
        </div>
    ) 
}

export default avatar