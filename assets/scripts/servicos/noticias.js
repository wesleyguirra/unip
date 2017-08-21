"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var http_1 = require("./http");
function listarNoticias() {
    return http_1.default.get('/noticias.json')
        .then(function (response) {
        return response.data;
    });
}
exports.listarNoticias = listarNoticias;
//# sourceMappingURL=noticias.js.map