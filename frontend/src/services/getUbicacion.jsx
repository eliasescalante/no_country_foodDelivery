



/************ recibir l geolocalizacion ********** */
var lat 
var long 

/********calcularMiUbicacion()*************************************/
function successCallback(res){
    lat = res.coords.latitude;
    long = res.coords.longitude;
}

function errorCallback(res){
    
    
    
    
    Swal.fire({
        icon: 'error',
        title: 'Oops...',
        text: 'deja que el navegador acceda a tu ubicacion!',
        showConfirmButton:false,
        footer: '<input type="button" class="btn-recargar" value="Recargar" onclick="location.reload()">',
      })

    
} 

navigator.geolocation.getCurrentPosition(successCallback, errorCallback);