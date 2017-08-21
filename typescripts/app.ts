import { listarNoticias } from './servicos/noticias'
import { Noticia } from './model/noticia'
import { carregarNoticias } from './views/noticia'


(function(){

    //Polyfill WebComponents
    if('registerElement' in document 
        && 'import' in document.createElement('link') 
        && 'content' in document.createElement('template')) {
            console.log('Not using polyfill')
    } else {
        let e = document.createElement('script')
        console.log('Using polyfill')
        e.src = '../node_modules/@webcomponents/webcomponentsjs/webcomponents-lite.js'
        document.body.appendChild(e)
    }

    listarNoticias()
        .then(noticias => { document.querySelector('.card-listing').innerHTML += (carregarNoticias(noticias)) })
    
})();
