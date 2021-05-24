# 创建时间: 2021/3/16 22:43

"""json格式输出"""


class ResultObj(object):
    def __init__(self):
        # 成功
        self.Success = 1

        # 失败
        self.Fail = 20

        # 参数为空
        self.ParamsNull = 30

        # 没接受
        self.NoAccess = 100

        # Token失效
        self.ErrorToken = 101

        # Session失效
        self.ErrorSession = 102

        # 没有权限
        self.ErrorAuth = 110

    def GetMsg(self):
        Msg = {}
        Msg[self.Success] = "Success"
        Msg[self.Fail] = "Fail"
        return Msg

    def GetResult(self, data):
        dict = {}
        dict["RetCode"] = self.Success
        dict["RetMsg"] = self.GetMsg().get(self.Success)
        dict["retObj"] = data
        return dict


""""字典切片封装"""


def dict_slice(ori_dict, start, end):
    """
    字典类切片
    :param ori_dict: 字典
    :param start: 起始
    :param end: 终点
    :return:
    """
    slice_dict = {k: ori_dict[k] for k in list(ori_dict.keys())[start:end]}
    return slice_dict
