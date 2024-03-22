

var confirmacion = window.confirm  ("¿TENES GANAS DE VER NUESTRO CATALOGO  ?")

if(confirmacion == true) {
    swal("BIENVENIDO","Recorre todas nuestras categorias","success" )
}

else {
    swal ("Bienvenido igual"," y dale una oportunidad  algun disco que te interese ", "error")
}

 function oferta(){
    swal("APROVECHA"," solo por esta semana esta al 50% de descuento", "success")
}