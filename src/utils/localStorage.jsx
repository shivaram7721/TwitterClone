export function getUsers() {
    const users = localStorage.getItem('users');
    try {
        if(users) {
            return JSON.parse(users)
        }
    } catch (error) {
        return []
    }
    return []
}

export function getTweets() {
    const tweets = localStorage.getItem('tweets');
    try {
        if(tweets) {
            return JSON.parse(tweets)
        }
    } catch (error) {
        return []
    }
    return []
}