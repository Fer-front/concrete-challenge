import "./home.scss";
import React from "react";
import user from "../../api/repositories/user-respository";

import { GoSearch } from "react-icons/go";
import user_service from "../../services/user";
import { GoRepo, GoPerson } from "react-icons/go";

// COMPONENTS
// -------------------------------------------------------
import Loading from "../../components/loading/loading";
import Boxmsg from "../../components/boxmsg/boxmsg";
import SearchUser from "../../components/search-user/search-user";
import NavBottom from "../../components/nav/botton/navBottom";
import NavTop from "../../components/nav/top/navTop";
import DescriptionUser from "../../components/user/description-user";

class Home extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      usuario: [],
      loading: false,
      boxmsg: false,
      inputValue: "",
      boxmsgStatus: "",
      boxmsgMsg: "",
      boxmsgVisible: false,
      compSearchUserVisible: true,
    };

    this.handleChangeSearchUser = this.handleChangeSearchUser.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.toggleSearchUser = this.toggleSearchUser.bind(this);
  }

  toggleSearchUser() {
    this.setState({ compSearchUserVisible: !this.state.compSearchUserVisible });
  }

  async searchUserGitHub(userName) {
    const response = await user.getDetail(userName);
    this.showBoxmsg(response.status, response.statusText);

    if (response.status === "error") return [];

    const dataUser = user_service.adapterDataUser(response);
    return [dataUser];
  }

  async updateListUser(arrUser) {
    this.setState({ ...this.state, usuario: arrUser });
  }

  toggleLoading() {
    this.setState({ loading: !this.state.loading });
  }

  showBoxmsg(status, msg) {
    this.setState({
      ...this.state,
      boxmsgVisible: true,
      boxmsgStatus: status,
      boxmsgMsg: msg,
    });

    setTimeout(() => {
      this.setState({
        ...this.state,
        boxmsgVisible: false,
        boxmsgStatus: "",
        boxmsgMsg: "",
      });
    }, 2300);
  }

  async handleSubmit() {
    this.toggleLoading();

    const arrUser = await this.searchUserGitHub(this.state.inputValue);

    this.updateListUser(arrUser);
    this.toggleLoading();
    this.setState({ inputValue: "" });

    if (arrUser.length) this.toggleSearchUser();
  }

  handleChangeSearchUser(e) {
    this.setState({ ...this.state, inputValue: e.target.value });
  }

  render() {
    const setTemplateSearchUser = () => {
      return (
        <div className="mt-5">
          <SearchUser
            inputChange={this.handleChangeSearchUser}
            btnSubmit={this.handleSubmit}
          />
        </div>
      )
    }

    const setTemplateDescriptionUser = () => {
      return (
        <section className="home__list-user d-flex justify-content-center mt-4 mb-5">
        <DescriptionUser data={this.state.usuario[0]} />
      </section>
      )
    }

    const setTemplateNavBottom = () => {
      return (
        <NavBottom>
        <a href={this.state.usuario[0].user.perfil}>
          <GoPerson className="home__icon home__icon--person" />
        </a>
        <a href="/repositorios">
          <GoRepo className="home__icon home__icon--repository" />
        </a>
      </NavBottom>
      )
    }

    const setTemplateButtomSearchAbsolute = () => {
      return <GoSearch onClick={this.toggleSearchUser} className="home__icon mt-3" />
    }

    return (
      <section className="Home container">
        <Loading visible={this.state.loading} position={"absolute"}></Loading>

        <Boxmsg
          visible={this.state.boxmsgVisible}
          status={this.state.boxmsgStatus}
          message={this.state.boxmsgMsg}
        />

        <div className="container">
          <NavTop type="right">
            {!this.state.compSearchUserVisible ? setTemplateButtomSearchAbsolute() : null}
          </NavTop>

          <div className="home__search-area pt-4">
            {this.state.compSearchUserVisible 
              ? setTemplateSearchUser()
              : setTemplateDescriptionUser()}
          </div>
        </div>
        
        {this.state.usuario.length && !this.state.compSearchUserVisible ? setTemplateNavBottom() : null}
      </section>
    );
  }
}

export default Home;
