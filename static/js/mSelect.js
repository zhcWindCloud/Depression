/*Select Skin 101029(AngusYoung)*/
function mSelect(cVarName, cStylePath) {
    var newStyle;
    var oHead = document.getElementsByTagName('head')[0];
    var aLink = oHead.getElementsByTagName('link');
    for (var i = 0; i < aLink.length; i++) {
        if (aLink[i].href == cStylePath) {
            newStyle = true;
            break;
        }
    }
    if (!newStyle) {
        newStyle = document.createElement('link');
        newStyle.type = 'text/css';
        newStyle.rel = 'stylesheet';
        newStyle.href = cStylePath;
        oHead.appendChild(newStyle);
    }
    this.oo = cVarName;
}

mSelect.prototype = {
    Create: function (oSelect, cStyleName, lGlide) {
        var _this = this;
        if (oSelect.tagName.toLowerCase() == 'select') {
            var cSelectID = 'mSel_' + Math.round(Math.random() * 1000 + 1);
            oSelect.setAttribute('mSelectID', cSelectID);
            oSelect.style.display = 'none';
            var _select = document.createElement('span');
            _select.setAttribute('name', oSelect.name + '_mSel');
            _select.className = cStyleName + '_mSel_main';
            var nNormal = oSelect.selectedIndex;
            _select.innerHTML = '<a>' + oSelect.options[nNormal].text + '</a>';
            oSelect.parentNode.insertBefore(_select, oSelect);
            if (!oSelect.disabled) {
                _select.onclick = function () {
                    mSel_stopBubble(arguments[arguments.length - 1]);
                    _this.Show(this, lGlide);
                };
                var _select_list = document.createElement('ul');
                _select_list.className = cStyleName + '_mSel_list';
                var cResult = '';
                for (var i = 0; i < oSelect.length; i++) {
                    cResult += '<li';
                    if (i == nNormal) {
                        cResult += ' class="mSel_on"';
                    }
                    cResult += '><a';
                    if (oSelect.options[i].disabled) {
                        cResult += ' class="mSel_disable"';
                    } else {
                        cResult += ' href="mSelect://this" title="' + oSelect.options[i].text + '" target="_blank" onclick="return ' + _this.oo + '.Selected(this.parentNode,' + _this.oo + '.getSelectID(\'' + cSelectID + '\'),' + i + ');"';
                    }
                    cResult += '>' + oSelect.options[i].text + '</a></li>';
                }
                _select_list.innerHTML = '<li class="mSel_start"></li>' + cResult + '<li class="mSel_end"></li>';
                oSelect.parentNode.insertBefore(_select_list, oSelect);
            }
            _this.Listen(oSelect);
        }
    },
    Show: function (oObj, lGlide) {
        var _this = this;
        var oSel_List = mSel_MoveNode(oObj, 1);
        var aSel_List_item = oSel_List.getElementsByTagName('li');
        _this.SelectedIndex = mSel_MoveNode(oSel_List, 1).selectedIndex;
        _this.Hover(aSel_List_item[_this.SelectedIndex + 1]);
        var fDocClick = document.documentElement.onclick || function () {
        };
        if (_this.ShowWhat == oSel_List) {
            fDocClick();
        } else {
            fDocClick();
            _this.ShowWhat = oSel_List;
            oSel_List.style.top = mSel_SeekTp(oObj, 2) - 1 + 'px';
            oSel_List.style.left = mSel_SeekTp(oObj, 3) + 'px';
            oSel_List.style.display = 'block';
            if (lGlide) {
                var nSourceHei = mSel_GetInnerSize(oSel_List, 1);
                oSel_List.style.overflow = 'hidden';
                oSel_List.style.height = '0px';
                _this.Glide(oSel_List, nSourceHei, nSourceHei, 20);
                document.documentElement.onclick = function () {
                    if (_this.ShowWhat) {
                        clearTimeout(_this.Timer);
                        _this.ShowWhat.style.overflow = 'hidden';
                        _this.Glide(_this.ShowWhat, nSourceHei, 0, 20);
                        _this.ShowWhat = null;
                    }
                };
            } else {
                document.documentElement.onclick = function () {
                    if (_this.ShowWhat) {
                        _this.ShowWhat.style.display = 'none';
                        _this.ShowWhat = null;
                    }
                };
            }
            fDocClick = document.documentElement.onclick;
            document.documentElement.onclick = function () {
                document.documentElement.onkeydown = null;
                fDocClick();
            }
            document.documentElement.onkeydown = function () {
                var e = arguments[arguments.length - 1];
                var evt = e || window.event;
                switch (evt.keyCode) {
                    case 13:/*ENTER*/
                        _this.Selected(aSel_List_item[_this.SelectedIndex + 1], mSel_MoveNode(oSel_List, 1), _this.SelectedIndex);
                        var fRun = document.documentElement.onclick || function () {
                        };
                        fRun();
                        break;
                    case 38:/*UP*/
                        if (_this.SelectedIndex > 0) {
                            _this.gotoActive(aSel_List_item, 0);
                        }
                        break;
                    case 40:/*DOWN*/
                        if (_this.SelectedIndex < aSel_List_item.length - 3) {
                            _this.gotoActive(aSel_List_item, 1);
                        }
                        break;
                }
                _this.Hover(aSel_List_item[_this.SelectedIndex + 1]);
                return false;
            };
        }
    },
    Selected: function (oItemObj, oSelect, nValue) {
        var _this = this;
        if (oSelect.selectedIndex !== nValue) {
            oSelect.selectedIndex = nValue;
            if (oSelect.onchange) {
                oSelect.onchange();
            }
            _this.Hover(oItemObj);
            mSel_MoveNode(oItemObj.parentNode, -1).innerHTML = '<a>' + oSelect.options[nValue].text + '</a>';
        }
        return false;
    },
    Glide: function (oObj, nShei, nThei, nTime) {
        var _this = this;
        var nSteps = Math.round(200 / nTime);
        if (nThei == 0) {
            nSteps /= 2;
            if (mSel_GetInnerSize(oObj, 1) > Math.round(nShei / nSteps)) {
                oObj.style.height = mSel_GetInnerSize(oObj, 1) - Math.round(nShei / nSteps) + 'px';
                _this.Timer = setTimeout(function () {
                    _this.Glide(oObj, nShei, nThei, nTime);
                }, nTime);
            } else {
                oObj.style.height = nShei + 'px';
                oObj.style.overflow = 'visible';
                oObj.style.display = 'none';
            }
        } else {
            if (mSel_GetInnerSize(oObj, 1) < nThei - Math.round(nShei / nSteps)) {
                oObj.style.height = mSel_GetInnerSize(oObj, 1) + Math.round(nShei / nSteps) + 'px';
                _this.Timer = setTimeout(function () {
                    _this.Glide(oObj, nShei, nThei, nTime);
                }, nTime);
            } else {
                oObj.style.height = nShei + 'px';
                oObj.style.overflow = 'visible';
            }
        }
    },
    gotoActive: function (aList_item, nStep) {
        var _this = this;
        if (nStep == 0) {
            for (var i = _this.SelectedIndex; i > 0; i--) {
                if (aList_item[i].getElementsByTagName('a')[0].className !== 'mSel_disable') {
                    return _this.SelectedIndex = i - 1;
                }
            }
        } else {
            for (var i = _this.SelectedIndex + 2; i < aList_item.length - 1; i++) {
                if (aList_item[i].getElementsByTagName('a')[0].className !== 'mSel_disable') {
                    return _this.SelectedIndex = i - 1;
                }
            }
        }
    },
    Hover: function (oObj) {
        var aList = oObj.parentNode.getElementsByTagName(oObj.tagName);
        for (i = 0; i < aList.length; i++) {
            if (aList[i].className == 'mSel_on') {
                aList[i].className = null;
            }
        }
        oObj.className = 'mSel_on';
    },
    Listen: function (oObj) {
        if (oObj.form) {
            if (oObj.form.getAttribute('mLit') !== 'yes') {
                var fFormReSet = oObj.form.onreset || function () {
                };
                oObj.form.onreset = function () {
                    setTimeout(function () {
                        var aS = oObj.form.getElementsByTagName('select');
                        for (var i = 0; i < aS.length; i++) {
                            var oMSel = mSel_MoveNode(mSel_MoveNode(aS[i], -1), -1);
                            if (oMSel.getAttribute('name') == aS[i].name + '_mSel') {
                                oMSel.innerHTML = '<a>' + aS[i].options[aS[i].selectedIndex].text + '</a>';
                            }
                        }
                        fFormReSet();
                    }, 100);
                };
                oObj.form.setAttribute('mLit', 'yes');
            }
        }
    },
    getSelectID: function (cID) {
        var aS = document.getElementsByTagName('select');
        for (var i = 0; i < aS.length; i++) {
            if (aS[i].getAttribute('mSelectID') == cID) {
                return aS[i];
            }
        }
    }
};

