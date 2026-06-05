document.getElementById('btn-calcular').addEventListener('click', procesarSimulacion);
document.getElementById('btn-pdf').addEventListener('click', exportarPDF);

let simulacionCalculada = false;

function procesarSimulacion() {
    const nombreInput = document.getElementById('nombre').value.trim();
    const montoInput = parseFloat(document.getElementById('monto').value);
    const tasaAnualInput = parseFloat(document.getElementById('tasa').value) / 100;
    const plazoMeses = parseInt(document.getElementById('plazo').value);
    const IVA_VALOR = 0.16;

    if (!nombreInput) {
        alert("Por favor, ingrese el nombre del cliente.");
        return;
    }

    if (isNaN(montoInput) || isNaN(tasaAnualInput) || montoInput <= 0) {
        alert("Ingrese parámetros numéricos válidos e intente nuevamente.");
        return;
    }

    const amortizacionCapital = montoInput / plazoMeses;
    const tasaMensualEquivalente = tasaAnualInput / 12;
    
    let saldoInsoluto = montoInput;
    const tablaBody = document.querySelector('#tabla-amortizacion tbody');
    tablaBody.innerHTML = ''; 
    
    for (let periodo = 1; periodo <= plazoMeses; periodo++) {
        const interesDelPeriodo = saldoInsoluto * tasaMensualEquivalente;
        const ivaSobreInteres = interesDelPeriodo * IVA_VALOR;
        const pagoMensualTotal = amortizacionCapital + interesDelPeriodo + ivaSobreInteres;
        
        saldoInsoluto -= amortizacionCapital;
        if (saldoInsoluto < 0.01) saldoInsoluto = 0; 

        tablaBody.innerHTML += `
            <tr>
                <td>${periodo}</td>
                <td>$${amortizacionCapital.toFixed(2)}</td>
                <td>$${interesDelPeriodo.toFixed(2)}</td>
                <td>$${ivaSobreInteres.toFixed(2)}</td>
                <td><strong>$${pagoMensualTotal.toFixed(2)}</strong></td>
                <td>$${saldoInsoluto.toFixed(2)}</td>
            </tr>
        `;
    }

    simulacionCalculada = true;
}

function exportarPDF() {
    const nombreInput = document.getElementById('nombre').value.trim();

    if (!simulacionCalculada) {
        alert("Primero debe hacer clic en 'Calcular Tabla' antes de exportar el PDF.");
        return;
    }

    if (!nombreInput) {
        alert("Por favor, ingrese el nombre del cliente.");
        return;
    }


    const tituloOriginal = document.title;


    const nombreArchivo = nombreInput.replace(/\s+/g, '_');
    document.title = `Simulacion_Credito_${nombreArchivo}`;


    window.print();

    document.title = tituloOriginal;
}