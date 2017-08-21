export class Noticia {
    titulo: string
    categoria: string
    resumo: string
    imagem: string
    
    constructor (categoria: string, titulo: string, resumo: string, imagem: string) {
        this.categoria = categoria
        this.titulo = titulo
        this.resumo = resumo
        this.imagem = imagem
    }
}