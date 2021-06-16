import "./repository-item.scss";

import React from "react";
import axios from "axios";

import { MdStar } from "react-icons/md";

import IconLang from "../icon-languagem/icon-languagem";
import { adapterDataRepositoryItem } from "../../services/repositori";

const initialState = {
  languagem: [],
};
class RepositoryItem extends React.Component {
  constructor(props) {
    super(props);
    this.state = initialState;
  }

  updateLanguagem(arr) {
    this.setState({ ...this.state, languagem: arr });
  }

  generateListLanguagem(list) {
    return list.map((lang, index) => <IconLang key={index} type={lang} />);
  }

  async componentDidMount() {
    const res = await axios.get(this.props.data.languages_url);
    const listLanguagem = adapterDataRepositoryItem(res.data);
    this.updateLanguagem(listLanguagem);
  }

  render() {
    const {
      name,
      description,
      html_url,
      stargazers_count,
    } = this.props.data;

    return (
      <article className="repository-item">

        <header className="d-flex justify-content-between align-content-start">
          <a href={html_url} target="_blank" rel="noreferrer">
            <h2 className="repository-item__name">{name}</h2>
          </a>
          <div className="my-2">
            <div className="d-flex align-items-center badge badge-warning p-1">
              <MdStar className="text-white mr-1" />
              <span className="text-white">{stargazers_count}</span>
            </div>
          </div>
        </header>

        <div className="description-user__data">
          <div className="description-user__bio">
            <small className="description-user__bio__label">
              Descrição repositório:
            </small>

            <p className="description-user__bio__text font--light font--error">
              {description}
            </p>
          </div>
        </div>

        <div className="mb-3">
          <small className="mb-2 d-block">languages:</small>
          {this.generateListLanguagem(this.state.languagem)}
        </div>
      </article>
    );
  }
}

export default RepositoryItem;
