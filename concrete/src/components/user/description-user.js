import './description-user.scss'

import Avatar from '../../components/avatar/avatar'

import { BsPersonFill, BsWallet } from 'react-icons/bs'

function descriptionUser(props) {
    return (
        <article className="description-user mb-5">
            <div className="d-flex align-items-center mb-2">
                <div className="mr-3 mb-2">
                    <Avatar 
                        className='description-user__avatar'
                        url={props.data.user.avatar} 
                        size='large' 
                        alt={props.data.user.nickName}
                    />
                </div>

                <header className="description-user__content">
                    <h2 className="description-user__name titulo titulo--small text-uppercase mb-0">
                        {props.data.user.nickName}
                    </h2>
                    <span className="description-user__email">
                        <small>Email:</small> {props.data.user.email}
                    </span>
                </header>
            </div>

            <div className="description-user__data">
                <div className="my-2 mb-3">
                    <ul className="list-unstyled d-flex align-items-center justify-content-center">
                        <li className="description-user__data__item mx-2">
                            <strong className="description-user__data__item-qtd mr-1">{props.data.user.followers}</strong> - seguidores
                        </li>
                        <li className="description-user__data__item mx-2">
                            <strong className="description-user__item-qtd mr-1">{props.data.user.following}</strong> - seguindo
                        </li>
                        <li className="description-user__data__item mx-2">
                            <strong className="description-user__item-qtd mr-1">{props.data.user.followers}</strong> - starts
                        </li>
                    </ul>
                </div>

                <div className="description-user__bio">
                    <small className="description-user__bio__label">Bio:</small>

                    <p className="description-user__bio__text font--light font--error">
                        {props.data.user.bio}
                    </p>
                </div>

                <div className="d-flex flex-wrap justify-content-between">
                    <div className="description-user__links">
                        <a href="/" className="d-flex align-items-center">
                            <BsPersonFill className="mr-2"/> 
                            Perfil
                        </a>
                    </div>

                    <div className="description-user__links">
                        <a href="/repositorios" className="d-flex align-items-center">
                            <span className="mr-1">{props.data.respository.total}</span>
                            <BsWallet className="mr-2"/> 
                            Repositório
                        </a>
                    </div>
                </div>
            </div>
        </article>
    )
}

export default descriptionUser