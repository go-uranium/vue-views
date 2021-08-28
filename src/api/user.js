import client from '/src/utils/client'

export function getInfoByUID(uid) {
    return client({
        url: `/user/${uid}/info`,
        method: 'GET'
    })
}

export function getInfoByUsername(username) {
    return client({
        url: `/user/username/${username}/info`,
        method: 'GET'
    })
}

export function getProfileByUsername(username) {
    return client({
        url: `/user/username/${username}/profile`,
        method: 'GET'
    })
}