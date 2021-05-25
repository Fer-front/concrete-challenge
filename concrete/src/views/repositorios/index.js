import RepositoryItem from "../../components/repository/repository-item";
import NavBottom from '../../components/nav/botton/navBottom'

function repositorios() {
  return (
    <section className="list-repository">
      <div className="container">
        <div className="mt-5 mx-3">
          <h1 className="mb-3">Nome do usuario</h1>

          <small>lista de repositorios</small>
          <div className="mb-3">
            <RepositoryItem></RepositoryItem>
          </div>
          <div className="mb-3">
            <RepositoryItem></RepositoryItem>
          </div>
          <div className="mb-3">
            <RepositoryItem></RepositoryItem>
          </div>
          <div className="mb-3">
            <RepositoryItem></RepositoryItem>
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

export default repositorios;
