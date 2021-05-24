# 创建时间: 2021/4/2 12:13

import hashlib
import random
import socket
import uuid

import requests
from fake_useragent import UserAgent

ua = UserAgent()
headers = {'User-Agent': ua.random}

"""@百度翻译"""


def translate(q, lan_to="zh", lan_from="auto"):
    url = 'http://api.fanyi.baidu.com/api/trans/vip/translate'
    appid = 20210401000757212
    appkey = "4dyBrna0w29WZNk2RoGd"
    salt = random.randint(1, 65536)
    sign = hashlib.md5((str(appid) + str(q) + str(salt) + str(appkey)).encode('utf-8')).hexdigest()
    params = {
        'q': q,
        'from': lan_from,
        'to': lan_to,
        'appid': appid,
        'salt': salt,
        'sign': sign,
    }
    response = requests.get(url, headers=headers, params=params)
    txt = response.json()
    if txt.get('trans_result', -1) == -1:
        return "未知"
    return txt['trans_result'][0].get("dst", "未知")


'''@获取私网地址'''


def GetInnerIP():
    IP_dict = {}
    try:
        s = socket.socket(socket.AF_INET, socket.SOCK_DGRAM)
        s.connect(('8.8.8.8', 8080))
        ip = s.getsockname()[0]
        IP_dict["IP"] = ip
        IP_dict["hostname"] = socket.gethostname()
    finally:
        s.close()
    return IP_dict


"""@获取公网地址"""


def GetOutIP():
    try:
        url = "http://api.guajicun.com/GetIp/default.aspx?queryIp=127.0.0.1"
        data = {'app': 'ip.local', 'appkey': '10003',
                'sign': 'b59bc3ef6191eb9f747dd4e83c99f2a4', 'format': 'json',
                }
        headers = {'User-Agent': ua.random}
        response = requests.post(url, headers=headers, data=data)
        return response.json().get("result")
    except Exception as  e:
        print(e)
    return e


"""@获取IP地址"""


def GetIPAdress(IP):
    '''
    测试查找IP地址
    '''
    url = "http://api.guajicun.com/GetIp/default.aspx?queryIp="+IP
    response = requests.get(url)
    return response.json()["data"][0]


def GetMac():
    try:
        mac = uuid.UUID(int=uuid.getnode()).hex[-12:].upper()
        FormatMac = "%s:%s:%s:%s:%s:%s" % (mac[0:2], mac[2:4], mac[4:6], mac[6:8], mac[8:10], mac[10:])
    except:
        FormatMac = None
    return FormatMac
