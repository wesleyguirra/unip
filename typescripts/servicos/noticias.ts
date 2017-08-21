import http from './http'

export function listarNoticias () {
    return http.get('/noticias.json')
        .then(response => {
            return response.data
        })
}