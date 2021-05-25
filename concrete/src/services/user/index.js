function adapterDataUser(response) {
    return {
        user: {
        id: response.data.id,
        name: response.data.login,
        nickName: response.data.login,
        email: response.data.email,
        avatar: response.data.avatar_url,
        bio: response.data.bio,
        followers: response.data.followers,
        following: response.data.following,
        perfil: response.data.html_url,
        },
        respository: {
        url: response.data.repos_url,
        total: response.data.public_repos,
        }
    }
}


const user_service = {
    adapterDataUser
}

export default user_service