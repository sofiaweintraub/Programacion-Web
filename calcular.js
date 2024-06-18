function cotizar() {
    var tourSelect = document.getElementById('tour');
    var selectedTours = Array.from(tourSelect.selectedOptions).map(option => option.value.toLowerCase());
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
        'todos': 90000,
    };

    // Validar las selecciones de tours
    if (selectedTours.length === 0) {
        alert('Por favor seleccioná al menos un tour');
        return;
    }

    // Validar la cantidad de personas
    if (!personasInput || isNaN(personas) || personas <= 0) {
        alert('Por favor ingrese una cantidad válida de personas mayor a 0');
        return;
    }

    // Calcular el precio total basado en las combinaciones seleccionadas
    for (var tour of selectedTours) {
        if (tour in tourCombinations) {
            precioTotal += tourCombinations[tour];
        } else {
            alert('Uno o más tours seleccionados no son válidos');
            return;
        }
    }

    // Mostrar resumen y precio total
    if (precioTotal != 0) {
        resumen = "Tours seleccionados: " + selectedTours.join(', ') + "\nCantidad de personas: " + personas;
        alert('\nEl tour te saldrá $' + (precioTotal * personas) + ' pesos argentinos\n\n' + resumen);
    }
}
