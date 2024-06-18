function cotizar() {
    var checkboxes = document.querySelectorAll('input[type="checkbox"]:checked');
    var tour = Array.from(checkboxes).map(checkbox => checkbox.value.toLowerCase());
    var personasInput = document.getElementById('personas').value;
    var personas = parseInt(personasInput, 10);
    var precioTotal = 0;
    var resumen = '';

    // Diccionario de combinaciones de tours y sus precios
    var tours = {
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

    // Calcular el precio total basado en las combinaciones seleccionadas
    if (tour in tours) {
        precio = tours[tour];
    } else {
        alert('El tour ingresado no es válida! \nPor favor volvé a intentar');
        return;
    }

    // Mostrar resumen y precio total
    if (precioTotal != 0) {
        resumen = "Tour seleccionado: " + tour + "\nCantidad de personas: " + personas;
        alert('\nEl tour te saldrá $' + (precio * personas) + ' pesos argentinos\n\n' + resumen);
    }
}
