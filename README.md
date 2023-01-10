# Trabalho prático individual - WebServices
    Trabalho prático de WebService utilizando duas ou mais APIs.
    Esse trabalho é a implementação do modo gráfico do comando (mtr/traceroute/tracert)
    dependendo do Sistema Operacional utilizado implementando também a geolocalização de
    cada roteador encontrado no caminho.
    Com a utilização da biblioteca scapy fazendo a construção do cabeçalho dos pacotes,
    a aplicação cria os pacotes e os envia com o ip de destino fornecido, como um traceroute
    normal aumentando de um em um o TTL (Time To Live) do pacote tendo a cada retorno
    possívelmente o IP do roteador em que ele morreu caso o mesmo não esteja como oculto
    na rede.
    O site criado recolhe o ip fornecido pelo usuário e acessa a API criada em python passando
    o IP como parâmetro, esse ip é utilizado para o traceroute como anteriormente citado,
    cada resposta com ip válido é feito uma requisição para API IPInfoDB, que retorna a 
    localização geográfica do roteador encontrado.
    É feito o tratamento dessa resposta e então a API retorna para o site os roteadores não
    ocultos e suas respectivas localizações. 

    Pela utilização da biblioteca Scapy que trabalha nas camadas inferiores de rede, o
    projeto deve ser executado em modo root, no linux podemos colocar o comando sudo
    ao inicio da linha de comando. (Deve-se fazer uma reconfiguração no comando sudo
    para execução de todas as bibliotecas de forma correta)

    Reconfiguração do "sudo"
    
    $ sudo visudo
    
    Alterar a linha:
        "Default  env_reset" para "Default   !env_reset"
    
    Comentar a linha:
        "#Defaults  secure_path="/usr/local/sbin:/usr/local/bin:/usr/sbin:/usr/bin:/sbin:/bin:/snap/bin""

    Saia do Vim salvando o arquivo.

    (Não é recomendado fazer essa reconfiguração caso não tenha um conhecimento prévio sobre
    Linux, essa reconfiguração desconsidera possíveis bloqueios ao utilizar o comando $ sudo.
    Não esqueça de voltar o arquivo para seu estado original quando terminar de testar o
    projeto, voltando as duas linhas alteradas ao que eram antes.)

    Após fazer as alterações nas configurações "sudo", podemos configurar o ambiente python.

<~~~~~~~ ## CRIANDO AMBIENTE PYTHON ## ~~~~~~~>

    $ conda create --name nome_ambiente

<~~~~~~~~~~ ## ACESSANDO AMBIENTE ## ~~~~~~~~~>

    $ conda activate nome_ambiente


    Este projeto contém algumas bibliotecas python em sua estrutura e APIs externas para seu
    funcionamento, abaixo há algumas instruções para a instalação dessas bibliotecas. Também
    contém o link para a API.

<~~~~~~~~ ## BIBLIOTECAS UTILIZADAS ## ~~~~~~~>

    Biblioteca Scapy      (Criação de Pacotes)

    Biblioteca requests   (Requisições externas)

    Biblioteca json   (Tratamento de JSON)

    Biblioteca Flask   (Criação e manipulação de API)

    Instalando bibliotecas
        $ pip install -r requirements.txt
    
<~~~~ ## A API IPifoDB ## ~~~~>

    A API de geolocalização consta com alguns requisitos para seu funcionamento, incluindo eles:

    Link -> https://api.ipinfodb.com/v3/ip-city?key=[key]&ip=[ip_request]  

<~~~~ ## IPs PARA TESTES ## ~~~~>

    IPs para teste:

        www.google.com      -> 8.8.8.8
        cpentalk.com        -> 104.21.11.36
        www.youtube.com     -> 142.251.128.14
        github.com          -> 20.201.28.151
        stackoverflow.com   -> 151.101.129.69
