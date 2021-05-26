import "./repository-item.scss";

import React from "react";
import axios from "axios";

import { Link } from "react-router-dom";
import { GoRepoClone } from "react-icons/go";
import Button from "../button/button";
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

  async componentDidMount() {
    const res = await axios.get(this.props.data.languages_url);
    const listLanguagem = adapterDataRepositoryItem(res.data);
    this.updateLanguagem(listLanguagem);
  }

  generateListLanguagem(list) {
    return list.map((lang, index) => <IconLang key={index} type={lang} />);
  }

  render() {
    const {
      name,
      description,
      // url,
      // created_at,
      // updated_at,
      // clone_url,
      stargazers_count,
    } = this.props.data;

    return (
      <article className="repository-item">
        <header className="d-flex align-items-center">
          <Link
            to={{
              pathname: "/repositorios/detalhe",
              state: { user: "" },
            }}
          >
            <h2>{name}</h2>
          </Link>
        </header>

        <div className="description-user__data">
          <div className="description-user__bio">
            <small className="description-user__bio__label">
              Descricao repositorio:
            </small>

            <p className="description-user__bio__text font--light font--error">
              {description}
            </p>
          </div>
        </div>

        <div className="repository-item__actions">
          <div className="d-flex justify-content-between align-items-center my-2">
            <div>
              <span className="badge badge-warning text-white">
                {stargazers_count} Star
              </span>
            </div>
            <Button
              label="clonar"
              type="primary"
              size="small"
              icon={<GoRepoClone className="mr-2" />}
            />
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
