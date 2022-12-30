from scapy.all import *
import requests


for i in range(1,100):
    pkt = IP(dst="8.8.8.8",ttl=i) / UDP(dport=40000)
    reply = sr1(pkt, verbose=0)





















#locationLink = 'https://api.ipinfodb.com/v3/ip-city?key=f5ad2b83006363b9227f48569c02468389c49dd65363884ef06598945e9d187d&ip='


#ip = input("Forneça o IP: ")

#listLocation = []
#location = []

#for i in range(1,100):
#    pkt = IP(dst=ip, ttl=i) / UDP(dport=40404)
#
#    reply = sr1(pkt, verbose=0)
#    if reply is None:
#        break
#    print("ip do ", i, "º salto: ", reply.src)

    #completeLink = locationLink + reply.src
    #stringLocation = requests(completeLink)