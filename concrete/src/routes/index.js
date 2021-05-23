import { BrowserRouter, Switch, Route } from 'react-router-dom'

// views
// -------------------------------------
import Home from '../views/home/home'
import Sobre from '../views/sobre'
import Repositorios from '../views/repositorios'

export default (
    <BrowserRouter>
        <Switch>
            <Route path="/" exact={true} component={Home}/>
            <Route path="/Sobre" component={Sobre} />
            <Route path="/repositorios" component={Repositorios} />
        </Switch>
    </BrowserRouter>
)