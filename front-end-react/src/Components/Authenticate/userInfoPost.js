export default async function userInfoPost(request, username, password, method) {
    let success
    let error
    try {
        const information = { username, password }
        success = await request.post(`/${method}`, information)
    } catch (err) {
        error = err.response ? err.response : err
    }

    return { success, error }
}
