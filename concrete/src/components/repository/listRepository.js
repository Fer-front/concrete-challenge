import RepositoryItem from './repository-item'


function generatedList(list) {
    let count = 0
    return list
        .sort((a, b) => (a.stargazers_count - b.stargazers_count))
        .map(user => (<li className="list-unstyled" key={count++}> <RepositoryItem data={user}/> </li>))
}

function renderList(props) {
    const listRepo = generatedList(props.list)
    return props.reverse ? listRepo.reverse() : listRepo
}


function ListRepository(props) {
    if (!props.list) return 'nenhum item encontrado'

    return (
        <section className="list-user">
            <ul className="list-unstyled"> 
                {renderList(props)} 
            </ul>
        </section>
    );
}


export default ListRepository;