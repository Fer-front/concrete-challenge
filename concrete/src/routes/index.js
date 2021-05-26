import { BrowserRouter, Switch, Route } from 'react-router-dom'

// views
// -------------------------------------
import Home from '../views/home/home'
import Repositorios from '../views/repositorios'

export default (
    <BrowserRouter>
        <Switch>
            <Route path="/" exact={true} component={Home}/>
            <Route path="/repositorios" component={Repositorios} />
        </Switch>
    </BrowserRouter>
)