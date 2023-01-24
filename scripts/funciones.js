const btnEnviar=document.querySelector("#btnEnviar");
const inputs=document.querySelector('form');
const btnCerrar=document.querySelector("#btnCerrar");
const ventana=document.querySelector("#mensajeEnviado");

const btnLubre=document.querySelector("#btnLubre");
const lubre=document.querySelector("#lubre");

const btnRadio=document.querySelector("#btnRadio");
const radio=document.querySelector("#radioT");

const btnUashin=document.querySelector("#btnUashin");
const diario=document.querySelector("#Uashin");

const btnCerrar1=document.querySelector("#btnCerrar1");
const btnCerrar2=document.querySelector("#btnCerrar2");





btnEnviar.addEventListener('click', () => {
	let nombre=document.getElementById('Nombre').value;
	let correo=document.getElementById('EmailID').value;
	let mensaje=document.getElementById('Mensaje').value;
	ventana.showModal();
	console.log ("hagamos de cuenta que se envió el mensaje: ' "+mensaje+ " ' de ' "+ nombre + " ' por el correo electrónico: ' " +correo +" '");
	
	document.getElementById("MensajeEnviado").innerHTML="hagamos de cuenta que se envió el mensaje: ' "+mensaje+ " ' de ' "+ nombre + " ' por el correo electrónico: ' " +correo +" '";
	
	})

btnLubre.addEventListener('click', () => {
	lubre.showModal();
	console.log ("Lubre");
	})

btnRadio.addEventListener('click', () => {
	radio.showModal();
	console.log ("Lubre");
	})
	
btnUashin.addEventListener('click', () => {
	diario.showModal();
	console.log ("Lubre");
	})


btnCerrar.addEventListener("click",()=>
	{
		ventana.close();
})

btnCerrar1.addEventListener("click",()=>
	{
		lubre.close();
})

btnCerrar2.addEventListener("click",()=>
	{
		radioT.close();
})

btnCerrar3.addEventListener("click",()=>
	{
		Uashin.close();
})

