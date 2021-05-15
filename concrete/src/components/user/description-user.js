function descriptionUser(props) {
    // props: data

    const { data } = props

    return (
        <article className="description-user d-flex mb-5">
            <figure className="description-user__thumb mr-4">
                <img src={data.user.avatar} alt="" className="description-user__thumb-img" />
            </figure>

            <div className="description-user__content">
                <header className="description-user__content-user">
                    <h2 className="description-user__content-user-name titulo titulo--small text-uppercase">
                        {data.user.nickName}
                    </h2>
                    <span className="description-user__content-user-email pb-4">
                        {data.user.email}
                    </span>
                </header>

                <div className="description-user__content-bio">
                    <p className="description-user__bio font--light font--error">
                        {data.user.bio}
                    </p>
                </div>

                <div className="description-user__content-links d-flex ">
                    <div className="description-user__link mr-5 d-flex align-items-center">
                        <a href="/">Perfil</a>
                        <span className="badge badge-success ml-2">100</span>
                    </div>

                    <div className="description-user__link mr-5 d-flex align-items-center">
                        <a href="/">Repositório</a>
                        <span className="badge badge-success ml-2">{data.respository.total}</span>
                    </div>

                    <div className="description-user__link mr-5 d-flex align-items-center">
                        <a href="/">Seguidores</a>
                        <span className="badge badge-success ml-2">{data.user.followers}</span>
                    </div>

                    <div className="description-user__link mr-5 d-flex align-items-center">
                        <a href="/sobre">Seguindo</a>
                        <span className="badge badge-success ml-2">{data.user.following}</span>
                    </div>
                </div>
            </div>
        </article>
    )
}

export default descriptionUser