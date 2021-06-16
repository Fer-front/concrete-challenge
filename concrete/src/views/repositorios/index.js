import './index.scss'
import React from "react";
import { Link } from "react-router-dom";

import userRepository from "../../api/repositories/user-respository";
import { factoryDataRepository } from "../../services/repositori";

import Avatar from "../../components/avatar/avatar";
import NavBottom from "../../components/nav/botton/navBottom";
import ListRepository from "../../components/repository/listRepository";

import { MdHome } from "react-icons/md"
import { BiSortDown, BiSortUp } from "react-icons/bi"


function UserException(msg) {
  this.message = msg;
  this.name = "UserException";
}

const initialState = {
  user: {
    avatar: "",
    nickName: "",
  },
  repositories: [],
  listDecrecente: true,
};

class Repositorios extends React.Component {
  constructor(props) {
    super(props);

    this.state = initialState;
    this.toggle = this.toggle.bind(this)
  }

  toggle() {
    this.setState(
      {
        ...this.state,
        listDecrecente: !this.state.listDecrecente,
      }
    )
  }

  getRepositories(userName) {
    try {
      if (!userName)
        throw new UserException(
          "Nome de usuário não foi informado ao parametro"
        );

      const res = userRepository.listRepositorys(userName);

      if (res.status === "error")
        throw new UserException("Ocorreu algum erro na request");

      return res;
    } catch (error) {
      console.error(error);
      return null;
    }
  }

  updateUser(user) {
    this.setState({
      ...this.state,
      user: { avatar: user.avatar, nickName: user.nickName },
    });
  }

  updateListRepositories(arr = []) {
    this.setState({ ...this.state, repositories: arr });
  }

  renderListRepository() {
    const template = (
      <div className="mb-3">
        <ListRepository 
          list={this.state.repositories} 
          reverse={this.state.listDecrecente} />
      </div>)

    return this.state.repositories.length ? template : null
  }

  renderButtonFilter() {
    return (
      <div
        onClick={this.toggle} 
        className="d-flex justify-content-end align-items-center mb-4">
          <span className="mr-1">filtar:</span>
          {
          this.state.listDecrecente
            ? <BiSortDown onClick={this.toggle}/>
            : <BiSortUp onClick={this.toggle}/>
          }
      </div>
    )
  }

  async componentDidMount() {
    const { avatar, nickName } = this.props.location.state.user;
    this.updateUser({ avatar, nickName });

    const dataListRepositories = await this.getRepositories(nickName);

    const list = dataListRepositories.data.map((rep) =>
      factoryDataRepository(rep)
    );
    this.updateListRepositories(list);
  }

  render() {
    return (
      <section className="list-repository">
        <div className="container">
          <div className="mt-5 mx-3">
            <div className="my-5 d-flex align-items-center flex-column">
              <Avatar
                url={this.state.user.avatar}
                size="xlarge"
                alt={this.state.user.nickName}
              />
            </div>

            <h1>Lista de repositorios</h1>
            <hr className="mb-5" />

            {this.renderButtonFilter()}
            {this.renderListRepository()}
          </div>
        </div>
        <NavBottom>
          <Link to="/">
            <MdHome className="list-repository__icon" />
          </Link>
        </NavBottom>
      </section>
    );
  }
}

export default Repositorios;
