import './navBottom.scss';

function navbottom (props) {
    return (
        <section className="nav-bottom nav-bottom--fixed">
            <div className="container d-flex justify-content-around align-items-center">
                {props.children}
            </div>
        </section>
    )
}

export default navbottom