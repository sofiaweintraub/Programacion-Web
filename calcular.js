function cotizar() {
    var tour = document.getElementById('tour').value.toLowerCase();
    var personas = parseInt(document.getElementById('personas').value, 10);
    var precio = 0;
    var resumen = '';

    // Diccionario de tours y sus precios
    var tours = {
        'boca juniors': 40000,
        'boca': 40000,
        'bocajuniors': 40000,
        'river plate': 40000,
        'river': 40000,
        'riverplate': 40000,
        'argentinos juniors': 60000,
        'argentinos': 60000,
        'argentinosjuniors': 60000,
        'boca juniors y river plate': 75000,
        'boca juniors river plate': 75000,
        'boca y river': 75000,
        'boca river': 75000,
        'bocariver': 75000,
        'river plate y boca juniors': 75000,
        'river plate boca juniors': 75000,
        'river y boca': 75000,
        'river boca': 75000,
        'riverboca': 75000,
        'todos': 90000,
        'todas': 90000,
        'los 3 tours': 90000,
        'los 3': 90000,
        'las 3 tours': 90000,
        'las 3': 90000,
        'los tres tours': 90000,
        'los tres': 90000,
        'las tres tours': 90000,
        'las tres': 90000,
        'argentinos river y boca': 90000,
        'argentinos river boca': 90000,
        'river boca y argentinos': 90000,
        'river boca argentinos': 90000,
        'boca river y argentinos': 90000,
        'boca river argentinos': 90000,
        'boca y river y argentinos': 90000,
        'boca river argentinos': 90000,
        'argentinos y river y boca': 90000,
        'argentinos river y boca': 90000,
        'argentinos river boca': 90000,
        'todos los tours': 90000,
        'todas las tours': 90000,
    };

    // Validar el tour ingresado
    if (tour in tours) {
        precio = tours[tour];
    } else {
        alert('El tour ingresado no es válida! \nPor favor volvé a intentar');
        return;
    }

    // Validar la cantidad de personas
    if (!personasInput){
        alert('Se olvidó de ingresar cantidad de personas! Por favor ingrese la cantidad de personas');
        return;
    }

    if (personas <= 0) {
        alert('Por favor ingresar una cantidad de personas mayor a 0');
        return;
    }

    // Mostrar resumen y precio total
    if (precio != 0) {
        resumen = "Tour seleccionado: " + tour + "\nCantidad de personas: " + personas;
        alert('\nEl tour te saldrá $' + (precio * personas) + ' pesos argentinos\n\n' + resumen);
    }
}
