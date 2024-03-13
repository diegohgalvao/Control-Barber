function submitForm(){
    const nomeResponsavel = document.getElementById("nomeCompleto").value;
    const nomeBarbearia = document.getElementById("nomeBarbearia").value;
    const cnpjBarbearia = document.getElementById("cnpjBarbearia").value;
    const telefoneBarbearia = document.getElementById("telefoneBarbearia").value;
    const emailBarbearia = document.getElementById("emailBarbearia").value;

    const nome = localStorage.setItem("nome", nomeResponsavel)
    const barbearia = localStorage.setItem("barbearia", nomeBarbearia)
    const cnpj = localStorage.setItem("cnpj", cnpjBarbearia)
    const telefone = localStorage.setItem("telefone", telefoneBarbearia)
    const email = localStorage.setItem("email", emailBarbearia)
}

function escolherPlano (){
    
}



