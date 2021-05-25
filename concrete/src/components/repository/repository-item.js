import "./repository-item.scss";

import { GoRepoClone } from "react-icons/go";
import Button from "../button/button";
import IconLang from "../icon-languagem/icon-languagem";

function repositoryItem(props) {
  return (
    <article className="repository-item">
      <header className="d-flex align-items-center">
        <h2>Nome do repository</h2>
      </header>

      <div className="description-user__data">
        <div className="description-user__bio">
          <small className="description-user__bio__label">
            Descricao repositorio:
          </small>

          <p className="description-user__bio__text font--light font--error">
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Et,
            explicabo quae.
          </p>
        </div>
      </div>

      <div className="repository-item__actions">
        <div className="d-flex justify-content-between align-items-center my-2">
          <div>
            <span className="badge badge-warning text-white">5 Star</span>
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
        <IconLang type="angular" />
        <IconLang type="angular" />
        <IconLang type="angular" />
        <IconLang type="angular" />
      </div>
    </article>
  );
}

export default repositoryItem;
