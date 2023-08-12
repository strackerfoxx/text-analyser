export default function random(longitud) {
    var caracteres = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    var cadenaAleatoria = '';
    
    for (var i = 0; i < longitud; i++) {
      var indice = Math.floor(Math.random() * caracteres.length);
      cadenaAleatoria += caracteres.charAt(indice);
    }
    
    return cadenaAleatoria;
}