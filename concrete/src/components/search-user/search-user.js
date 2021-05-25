import './search-user.scss'

import Button from '../button/button'

// utils
// ---------------------------------------
import random from '../../utils/random'

// icons
// ---------------------------------------
import octcat from '../../assets/icon-ocat.png'
import octcat_yoga from '../../assets/icon-ocat-yoga.gif'
import octcat_disco from '../../assets/icon-ocat-disco.gif'
import octcat_jet from '../../assets/icon-octa-jet.png'
import octcat_shinoby from '../../assets/icon-octa-shinoby.jpg'
import octcat_white from '../../assets/icon-octa-white.png'
import octcat_wolv from '../../assets/icon-octa-wolv.jpg'
 


function randomIcon() {
    const icons = [
        octcat, 
        octcat_disco, 
        octcat_yoga,
        octcat_jet,
        octcat_shinoby,
        octcat_white,
        octcat_wolv,
    ]

    const len = icons.length

    const index = random(0, len)
    
    return icons[index]
}

const dinamicIcon = randomIcon()

function SearchUser (props) {
    return (
        <section className="search-user d-flex justify-content-center flex-column align-items-center">
            
            <figure className="search-user__icon-github d-flex align-items-end">
                <img src={dinamicIcon} alt="icone github" />
            </figure>

            <input
                className="search-user__input-search p-2 border text-center"
                onChange={props.inputChange}
                type="search"
                placeholder="Buscar usuário"
            />

            <div className="mt-4">
                <Button
                    label="buscar"
                    type='primary'
                    onClick={props.btnSubmit}
                />
          </div>
        </section>
    )
}

export default SearchUser