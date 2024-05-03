function cotizar(){
    var tour = document.getElementById('tour').value;
    var personas = document.getElementById('personas').value;
    var precio = 0;
    var resumen = '';

    if (tour.toLowerCase() == 'boca juniors' || tour.toLowerCase() == 'boca' || tour.toLowerCase() == 'bocajuniors') {
        precio = 40000;
    }

    else if (tour.toLowerCase() == 'river plate' || tour.toLowerCase() == 'river' || tour.toLowerCase() == 'riverplate') {
        precio = 40000;
    }

    else if (tour.toLowerCase() == 'argentinos juniors' || tour.toLowerCase() == 'argentinos' || tour.toLowerCase() == 'argentinosjuniors') {
        precio = 60000;
    }

    else if (tour.toLowerCase() == 'boca juniors y river plate' || tour.toLowerCase() == 'boca y river' || tour.toLowerCase() == 'bocariver' ||
        tour.toLowerCase() == 'river plate y boca juniors' || tour.toLowerCase() == 'river y boca' || tour.toLowerCase() == 'riverboca') {
        precio = 75000;
    }

    else if (tour.toLowerCase() == 'todos' || tour.toLowerCase() == 'los 3 tours' || tour.toLowerCase() == 'los 3' ||
        tour.toLowerCase() == 'argentinos river y boca' || tour.toLowerCase() == 'river boca y argentinos' || tour.toLowerCase() == 'boca river y argentinos') {
        precio = 90000;
    }

    else {
        alert('La experiencia ingresada no es válida! \nPor favor volvé a intentar');
    }

    if (personas == 0) {
        alert('Por favor ingresar una cantidad de personas mayor a 0');
    }

    else if (precio != 0){
        resumen = "Tour seleccionado: " + tour + "\nCantidad de personas: " + personas;
        alert('\nLa experiencia te saldrá $' + precio*personas + ' pesos argentinos\n\n' + resumen);
    }

}