#coding: utf-8

from scapy.all import *

import requests

import json
from flask import Flask
from flask import request
from flask_cors import CORS, cross_origin

app = Flask(__name__)
CORS(app, supports_credentials=True)

list_Ips = []

urlIpInfo_1 = 'https://api.ipinfodb.com/v3/ip-city?key=f5ad2b83006363b9227f48569c02468389c49dd65363884ef06598945e9d187d&ip='
urlIpInfo_2 = '&format=json'

def callApi(reply):
    #Link completo para API IPInfoDB
    completeLink = urlIpInfo_1 + reply.src + urlIpInfo_2

    req = requests.get(completeLink)
    resp = json.loads(req.text)

    currentIP = {"IP": resp["ipAddress"], "Coord": {"lat": resp["latitude"], "lon": resp["longitude"]}}

    list_Ips.append(currentIP)

#def myTraceroute(ipDst):

    for i in range(1,100):
        pkt = IP(dst=ipDst, ttl=i) / UDP(dport=33434)
        reply = sr1(pkt, verbose=0)
        
        #Retorno vazio, erro ou perdido
        if reply is None:
            break

        callApi(reply)

        #Resposta com IP de destino
        if reply.type == 3:
            break

    #return list_Ips


@app.route('/route/<ipDst>', methods=['GET'])
def getRoute(ipDst):

    #Reset da lista
    list_Ips.clear

    #return myTraceroute(ipDst)

    print(ipDst)
    return ipDst

if __name__ == "__main__":
    app.run(debug=True)