function mostrarFormAdmisionarPaciente(){

    fetch('/partials/formAdmisionarPaciente.html')
    .then( (response)=>response.text() )
    .then( (html)=>{
        document.getElementById('modal-body').innerHTML=html;
        document.getElementById('modalLabel').innerHTML="Admisionando Paciente";

        document.getElementById('modal-dialog').classList.remove('modal-lg');

        const modal = new bootstrap.Modal(document.getElementById('modal'));

        modal.show();
    } );

    
}

function mostrarFormFacturarMedicamento(){
    fetch('/partials/formFacturarMedicamento.html')
    .then( (response)=>response.text() )
    .then( (html)=>{
        document.getElementById('modal-body').innerHTML=html;
        document.getElementById('modalLabel').innerHTML="Facturando Medicamentos";

        document.getElementById('modal-dialog').classList.add('modal-lg');

        const modal = new bootstrap.Modal(document.getElementById('modal'));

        modal.show();
    } );
}