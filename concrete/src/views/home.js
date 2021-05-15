import URL_ICON from '../constants/icons'

import ListUser from '../components/user/list-user'
import { USERS } from '../api/mocks/user.js'
import user from '../api/repositories/user-respository'



function Home() {

  console.log(user.getDetail('fer-dev'))


  return (
    <section className="Home container">

      <div className="d-flex flex-column justify-content-center align-items-center mb-5 pb-4">
        <figure className="home__icon-github mx-4">
          <img src={URL_ICON.GIT_HUB} alt="icone github" />
        </figure>

        <header className="home-header">
          <h1>Buscar usuário</h1>
        </header>

        <input type="text" className="home__input-search p-2 text-center border border-success rounded"></input>
      </div>

      <section className="home__list-user">
        <ListUser users={USERS}/>
      </section>

      <div>
        
      </div>

    </section>
  );
}

export default Home;
