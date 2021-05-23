import './search-user.scss'

import URL_ICON from '../../constants/icons'

import Button from '../../components/button/button'

function SearchUser (props) {
    return (
        <section className="search-user d-flex justify-content-center flex-column align-items-center">
            <figure className="search-user__icon-github">
                <img src={URL_ICON.GIT_HUB} alt="icone github" />
            </figure>

            <header className="search-user-header">
                <h1 className="search-user__title">Buscar usuário</h1>
            </header>

            <input
                onChange={props.inputChange}
                type="text"
                className="search-user__input-search p-2 text-center border rounded"
            />

            <div className="mt-4">
                <Button
                    label="buscar"
                    type='success'
                    outline='true'
                    onClick={props.btnSubmit}
                />
          </div>
        </section>
    )
}

export default SearchUser