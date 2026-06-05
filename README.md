# Simulador de Crédito Personal (BBVA Style)

¡Bienvenido al repositorio del **Simulador de Crédito Personal**! Este proyecto consiste en una aplicación web interactiva diseñada y construida para modelar el comportamiento de un esquema financiero bancario real, aplicando reglas de negocio de amortización constante, cálculo de intereses sobre saldos insolutos e IVA devengado.

La interfaz visual adopta los lineamientos de la identidad corporativa de **BBVA**, ofreciendo una experiencia limpia, profesional y adaptada tanto para su uso interactivo en pantalla como para la generación de reportes oficiales en formato PDF.

---

## 🚀 Enlaces del Proyecto

* **Repositorio en GitHub:** [https://github.com/LyenZo/Simulador-de-credito-BBVA]
* **Despliegue en Producción (Vercel):** [https://simulador-de-credito-bbva.vercel.app/]

---

## 📊 Características Clave

* **Captura de Parámetros Dinámicos:** Registro del nombre del cliente, monto solicitado, tasa de interés anual ordinaria y plazo de financiamiento (12, 24, 36 o 48 meses).
* **Algoritmo Financiero Automatizado:** Cálculo exacto e instantáneo de la tabla de amortización completa al interactuar con el DOM de forma eficiente.
* **Exportación Limpia a PDF:** Integración de reglas CSS avanzadas para impresión (`@media print`) que ocultan elementos interactivos de la interfaz web (como botones de acción y controles del formulario) y transforman el diseño en un estado de cuenta bancario membretado e institucional, listo para descargar o imprimir con un nombre de archivo normalizado y limpio.
* **Diseño UI/UX Corporativo:** Implementación de la paleta de colores oficial de BBVA (Azul Marino `#072146`, Azul Core `#004481`) utilizando variables CSS (`:root`) para asegurar un código estructurado, mantenible y escalable.

---

## 🧮 Funcionamiento Matemático y Reglas de Negocio

El simulador se rige bajo el esquema de **Amortización Constante a Capital** (pago a capital fijo durante todo el plazo del financiamiento). El ciclo de cálculo opera mes con mes bajo las siguientes fórmulas lógicas:

1.  **Amortización Mensual de Capital (Fija):**
    Amortización = Monto Total del Crédito / Plazo en Meses

2.  **Interés Ordinario del Periodo:** Se calcula directamente sobre el dinero pendiente por pagar al inicio de ese periodo.
    Interés del Mes = Saldo Insoluto × (Tasa Anual Ordinaria / 12)

3.  **Impuesto al Valor Agregado (IVA):** Se aplica la tasa obligatoria del 16% sobre el interés generado en el periodo (no sobre el capital amortizado).
    IVA del Mes = Interés del Mes × 0.16

4.  **Pago Mensual Total:** Suma de la amortización fija, el interés del mes y el IVA correspondiente.
    Pago Total = Amortización + Interés del Mes + IVA del Mes

5.  **Actualización del Saldo Insoluto:** Al cierre de cada periodo se reduce el saldo disponible para el cálculo del siguiente mes.
    Nuevo Saldo Insoluto = Saldo Insoluto Anterior - Amortización

---

## 🛠️ Tecnologías Utilizadas

* **HTML5:** Estructuración semántica de formularios de captura y tablas de datos dinámicas.
* **CSS3:** Maquetación moderna, uso de variables de diseño corporativo y optimización de páginas para formato físico mediante consultas de medios de impresión (`@media print`).
* **JavaScript (Vanilla JS):** Lógica matemática financiera pura, manipulación dinámica del DOM e interactividad del sistema de exportación sin dependencias o librerías externas que ralenticen la carga del sistema.

---

## 💻 Instalación y Uso Local

Si deseas ejecutar o auditar este simulador en tu entorno local, sigue estos pasos:

1. Clonar el repositorio:
   ```bash
   git clone [https://github.com/LyenZo/Simulador-de-credito-BBVA]