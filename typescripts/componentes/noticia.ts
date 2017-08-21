import { listarNoticias } from '../servicos/noticias'
import { Noticia } from '../model/noticia'
import { carregarNoticias } from '../views/noticia'

listarNoticias()
    .then(noticias => { document.body.innerHTML += (carregarNoticias(noticias)) })