function procesarTexto(){
    let textoUsuario = document.getElementById("textInput").value;
    const textoEncriptado = encriptar(textoUsuario);
    document.getElementById("parrafo").innerHTML = textoEncriptado;
}
function procesarTextoEncriptado(){
    let textoEncriptado = document.getElementById("textInput").value;
    let textoDesencriptado = desencriptar(textoEncriptado);
    document.getElementById("parrafo").innerHTML = textoDesencriptado;
}
function encriptar(textoUsuario) {
    let textoEncriptado = "";
    for(let i = 0; i<textoUsuario.length; i++){
        
        if(textoUsuario[i]==="a"){
            textoEncriptado += "ai";
        }else if(textoUsuario[i]==="e"){
            textoEncriptado += "enter";
        }else if(textoUsuario[i]==="i"){
            textoEncriptado += "imes";
        }else if(textoUsuario[i]==="o"){
            textoEncriptado += "ober";
        }else if(textoUsuario[i]==="u"){
            textoEncriptado += "ufat";
        }else{
            textoEncriptado += textoUsuario[i];
        }    
    }
    return textoEncriptado;
}
function desencriptar(textoEncriptado) {
    let textoDesencriptado = "";
    for(let i = 0; i<textoEncriptado.length; i++){
        
        if(textoEncriptado[i]==="a" && textoEncriptado[i+1] ==="i"){
            textoDesencriptado += "a";
            i++; 
        }else if(textoEncriptado[i]==="e" && textoEncriptado[i+1] ==="n" && textoEncriptado[i+2] ==="t" && textoEncriptado[i+3]==="e" && textoEncriptado[i+4] ==="r"){
            textoDesencriptado += "e";
            i = i+4;
        }else if(textoEncriptado[i]==="i" && textoEncriptado[i+1] ==="m" && textoEncriptado[i+2] ==="e" && textoEncriptado[i+3]==="s"){
            textoDesencriptado += "i";
            i = i+3;
        }else if(textoEncriptado[i]==="o" && textoEncriptado[i+1] ==="b" && textoEncriptado[i+2] ==="e" && textoEncriptado[i+3]==="r"){
            textoDesencriptado += "o";
            i = i+3;
        }else if(textoEncriptado[i]==="u" && textoEncriptado[i+1] ==="f" && textoEncriptado[i+2] ==="a" && textoEncriptado[i+3]==="t"){
            textoDesencriptado += "u";
            i = i+3;
        }else{
            textoDesencriptado += textoEncriptado[i];
        }    
    }
    return textoDesencriptado;
}
function copiarTexto() {
    var texto = document.getElementById("parrafo");
    texto.select();
    document.execCommand("copy");
    alert("Texto copiado al portapapeles");
}

function copiarTextoIzquierdo() {
    var texto = document.getElementById("textInput");
    texto.select();
    document.execCommand("copy");
    alert("Texto copiado al portapapeles");
}
