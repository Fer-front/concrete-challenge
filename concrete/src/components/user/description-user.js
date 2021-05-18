function descriptionUser(props) {
    // props: data

    console.log('valor data descriptionUser ===>', props.data)

    return (
        <article className="description-user d-flex mb-5">
            <figure className="description-user__thumb mr-4">
                <img src={props.data.user.avatar} alt="avatar" className="description-user__thumb-img" />
            </figure>

            <div className="description-user__content">
                <header className="description-user__content-user">
                    <h2 className="description-user__content-user-name titulo titulo--small text-uppercase">
                        {props.data.user.nickName}
                    </h2>
                    <span className="description-user__content-user-email pb-4">
                        {props.data.user.email}
                    </span>
                </header>

                <div className="description-user__content-bio">
                    <p className="description-user__bio font--light font--error">
                        {props.data.user.bio}
                    </p>
                </div>

                <div className="description-user__content-links d-flex ">
                    <div className="description-user__link mr-5 d-flex align-items-center">
                        <a href="/">Perfil</a>
                    </div>

                    <div className="description-user__link mr-5 d-flex align-items-center">
                        <a href="/">Repositório</a>
                        <span className="badge badge-success ml-2">{props.data.respository.total}</span>
                    </div>

                    <div className="description-user__link mr-5 d-flex align-items-center">
                        <a href="/">Seguidores</a>
                        <span className="badge badge-success ml-2">{props.data.user.followers}</span>
                    </div>

                    <div className="description-user__link mr-5 d-flex align-items-center">
                        <a href="/sobre">Seguindo</a>
                        <span className="badge badge-success ml-2">{props.data.user.following}</span>
                    </div>
                </div>
            </div>
        </article>
    )
}

export default descriptionUser