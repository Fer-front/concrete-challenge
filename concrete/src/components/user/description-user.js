import "./description-user.scss";

import Avatar from "../../components/avatar/avatar";

function descriptionUser(props) {
  if (props.data === undefined || props.data === null) return null;

  return (
    <article className="description-user">
      <div className="d-flex justify-content-center align-items-center mb-4">
        <Avatar
          className="description-user__avatar"
          url={props.data.user.avatar}
          size="xlarge"
          alt={props.data.user.nickName}
        />
      </div>

      <header className="description-user__content mb-3">
        <h2 className="description-user__name titulo titulo--small text-capitalize font--bold mb-0">
          {props.data.user.nickName}
        </h2>
        <span className="description-user__email">{props.data.user.email}</span>
      </header>
      <div className="description-user__data">
        <div className="description-user__bio">
          <small className="description-user__bio__label">Bio:</small>

          <p className="description-user__bio__text font--light font--error">
            {props.data.user.bio}
          </p>
        </div>
      </div>
      <div className="my-2 mb-3">
        <ul className="list-unstyled d-flex align-items-center justify-content-between">
          <li className="description-user__data__item mx-2">
            <strong className="description-user__data__item-qtd">
              {props.data.user.followers}
            </strong>{" "}
            - seguidores
          </li>
          <li className="description-user__data__item mx-2">
            <strong className="description-user__item-qtd">
              {props.data.user.following}
            </strong>{" "}
            - seguindo
          </li>
        </ul>
      </div>
    </article>
  );
}

export default descriptionUser;
