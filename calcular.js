function cotizar() {
    var tour = document.getElementById('tour').value.toLowerCase();
    var personasInput = document.getElementById('personas').value;
    var personas = parseInt(personasInput, 10);
    var precioTotal = 0;
    var resumen = '';

    // Diccionario de combinaciones de tours y sus precios
    var tourCombinations = {
        'boca juniors': 40000,
        'river plate': 40000,
        'maradona': 60000,
        'boca juniors y river plate': 75000,
        'todos los tours': 90000,
    };

    // Validar la cantidad de personas
    if (!personasInput || isNaN(personas) || personas <= 0) {
        alert('Por favor ingrese una cantidad válida de personas mayor a 0');
        return;
    }

    // Validar eleccion de tour
    if (!(tour in tourCombinations)) {
        alert('Por favor seleccione un tour válido');
        return;
    }
    

    precioTotal = tourCombinations[tour];

    // Mostrar resumen y precio total
    if (precioTotal != 0) {
        resumen = "Tours seleccionados: " + tour + "\nCantidad de personas: " + personas;
        alert('\nEl tour te saldrá $' + (precioTotal * personas) + ' pesos argentinos\n\n' + resumen);
    }
}
