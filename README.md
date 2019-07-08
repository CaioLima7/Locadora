# Locadora


Para poder rodar o projeto deve-se fazer os seguintes passos:


Instalar o node: https://nodejs.org/en/download/

Abrir pasta ClientApp usando cmd e executar o seguinte comando: npm update

instalar npm do viacep usando o seguinte comando: npm install @brunoc/ngx-viacep --save

toastr: npm install ngx-toastr --save

abrir conexão com banco e executar query:

    insert into TurboLocat..Produtos values ('Interestelar','Descricao', 100, 99, 1)

    insert into TurboLocat..aspnetroles values ('1', 'admin', 'admin', null)
    
    
    
OBS: Homologado apenas google chrome, pois deve ser configurado o cors junto com token.
    
    
TODO: Configurar cors com token, fazer todos di, refatorar typescript, adicionar loadchildren para desacoplar, mais regras de negócio, 
tela admintrativa, colocar conteúdo para tela "processado" que irá mostrar o número do pedido e enviar e-mail ao cliente.
