"use strict";
exports.__esModule = true;
var express = require("express");
var app = express();
app.get('/', function (req, res) {
    var arrayList = [12, 3, 45, 46, 1, 8, 99, 16];
    console.log("测试数组：");
    console.log(arrayList);
    var result = qSort(arrayList, 0, arrayList.length - 1);
    console.log("快速排序结果：");
    console.log(result);
    res.send('Typescript 快速排序结果：' + result);
});
//快速排序
function qSort(arr, begin, end) {
    if (end < begin) {
        return arr;
    }
    var i = begin;
    var j = end;
    var key = arr[begin];
    while (true) {
        while (true) {
            if (i == j) {
                break;
            }
            if (arr[j] < key) {
                var temp = arr[j];
                arr[j] = arr[i];
                arr[i] = temp;
                break;
            }
            j--;
        }
        while (true) {
            if (i == j) {
                break;
            }
            if (arr[i] > key) {
                var temp = arr[i];
                arr[i] = arr[j];
                arr[j] = temp;
                break;
            }
            i++;
        }
        if (i == j) {
            break;
        }
    }
    if (end - j > 1) {
        arr = qSort(arr, j + 1, end);
    }
    if (i - begin > 1) {
        arr = qSort(arr, begin, i);
    }
    return arr;
}
app.listen(3000, 'localhost', function () {
    console.log("express\u670D\u52A1\u5DF2\u7ECF\u542F\u52A8:localhost:3000");
});
