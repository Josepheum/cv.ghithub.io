const persona= '{"nombre":"Mirta", "apellido": "Gonzalez", "calle": "5679 Torito, Torivia", "tel": "(787) 399-2317", "correo":"rita.gonzalez@example.com","red":"LinkedIn :", "enlaceRed": "www.linkedin/RitaGonzales33333"}';
const obj =JSON.parse(persona);

console.log(obj);
//document.getElementById("persona").innerHTML="Nombre:"+obj.nombre+"Apellido:"+obj.apellido;
 
document.getElementById("calle").innerHTML=obj.calle;
document.getElementById("tel").innerHTML=obj.tel;
document.getElementById("correo").innerHTML=obj.correo;
document.getElementById("red").innerHTML=obj.red;
document.getElementById("enlaceRed").innerHTML=obj.enlaceRed;
document.getElementById("tel").innerHTML=obj.tel;



