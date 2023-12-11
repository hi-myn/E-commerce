function limpa_formulário_cep(){
    document.getElementById('rua').value = (' ')
    document.getElementById('bairro').value = (' ')
    document.getElementById('cidade').value = (' ')
    document.getElementById('Estado').value= ('')
}

function  myCallback(conteudo) {
    if(!("erro" in conteudo)){
        document.getElementById('rua').value=(conteudo.logradouro);
        document.getElementById('bairro').value=(conteudo.bairro);
        document.getElementById('cidade').value=(conteudo.localidade);
        document.getElementById('Estado').value = (conteudo.uf)
    } else {
        limpa_formulário_cep()
        alert("Digite um CEP válido!")
    }
}

function pesquisacep(valor) {
    //variável somente com dígitos.
    var cep = valor.replace(/\D/g, '');

    //Verifica se campo cep possui valor informado.
    if (cep != "") {

        //Expressão regular para validar
        var validaCep = /^[0-9]{8}$/;

        //Valida o formato 
        if(validaCep.test(cep)) {

            //Preenche os campos com "..." enquanto consulta webservice.
            document.getElementById('rua').value="..."
            document.getElementById('bairro').value="..."
            document.getElementById('cidade').value="..."
            document.getElementById('Estado').value= "..."

            //Cria um elemento javascript.
            var script = document.createElement('script');

            //Sincroniza com o callback.
            script.src = `https://viacep.com.br/ws/${cep}/json/?callback=myCallback`;

            //Insere script no documento e carrega o conteúdo.
            document.body.appendChild(script);

        } 
        else {
            limpa_formulário_cep();
            alert("Digite um CEP válido!");
        }
    } 
    else {
        limpa_formulário_cep();
    }
};
