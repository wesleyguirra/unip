"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Noticia = (function () {
    function Noticia(categoria, titulo, resumo, imagem) {
        this.categoria = categoria;
        this.titulo = titulo;
        this.resumo = resumo;
        this.imagem = imagem;
    }
    return Noticia;
}());
exports.Noticia = Noticia;
// var card = `<div class="card col-md-6">
//                         <div class="card-box">
//                             <div class="card-content">
//                                 <span class="tag">
//                                     <svg  x="0px" y="0px" width="58px" height="36px" viewBox="0 0 58 36">
//                                         <use href="#Tag"></use>
//                                     </svg>
//                                     <span class="tag-label">${noticia.categoria}</span>
//                                 </span>
//                                 <h4 class="card-title">${noticia.titulo}</h4>
//                                 <p>${noticia.resumo}</p>
//                             </div>
//                             <a href="" class="card-action action-link"><span>${noticia.leia}</span> <i class="action-icon"></i></a>
//                             <div class="card-thumb" style="background-image: url('${noticia.img}')"></div>
//                         </div>
//                     </div>`; 
//# sourceMappingURL=noticia.js.map