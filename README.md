# Trabalho prático individual - WebServices
    Com a utilização da biblioteca scapy, que faz a construção do cabeçalho do pacote,
    o projeto deve ser executado em modo root, no linux podemos colocar o comando sudo
    ao inicio da linha de comando. (Deve-se fazer uma reconfiguração no comando sudo
    para execução de todas as bibliotecas de forma correta)

    Reconfiguração do "sudo"
    
        $ sudo visudo
        
        Alterar a linha:
            "Default  env_reset" para "Default   !env_reset"
        
        Comentar a linha:
            "#Defaults  secure_path="/usr/local/sbin:/usr/local/bin:/usr/sbin:/usr/bin:/sbin:/bin:/snap/bin""

        Saia do Vim salvando o arquivo.

        (Não recomendo fazer essa reconfiguração caso não tenha um conhecimento prévio sobre
        Linux. Faça por sua conta em risco.
        Não esqueça de voltar o arquivo para seu estado original quando terminar de testar o
        projeto, voltando as duas linhas alteradas ao que eram antes.)



    Após fazer as alterações nas configurações "sudo", você já pode rodar o script python

    $ sudo python3 tr-map.py


    Este projeto contém algumas bibliotecas python em sua estrutura e APIs externas para seu
    funcionamento, abaixo há algumas instruções para a instalação dessas bibliotecas. Também
    contém o link para a API.
    
<~~~~ ## A API IPifoDB ## ~~~~>
A API de geolocalização consta com alguns requisitos para seu funcionamento, incluindo eles:

    Link Utilizado -> https://api.ipinfodb.com/v3/ip-city?key=[key]&ip=[ip_request]  
    A chave ID de cadastro -> f5ad2b83006363b9227f48569c02468389c49dd65363884ef06598945e9d187d
        
<~~~~~~~ ## CRIANDO AMBIENTE PYTHON ## ~~~~~~~>

        $ conda create --name nome_ambiente

<~~~~~~~~~~ ## ACESSANDO AMBIENTE ## ~~~~~~~~~>

        $ conda activate nome_ambiente

<~~~~~~~~ ## BIBLIOTECAS UTILIZADAS ## ~~~~~~~>

    Biblioteca Scapy      (Criação de Pacotes)

    Biblioteca requests   (Requisições externas)

    Biblioteca json   (Tratamento de JSON)

    Biblioteca Flask   (Criação e manipulação de API)

    Instalando bibliotecas
        $ pip install -r requirements.txt

<~~~~ ## IPs PARA TESTES ## ~~~~>
    IPs para teste:
        www.google.com      -> 8.8.8.8
        cpentalk.com        -> 104.21.11.36
        www.youtube.com     -> 142.251.128.14
        github.com          -> 20.201.28.151
        stackoverflow.com   -> 151.101.129.69

<~~~~~~~~~~~ ## APIs UTILIZADAS ## ~~~~~~~~~~~>
    API geolocalização por IP, utilizada para fazer as requisições de localização do sistema

IPInfoDB -> https://www.ipinfodb.com/