function mSel_GetCss(oObj, cAttrib) {
    var AttValue = oObj.currentStyle ? oObj.currentStyle[cAttrib] : document.defaultView.getComputedStyle(oObj, null)[cAttrib];
    return isNaN(parseInt(AttValue, 10)) ? AttValue.toLowerCase() : parseInt(AttValue, 10);
}

function mSel_GetInnerSize(oObj, nSize) {
    if (nSize = 0) {
        var nResult = oObj.offsetWidth;
        if (!isNaN(parseInt(mSel_GetCss(oObj, 'paddingLeft'), 10))) {
            nResult -= mSel_GetCss(oObj, 'paddingLeft');
        }
        if (!isNaN(parseInt(mSel_GetCss(oObj, 'paddingRight'), 10))) {
            nResult -= mSel_GetCss(oObj, 'paddingRight');
        }
        if (!isNaN(parseInt(mSel_GetCss(oObj, 'borderLeftWidth'), 10))) {
            nResult -= mSel_GetCss(oObj, 'borderLeftWidth');
        }
        if (!isNaN(parseInt(mSel_GetCss(oObj, 'borderRightWidth'), 10))) {
            nResult -= mSel_GetCss(oObj, 'borderRightWidth');
        }
    } else {
        var nResult = oObj.offsetHeight;
        if (!isNaN(parseInt(mSel_GetCss(oObj, 'paddingTop'), 10))) {
            nResult -= mSel_GetCss(oObj, 'paddingTop');
        }
        if (!isNaN(parseInt(mSel_GetCss(oObj, 'paddingBottom'), 10))) {
            nResult -= mSel_GetCss(oObj, 'paddingBottom');
        }
        if (!isNaN(parseInt(mSel_GetCss(oObj, 'borderTopWidth'), 10))) {
            nResult -= mSel_GetCss(oObj, 'borderTopWidth');
        }
        if (!isNaN(parseInt(mSel_GetCss(oObj, 'borderBottomWidth'), 10))) {
            nResult -= mSel_GetCss(oObj, 'borderBottomWidth');
        }
    }
    return nResult;
}

