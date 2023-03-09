const contactForm = document.getElementById ("contact-form");

contactForm.addEventListener("submit", handleContactSubmit);

function handleContactSubmit(event) {
    event.preventDefault ();

    const name = contactForm.elements ["name"].value;
    const adress = contactForm.elements ["adress"].value;
    const date = contactForm.elements ["date"].value;
    const cpf = contactForm.elements ["cpf"].value;
    const email = contactForm.elements ["email"].value;
    const message = contactForm.elements ["message"].value;

    const result = `Nome: ${name}\nEndereço: ${adress}\nNascimento: ${date}\nCPF: ${cpf}\nEmail: ${email}\nMensagem: ${message}`;

    alert(result);
}

const value_cpf = document.getElementById ('cpf');

 value_cpf.addEventListener("keydown", function(e) {
   if (e.key > "a" && e.key < "z") {
     e.preventDefault();
   }
 });
value_cpf.addEventListener("blur", function(e) {
     //Remove tudo o que não é dígito
     let validar_cpf = this.value.replace( /\D/g , "");

     //verificação da quantidade números
     if (validar_cpf.length==11){

     // verificação de CPF valido
      var Soma;
      var Resto;

      Soma = 0;
      for (i=1; i<=9; i++) Soma = Soma + parseInt(validar_cpf.substring(i-1, i)) * (11 - i);
         Resto = (Soma * 10) % 11;

      if ((Resto == 10) || (Resto == 11))  Resto = 0;
      if (Resto != parseInt(validar_cpf.substring(9, 10)) ) return alert("CPF Inválido!");;

      Soma = 0;
      for (i = 1; i <= 10; i++) Soma = Soma + parseInt(validar_cpf.substring(i-1, i)) * (12 - i);
      Resto = (Soma * 10) % 11;

      if ((Resto == 10) || (Resto == 11))  Resto = 0;
      if (Resto != parseInt(validar_cpf.substring(10, 11) ) ) return alert("CPF Inválido!");;

      //formatação final
      cpf_final = validar_cpf.replace( /(\d{3})(\d)/ , "$1.$2");
      cpf_final = cpf_final.replace( /(\d{3})(\d)/ , "$1.$2");
      cpf_final = cpf_final.replace(/(\d{3})(\d{1,2})$/ , "$1-$2");
      document.getElementById('campo_cpf').value = cpf_final;

     } else {
       alert("CPF Inválido! É esperado 11 dígitos numéricos.")
     }   

 })
