function actualizarMarcas() {
    var tipoVehiculo = document.getElementById("tipo").value;
    var selectMarcas = document.getElementById("marca");
    selectMarcas.innerHTML = ""; // Limpiar opciones actuales
    switch (tipoVehiculo) {
        case "trailer":
            // Agregar opciones para marcas de trailers
            var option1 = document.createElement("option");
            option1.text = "Schmitz";
            option1.value = "schmitz";
            selectMarcas.add(option1);
            var option2 = document.createElement("option");
            option2.text = "Krone";
            option2.value = "krone";
            selectMarcas.add(option2);
            var option3 = document.createElement("option");
            option3.text = "Guillen";
            option3.value = "guillen";
            selectMarcas.add(option3);
            var option4 = document.createElement("option");
            option4.text = "Lecitrailer";
            option4.value = "lecitrailer";
            selectMarcas.add(option4);
            break;
        case "camion":
        case "jumbo":
            // Agregar opciones para marcas de camiones y jumbos
            var option1 = document.createElement("option");
            option1.text = "Iveco";
            option1.value = "iveco";
            selectMarcas.add(option1);
            var option2 = document.createElement("option");
            option2.text = "Scania";
            option2.value = "scania";
            selectMarcas.add(option2);
            var option3 = document.createElement("option");
            option3.text = "Mercedes";
            option3.value = "mercedes";
            selectMarcas.add(option3);
            var option4 = document.createElement("option");
            option4.text = "Man";
            option4.value = "man";
            selectMarcas.add(option4);
            var option5 = document.createElement("option");
            option5.text = "Daf";
            option5.value = "daf";
            selectMarcas.add(option5);
            break;
            // Otras opciones de tipos de vehículos...
    }
}