function mSel_SeekTp(oObj, nDire) {
    if (oObj.getBoundingClientRect && !document.all) {
        var oDc = document.documentElement;
        switch (nDire) {
            case 0:
                return oObj.getBoundingClientRect().top + oDc.scrollTop;
            case 1:
                return oObj.getBoundingClientRect().right + oDc.scrollLeft;
            case 2:
                return oObj.getBoundingClientRect().bottom + oDc.scrollTop;
            case 3:
                return oObj.getBoundingClientRect().left + oDc.scrollLeft;
        }
    } else {
        if (nDire == 1 || nDire == 3) {
            var nPosition = oObj.offsetLeft;
        } else {
            var nPosition = oObj.offsetTop;
        }
        if (arguments[arguments.length - 1] != 0) {
            if (nDire == 1) {
                nPosition += oObj.offsetWidth;
            } else if (nDire == 2) {
                nPosition += oObj.offsetHeight;
            }
        }
        if (oObj.offsetParent != null) {
            nPosition += mSel_SeekTp(oObj.offsetParent, nDire, 0);
        }
        return nPosition;
    }
}

function mSel_MoveNode(oObj, nDire) {
    if (nDire < 0) {
        var oMn = oObj.previousSibling;
    } else {
        var oMn = oObj.nextSibling;
    }
    if (!oMn.tagName) {
        oMn = MoveNode(oMn, nDire);
    }
    return oMn;
}

function mSel_stopBubble() {
    var e = arguments[arguments.length - 1];
    var evt = e || window.event;
    if (evt.stopPropagation) {
        evt.stopPropagation();
    } else {
        evt.cancelBubble = true;
    }
}