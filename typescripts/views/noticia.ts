export function carregarNoticias (noticias) {

    return noticias.map(function(noticia){
        return `<div class="card ${(noticia.hero ? `card-hero` : ``)} col-md-6">
            <div class="card-box">
                <div class="card-content">
                    <span class="tag">
                        <svg  x="0px" y="0px" width="58px" height="36px" viewBox="0 0 58 36">
                            <use href="#Tag"></use>
                        </svg>
                        <span class="tag-label">${noticia.categoria}</span>
                    </span>
                    <h4 class="card-title">${noticia.titulo}</h4>
                    ${(noticia.data) ?
                        noticia.data.map(function(data){
                            return `
                            <div class="svg-data">
                                <svg viewBox="0 0 160 160">
                                    <circle cx="80px" cy="80px" r="70px" stroke="white" stroke-width="2" stroke-dasharray="" stroke-dashoffset="0"></circle>
                                    <circle cx="80px" cy="80px" r="70px" stroke="yellow" stroke-width="2" stroke-dasharray="420px" stroke-dashoffset="0"></circle>
                                </svg>
                                <span class="svg-text"><b>${data.count}</b>${data.label}</span>
                            </div>`
                        }).join('')
                    : ``}
                    ${(noticia.resumo) ? `<p>${noticia.resumo}</p>` : ``}
                </div>
                <a href="" class="card-action action-link"><span>leia mais</span> <i class="action-icon"></i></a>
                ${(noticia.img) ? `<div class="card-thumb" style="background-image: url('${noticia.img}')"></div>` : ``}
            </div>
        </div>`
    }).join('')

}