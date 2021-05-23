import DescriptionUser from '../user/description-user'


function generatedListDescriptionUser(list) {
    let count = 0
    return list.map(user => (<li className="list-unstyled" key={count++}> <DescriptionUser data={user}/> </li>))
}


function ListUser(props) {
    if (!props.users) return 'nenhum item encontrado'

    const listUserDescription = generatedListDescriptionUser(props.users)
    const listRender = props.reverse ? listUserDescription.reverse() : listUserDescription

    return (
        <section className="list-user">
            <ul className="list-unstyled"> {listRender} </ul>
        </section>
    );
}


export default ListUser;