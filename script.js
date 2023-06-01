const ingresoTexto = document.getElementById
("ingresoTexto");
const botonEncriptar = document.getElementById
("botonEncriptar");
const botonDesencriptar = document.getElementById
("botonDesencriptar");
const botonCopiar = document.getElementById
("botonCopiar");
const mensajeFinal= document.getElementById
("mensajeFinal");
const munheco= document.getElementById
("munheco");
const rightInfo= document.getElementById
("rightInfo");
const right= document.getElementById
("righ");


let remplazar = [
    ["e","enter"],
    ["o", "ober"],
    ["i", "imes"],
    ["a","ai"],
    ["u","ufat"],
]

  const remplace = (nuevoValor) => {
     mensajeFinal.innerHTML = nuevoValor;
     munheco.style.display = "none";
     ingresoTexto.value="";
     rightInfo.style.display = "none";
     botonCopiar.style.display = "block";
     right.classList.add("ajustar");
     mensajeFinal.classList.add("ajustar");
    
  }
 
 botonEncriptar.addEventListener("click", () => {
  const texto = ingresoTexto.value.toLowerCase();
  if (texto !=""){
    function encriptar(newText) {
    for (let i = 0; i < remplazar.length; i++){
        if (newText.includes(remplazar[i][0])) {
           newText = newText.replaceAll(remplazar[i][0], remplazar[i][1]); 
        };
        };
        return newText
       }  
       } else {
        alert("Ingrese texto a encriptar")
       }
     
     remplace (encriptar(texto))

     });

  botonDesencriptar.addEventListener("click", () => {
     const texto = ingresoTexto.value.toLowerCase();
     if (texto != "") {
     function desencriptar(newText) {
      for (let i = 0; i < remplazar.length; i++){
          if (newText.includes(remplazar[i][1])) {
             newText = newText.replaceAll(remplazar[i][1], remplazar[i][0]); 
           };
          };
          return newText;
          };
        } else {
            alert("Ingrese texto a desencriptar")
        }
        remplace (desencriptar(texto))

        }) 

  botonCopiar.addEventListener("click", () => {
         let texto = mensajeFinal;
         navigator.clipboard.writeText(texto.value);
         alert("Texto Copiado")
         mensajeFinal.innerHTML = "";
         munheco.style.display  =  "block";
         rightInfo.style.display = "block";
         botonCopiar.style.display = "none";
         right.classList.remove("ajustar");
         mensajeFinal.classList.remove("ajustar");
         ingresoTexto.focus()
 
        })