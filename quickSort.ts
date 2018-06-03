import * as express from 'express';

const app = express();

app.get('/',(req,res) => {
    let arrayList = [12,3,45,46,1,8,99,16];
    console.log("测试数组：");
    console.log(arrayList);
    let result = qSort(arrayList,0,arrayList.length-1);
    console.log("快速排序结果：");
    console.log(result);
    res.send('Typescript 快速排序结果：' + result);
});
//快速排序
function qSort(arr: number[], begin: number, end: number):Array<number>{
        if(end < begin){
            return arr;
        }
        let i = begin;
        let j = end;
        let key = arr[begin];
        while(true){
            while(true){
                if(i==j){break;}
                if(arr[j]<key){
                    let temp = arr[j];
                    arr[j] = arr[i];
                    arr[i] = temp;
                    break;
                }
                j--;
            }
            while(true){
                if(i==j){break;}
                if(arr[i]>key){
                    let temp = arr[i];
                    arr[i] = arr[j];
                    arr[j] = temp;
                    break;
                }
                i++;
            }
            if(i==j){break;}
        }
        if(end-j>1){
            arr = qSort(arr,j+1,end);
        }
        if(i - begin > 1){
            arr = qSort(arr,begin,i);
        }
        return arr;
    }

app.listen(3000, 'localhost', () => {
    console.log(`express服务已经启动:localhost:3000`);
})