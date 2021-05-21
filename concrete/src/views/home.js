import './home.scss'

import React from 'react'
import URL_ICON from '../constants/icons'
import debounce from '../utils/debounce'
import user from '../api/repositories/user-respository'


// COMPONENTS 
// -------------------------------------------------------
import ListUser from '../components/user/list-user'
import Loading from '../components/loading/loading'

class Home extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      usuario: [],
      loading: false,
      boxmsg: false,
    }
  }

  adapterDataListUser(response) {
    return {
      user: {
        id: response.data.id,
        name: response.data.login,
        nickName: response.data.login,
        email: response.data.email,
        avatar: response.data.avatar_url,
        bio: response.data.bio,
        followers: response.data.followers,
        following: response.data.following,
      },
      respository: {
        url: response.data.repos_url,
        total: response.data.public_repos,
      }
    }
  }

  async searchUserGitHub(userName) {
    const response = await user.getDetail(userName)
    if (response.status === 'error') return []

    const dataUser = this.adapterDataListUser(response)
    return [dataUser]
  }

  updateList(user) {
    this.setState({ usuario: user })
  }

  async updateList(userName) {
    const user = await this.searchUserGitHub(userName)

    this.setState({
      ...this.state,
      usuario: user,
      loading: false,
    })
  }

  componentDidMount() {
    const inputSearch = document.querySelector("[data-search='user-github']")
    const btnSubmit = document.querySelector('[data-js="submit"]')

    inputSearch.focus()

    btnSubmit.addEventListener('click', () => {
      this.setState({ loading: true })

      debounce(() => {
        this.updateList(inputSearch.value)
        inputSearch.value = ''
      }, 1000)()
    })
  }

  render() {
    return (
      <section className="Home container">

        <div className="d-flex flex-column justify-content-center align-items-center mb-5 pb-4">
          <figure className="home__icon-github mx-5 mt-5">
            <img src={URL_ICON.GIT_HUB} alt="icone github" />
          </figure>

          <header className="home-header">
            <h1>Buscar usuário</h1>
          </header>

          <input
            data-search="user-github"
            type="text"
            className="home__input-search p-2 text-center border rounded"
          />

          <button
            data-js="submit"
            className="mt-4 g-btn g-btn__outline--success">
            buscar
          </button>

        </div>

        <section className="home__list-user d-flex justify-content-center">
          <Loading visible={this.state.loading} position={'absolute'}></Loading>

          {this.state.usuario.length ? <ListUser users={this.state.usuario} /> : 'implementar componenteError'}
        </section>
      </section>
    )
  }
}

export default Home;
