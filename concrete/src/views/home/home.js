import './home.scss';
import React from 'react'
import user from '../../api/repositories/user-respository'

import { GoSearch } from 'react-icons/go'
import user_service from '../../services/user'


// COMPONENTS 
// -------------------------------------------------------
import ListUser from '../../components/user/list-user'
import Loading from '../../components/loading/loading'
import Boxmsg from '../../components/boxmsg/boxmsg'
import SearchUser from '../../components/search-user/search-user'

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
      compSearchUserVisible: true,
    }

    this.handleChangeSearchUser = this.handleChangeSearchUser.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this)
    this.toggleSearchUser = this.toggleSearchUser.bind(this)
  }

  toggleSearchUser() {
    this.setState({ compSearchUserVisible: !this.state.compSearchUserVisible })
  }

  async searchUserGitHub(userName) {
    const response = await user.getDetail(userName)
    this.showBoxmsg(response.status, response.statusText)

    if (response.status === 'error') return []

    const dataUser = user_service.adapterDataUser(response)
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
    this.setState({inputValue: ''})

    if (arrUser.length) this.toggleSearchUser()
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

        <div className="container">
          
          <div className="d-flex justify-content-end">
            {
              !this.state.compSearchUserVisible
                ? <GoSearch onClick={this.toggleSearchUser} className="home__icon mt-3"/>
                : null
            }
          </div>

          <div className="home__search-area">
            {
              this.state.compSearchUserVisible 
                ? <div className="mt-5">
                    <SearchUser inputChange={this.handleChangeSearchUser} btnSubmit={this.handleSubmit}/>
                  </div>
                : null
            }
          </div>

          <section className="home__list-user d-flex justify-content-center mt-4">
            {
              !this.state.compSearchUserVisible
                ? <ListUser users={this.state.usuario} /> 
                : null
            }
          </section>
        </div>
      </section>
    )
  }
}

export default Home;
