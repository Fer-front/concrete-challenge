import React from "react";
import NavBottom from "../../components/nav/botton/navBottom";
import Avatar from "../../components/avatar/avatar";
import userRepository from "../../api/repositories/user-respository";
import { factoryDataRepository } from "../../services/repositori";
import ListRepository from "../../components/repository/listRepository";

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
};

class Repositorios extends React.Component {
  constructor(props) {
    super(props);

    this.state = initialState;
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

            <h2>Lista de repositorios</h2>
            <hr />

            <div className="mb-3">
              <ListRepository list={this.state.repositories}></ListRepository>
            </div>
          </div>
        </div>
        <NavBottom>
          <div>x</div>
          <div>x</div>
          <div>x</div>
        </NavBottom>
      </section>
    );
  }
}

export default Repositorios;
