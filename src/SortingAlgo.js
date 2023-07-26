export function  mergesortanimation(array){
  const aux=array.slice();
  const anime=[];
  let start=0;
  let end=array.length-1;
  solvemerge(array,aux,anime,start,end);
  return anime;
}

function solvemerge(array,aux,anime,startindex,endindex){
    if(startindex===endindex){
        return;
    }
  const mid=Math.floor((startindex+endindex)/2);
  solvemerge(aux,array,anime,startindex,mid);
  solvemerge(aux,array,anime,mid+1,endindex);
  let i=startindex;
  let j=mid+1;
  let temp=startindex;
  //anime.push([i,j]);
  while(i<=mid && j<=endindex){
       anime.push([i,j]);
       if(aux[i]<=aux[j]){
        anime.push([temp,aux[i]]);
        array[temp]=aux[i];
        temp++;
        i++;
       }else{
        anime.push([temp,aux[j]]);
        array[temp]=aux[j];
        temp++;
        j++;
       }
  }
  while(i<=mid){
  anime.push([i,i]);
  anime.push([temp,aux[i]]);
  array[temp++]=aux[i++];
  }
  while(j<=endindex){
    anime.push([j,j]);
    anime.push([temp,aux[j]]);
    array[temp++]=aux[j++];
}
}
export function bubblesortanimation(array){
  const animation=[];
  for(let i=0;i<array.length-1;i++){
    for(let j=0;j<array.length-i-1;j++){
      animation.push([j,j+1]);
      if(array[j]>array[j+1]){
        animation.push([array[j+1],array[j]]);
        let temp=array[j];
        array[j]=array[j+1];
        array[j+1]=temp;
      }else{
        animation.push([-1,-1]);
      }
    }
  }
  return animation;
}
export function quicksortanimation(array){
  const animation=[];
  const array2=helpquicksort(array,animation,0,array.length-1);
  return animation;
}
function helpquicksort(mainarray,animation,start,end){
  if(mainarray.length<2){
    return mainarray;
  }
   const low=[];
   const high=[];
   const eql=[];
   let pivot=mainarray[mainarray.length-1];
 //  animation.push([array.length-1,0]);
   let c=start;
   for(let i=0;i<mainarray.length;i++){
     if(mainarray[i]===pivot){
      animation.push([-1,c,0]);
      eql.push(mainarray[i]);
     }else if(mainarray[i]<pivot){
      animation.push([-1,c,1]);
      low.push(mainarray[i]);
     }else{
      animation.push([-1,c,2]);
      high.push(mainarray[i]);
     }
     c=c+1;
   }
   let count=start;
   for(let i=0;i<low.length;i++){
    animation.push([-2,count,low[i]]);
    count++;
   }
   for(let i=0;i<eql.length;i++){
    animation.push([-2,count,eql[i]]);
    count++;
   }
   for(let i=0;i<high.length;i++){
    animation.push([-2,count,high[i]]);
    count++;
   }
   const low1=helpquicksort(low,animation,start,start+low.length-1);
   const high1=helpquicksort(high,animation,start+low.length+eql.length,end);
   const merge=[];
   let count2=start;
   if(low1.length!==0){
   for(let i=0;i<low1.length;i++){
    merge.push(low1[i]);
    animation.push([-2,count2,low1[i]]);
    count2++;
   }
  }
   for(let i=0;i<eql.length;i++){
    merge.push(eql[i]);
    animation.push([-2,count2,eql[i]]);
    count2++;
   }
   if(high1.length!==0){
   for(let i=0;i<high1.length;i++){
    merge.push(high1[i]);
    animation.push([-2,count2,high1[i]]);
    count2++;
   }
  }
   return merge;
}
export function insertionsortanimaation(array){
  const animation=[];
  for(let i=1;i<array.length;i++){
     var j=i-1;
     var key=array[i];
     while(j>=0 && key<array[j]){
      animation.push([j,array[j],j+1,key]);
      array[j + 1] = array[j];
      j = j - 1;
     } 
     array[j+1]=key;
    }
  return animation;
}
