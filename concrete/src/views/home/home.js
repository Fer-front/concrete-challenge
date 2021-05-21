import React from 'react'
import debounce from '../../utils/debounce'
import user from '../../api/repositories/user-respository'


// COMPONENTS 
// -------------------------------------------------------
import ListUser from '../../components/user/list-user'
import Loading from '../../components/loading/loading'
import Boxmsg from '../../components/boxmsg/boxmsg'
import SearchUser from './search-user'

class Home extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      usuario: [],
      loading: false,
      boxmsg: false,
      inputValue: '',
      boxmsgStatus: '',
      boxmsgMsg: '',
      boxmsgVisible: false,
    }

    this.handleChangeSearchUser = this.handleChangeSearchUser.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this)
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
    this.showBoxmsg(response.status, response.statusText)

    if (response.status === 'error') return []

    const dataUser = this.adapterDataListUser(response)
    return [dataUser]
  }

  async updateListUser(arrUser) {
    this.setState({...this.state, usuario: arrUser})
  }

  toggleLoading() {
    this.setState({ loading: !this.state.loading })
  }

  showBoxmsg(status, msg) {
    this.setState({ 
      ...this.state,
      boxmsgVisible: true,
      boxmsgStatus: status,
      boxmsgMsg: msg,
    })

    setTimeout(() => {
      this.setState({ 
        ...this.state,
        boxmsgVisible: false,
        boxmsgStatus: '',
        boxmsgMsg: '',
      })
    }, 2300)
  }

  async handleSubmit() {
    this.toggleLoading()

    const arrUser = await this.searchUserGitHub(this.state.inputValue)

    this.updateListUser(arrUser)
    this.toggleLoading()
  }

  handleChangeSearchUser(e) {
    this.setState({...this.state, inputValue: e.target.value})
  }

  render() {

    return (
      <section className="Home container">
        <Loading visible={this.state.loading} position={'absolute'}></Loading>

        <Boxmsg 
          visible={this.state.boxmsgVisible}
          status={this.state.boxmsgStatus} 
          message={this.state.boxmsgMsg}
        /> 

        <div className="d-flex flex-column justify-content-center align-items-center my-5 py-4">
          <SearchUser 
            inputChange={this.handleChangeSearchUser}
            btnSubmit={this.handleSubmit}
          />
        </div>

        <section className="home__list-user d-flex justify-content-center">
          <ListUser users={this.state.usuario} /> 
        </section>
      </section>
    )
  }
}

export default Home;
