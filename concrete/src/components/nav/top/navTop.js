import './navTop.scss';

function navTop (props) {
    // types left rigth center full
    const mapClass = {
        left: 'nav-top--left',
        right: 'nav-top--right',
        center: 'nav-top--center',
        around: 'nav-top--around',
        betweem: 'nav-top--betweem',
    }
    
    const classCss = mapClass[props.type] || 'nav-top--right'

    return (
        <section className="nav-top ">
            <div className={classCss}>
                {props.children}
            </div>
        </section>
    )
}

export default navTop