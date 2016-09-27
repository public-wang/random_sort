/*js中随机排序
JS 中打乱数组，sort()函数的应用。
JS中，要打乱数组有很多方法，网上流传一个国外人写的方法，我认为是最精简的了：*/
function randomsort(a, b) {
return Math.random()>.5 ? -1 : 1;//用Math.random()函数生成0~1之间的随机数与0.5比较，返回-1或1
}
var arr = [1, 2, 3, 4, 5];
arr.sort(randomsort);
/*这里介绍下sort()函数，在JS中Array对象里内置了一个函数：arrayobj.sort([sortfunction])
此方法将 Array 对象进行适当的排序；在执行过程中并不会创建新的 Array 对象。
sortFunction为可选项。是用来确定元素顺序的函数的名称。如果这个参数被省略，那么元素将按照 ASCII 字符顺序进行升序排列。 
sortFunction方法有两个参数。分别代表每次排序比较时的两个数组项。sort()排序时每次比较两个数组项都回执行这个参数，并把两个比较的数组项作为参数传递给这个函数。当函数返回值为1的时候就交换两个数组项的顺序，否则就不交换。
我们可以对上面的randomsort()稍作修改，来实现升序排列和降序排列：*/
function asc(a,b) { 
return a < b ? -1 : 1;//如果a<b不交换，否则交换，即升序排列
}
function desc(a,b) { 
return a > b ? -1 : 1;;//如果a>b不交换，否则交换，即将序排列
}
/*另外，可以直接把一个无名函数直接放到sort()方法的调用中。如下的例子是将奇数排在前面，偶数排在后面，例子如下：
以下是引用片段：*/
var arrA = [6,2,4,3,5,1]; 
arrA.sort( function(x, y) { 
if (x % 2 ==0) return 1; 
if (x % 2 !=0) return -1; 
}); 
document.writeln(arrA); //输出：1,5,3,4,6,2
 
function getRndArray(arr0){     
arr1=new Array(); 
len=arr0.length; 
for(var i=0;i<len;i++){ 
rnd=Math.floor(Math.random()*arr0.length); 
arr1[i]=arr0[rnd]; 
arr0.splice(rnd,1) 
} 
return arr1; 
}