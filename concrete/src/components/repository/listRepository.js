import RepositoryItem from './repository-item'


function generatedList(list) {
    let count = 0
    return list.map(user => (<li className="list-unstyled" key={count++}> <RepositoryItem data={user}/> </li>))
}


function ListRepository(props) {
    if (!props.list) return 'nenhum item encontrado'

    const listRepo = generatedList(props.list)
    const listRender = props.reverse ? listRepo.reverse() : listRepo

    return (
        <section className="list-user">
            <ul className="list-unstyled"> {listRender} </ul>
        </section>
    );
}


export default ListRepository;