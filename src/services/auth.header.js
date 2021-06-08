export default function authHeader() {
    let user = localStorage.token

    if (user && user.access_token) {
        return { Authorization: 'Bearer ' + user.access_token }
    } else {
        return {}
    }
}