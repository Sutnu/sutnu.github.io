
document.getElementById('nombredelaempresa').addEventListener('input', function () {
    this.classList.add('red-text');
});

function mostrarImagen(button, inputId, previewId) {
    var input = document.getElementById(inputId);
    var preview = document.getElementById(previewId);

    input.onchange = function () {
        if (input.files && input.files[0]) {
            var reader = new FileReader();

            reader.onload = function (e) {
                preview.src = e.target.result;
                button.style.display = 'none'; // Ocultar el botón específico después de seleccionar la imagen
            };

            reader.readAsDataURL(input.files[0]);
        }
    };

    input.click(); // Simular clic en el input file
}

 const canvas = document.getElementById('graph');
    const ctx = canvas.getContext('2d');
    const padding = 40; // Padding around the graph
    const graphWidth = canvas.width - 2 * padding;
    const graphHeight = canvas.height - 2 * padding;

    function drawPoint(x, y) {
        ctx.clearRect(0, 0, canvas.width, canvas.height);

        // Draw Y axis
        ctx.beginPath();
        ctx.moveTo(padding, padding);
        ctx.lineTo(padding, canvas.height - padding);
        ctx.stroke();

        // Draw Y labels
        ctx.save();
        ctx.translate(10, canvas.height / 2);
        ctx.rotate(-Math.PI / 2);
        ctx.textAlign = "center";
        ctx.fillText("Kilos", 0, 0);
        ctx.restore();

        // Draw X axis
        ctx.beginPath();
        ctx.moveTo(padding, canvas.height - padding);
        ctx.lineTo(canvas.width - padding, canvas.height - padding);
        ctx.stroke();

        // Draw X labels
        ctx.textAlign = "center";
        ctx.fillText("", canvas.width / 2, canvas.height - 10);

        // Draw point
        ctx.beginPath();
        ctx.arc(padding + (x / 7) * graphWidth, canvas.height - padding - (y / 55) * graphHeight, 5, 0, 2 * Math.PI);
        ctx.fillStyle = 'black';
        ctx.fill();
    }

    // Initial point at the bottom-left corner
    drawPoint(0, 0);

    // Update the point
    const xInput = document.getElementById('x-input');
    const yInput = document.getElementById('y-input');

    function updatePoint() {
        const x = parseInt(xInput.value);
        const y = parseInt(yInput.value);

        drawPoint(x, y);
    }

    xInput.addEventListener('input', updatePoint);
    yInput.addEventListener('input', updatePoint);