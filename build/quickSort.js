"use strict";
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
    result["default"] = mod;
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
var express = __importStar(require("express"));
var app = express();
app.get('/', function (req, res) {
    var arrayList = [12, 3, 45, 46, 1, 8, 99, 16];
    var result = qSort(arrayList, 0, arrayList.length - 1);
    console.log("快速排序结果：");
    console.log(result);
    res.send('hello world');
});
//快速排序
qSort(arr, number[], begin, number, end, number);
Array < number > {
    if: function (end, , begin) {
        return arr;
    },
    let: i = begin,
    let: j = end,
    let: key = arr[begin],
    while: function () {
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
    },
    if: function (end) { }
} - j > 1;
{
    arr = this.qSort(arr, j + 1, end);
}
if (i - begin > 1) {
    arr = this.qSort(arr, begin, i);
}
return arr;
app.listen(3000, 'localhost', function () {
    console.log("express\u670D\u52A1\u5DF2\u7ECF\u542F\u52A8:localhost:3000");
});
