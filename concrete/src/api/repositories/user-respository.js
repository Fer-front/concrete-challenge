import github from './github-config'

// Detalhes de um usuário: [https://api.github.com/users/{username}](https://api.github.com/users/{username})
// LISTA Repositórios de um usuário: [https://api.github.com/users/{username}/repos](https://api.github.com/users/{username}/repos)
// Detalhes de um repositório: [https://api.github.com/repos/{full_name}](https://api.github.com/repos/{full_name})


// USER
// --------------------------------------------------------
const getDetail = (userName = '', config = {}) => (github.get(`/users/${userName}`, config))


// REPOSITORYS
// --------------------------------------------------------
const listRepositorys = (username = '', config = {}) => (github.get(`users/${username}/repos`, config))
const getRepository = (responsityName = '', config = {}) => (github.get(`/repos/${responsityName}`, config)) 


const USER = {
    getDetail,
    listRepositorys,
    getRepository,
}

export default USER
