document.addEventListener('DOMContentLoaded', function() {
    var ListaCitas = document.getElementById('ListaCitas');
    var citas = JSON.parse(localStorage.getItem('dato_citas')) || [];
    
    if (citas.length === 0) {
        ListaCitas.innerHTML = '<p>No hay citas agendadas.</p>';
    } else {
        citas.forEach(function(cita) {
            var citaDiv = document.createElement('div');
            citaDiv.classList.add('cita');
            
            var fechaPara = document.createElement('p');
            fechaPara.classList.add('fecha');
            fechaPara.textContent = 'Fecha: ' + cita.fecha;
            citaDiv.appendChild(fechaPara);
            
            var horaPara = document.createElement('p');
            horaPara.classList.add('hora');
            horaPara.textContent = 'Hora: ' + cita.hora;
            citaDiv.appendChild(horaPara);
            
            var psicoPara = document.createElement('p');
            psicoPara.classList.add('psico');
            psicoPara.textContent = 'Psico: ' + cita.psico;
            citaDiv.appendChild(psicoPara);
            
            var estudiantePara = document.createElement('p');
            estudiantePara.classList.add('estudiante');
            estudiantePara.textContent = 'Estudiante: ' + cita.estudiante;
            citaDiv.appendChild(estudiantePara);
            
            ListaCitas.appendChild(citaDiv);
        });
    }
});
