import './search-user.scss'

import Button from '../button/button'

// utils
// ---------------------------------------
import random from '../../utils/random'

// icons
// ---------------------------------------
import octcat from '../../assets/octo/icon-ocat.png'
import octcat_yoga from '../../assets/octo/icon-ocat-yoga.gif'
import octcat_disco from '../../assets/octo/icon-ocat-disco.gif'
import octcat_disco_2 from '../../assets/octo/icon-ocat-disco-2.gif'
import octcat_jet from '../../assets/octo/icon-octa-jet.png'
import octcat_shinoby from '../../assets/octo/icon-octa-shinoby.jpg'
import octcat_white from '../../assets/octo/icon-octa-white.png'
import octcat_wolv from '../../assets/octo/icon-octa-wolv.jpg'
import octcat_de from '../../assets/octo/icon-ocat.gif'


function randomIcon() {
    const icons = [
        octcat, 
        octcat_disco, 
        octcat_disco_2, 
        octcat_yoga,
        octcat_jet,
        octcat_shinoby,
        octcat_white,
        octcat_wolv,
        octcat_de,
    ]

    const index = random(0, icons.length)
    
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