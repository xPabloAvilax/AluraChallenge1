let textoAEncriptar = document.querySelector("#input-texto");
let mensajeEncriptado = document.querySelector("#msg");
let btnEncriptar = document.querySelector("#btn-encriptar");
let btnDesencriptar = document.querySelector("#btn-desencriptar");
let btnLimpiar = document.querySelector("#btn-limpiar");
let btnCopiar = document.querySelector("#btn-copy");
let error = document.querySelector("#error");

 
function encriptar(texto){
    let textoEncriptado = texto.replace(/(e)/ig, "enter").replace(/(i)/ig, "imes").replace(/(a)/ig, "ai").replace(/(o)/ig, "ober").replace(/(u)/ig, "ufat");

    return textoEncriptado.toLowerCase().normalize('NFD').replace(/[\u00C0-\u00FF]/g, '');
}
function desencriptar(texto){
    let textoDesencriptado = texto.replace(/(enter)/ig,"e").replace(/(imes)/ig,"i").replace(/(ai)/ig,"a").replace(/(ober)/ig,"o").replace(/(ufat)/ig,"u");

    return textoDesencriptado.toLowerCase();
}

btnEncriptar.addEventListener("click",function(e){
        e.preventDefault(); 
        mensajeEncriptado.value = encriptar(reemplazarAcentos(textoAEncriptar.value));
 
})
btnDesencriptar.addEventListener("click",function(e){
    e.preventDefault(); 
    textoAEncriptar.value = desencriptar(mensajeEncriptado.value);
})
btnLimpiar.addEventListener("click",function(e){
    e.preventDefault();
    textoAEncriptar.value="";
    mensajeEncriptado.value=""
})

btnCopiar.addEventListener("click",function(e){
    e.preventDefault();
    mensajeEncriptado.select();
    document.execCommand('copy');
})


function reemplazarAcentos(cadena){
	let chars={
		"á":"a", "é":"e", "í":"i", "ó":"o", "ú":"u",
		"à":"a", "è":"e", "ì":"i", "ò":"o", "ù":"u", "ñ":"n",
		"Á":"A", "É":"E", "Í":"I", "Ó":"O", "Ú":"U",
		"À":"A", "È":"E", "Ì":"I", "Ò":"O", "Ù":"U", "Ñ":"N"}
	let expr=/[áàéèíìóòúùñ]/ig;
	let res=cadena.replace(expr,function(e){return chars[e]});
	return res;
}





