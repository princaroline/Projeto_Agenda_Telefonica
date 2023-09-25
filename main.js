const form= document.getElementById ('form-contato'); /*criação constante formulario*/

let linhas= ''; /* config o acrescimo de linhas conforme inclusão de dados*/

form.addEventListener ('submit', function(e){ /*criação evento submit */
    e.preventDefault(); /*criação função para remoção do comportamento de atualização de pagina quando submetido*/

    const inputNomeContato= document.getElementById('nome-contato');
    const inputNumTel= document.getElementById('num-tel');

    let linha=`<tr>`; /* config conteudo que será inserido na tabela*/
    linha+= `<td>${inputNomeContato.value}</td>`;
    linha+= `<td>${inputNumTel.value}</td>`;
    linha+= `</tr>`;

    linhas+=linha;
    
    const corpoTabela = document.querySelector('tbody'); 
    corpoTabela.innerHTML = linhas; /* inclui a config da linha no corpo da tabela*/

    inputNomeContato.value = ''; /*limpa campo ao final*/
    inputNumTel.value = '';   /*limpa campo ao final*/
});

