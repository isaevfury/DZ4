var tagList=['li', 'span', 'div', 'span', 'h3', 'a', 'div', 'span', 'a', 'li', 'div', 'div']
var tagObj={}
var tagArr=[]
for(var tags of tagList){
    if (tagObj[tags]) {
        tagObj[tags]++;
    } else {
        tagObj[tags] = 1;
    }
}
console.log(tagObj);

for(var key in tagObj){
    tagArr.push(key)
}
var sortArr=tagArr.sort((a,b)=>tagObj[b]-tagObj[a])
var sortObj=Object.assign({},sortArr)
console.log(sortObj);
