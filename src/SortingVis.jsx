import React from 'react';
import './/SortingVis.css';
import * as SortingAlgo from './SortingAlgo'
function randomno(i,j){
   return Math.floor(Math.random()*(j-i+1)+i);
  }
function eql(a,b){
   if(a.length!==b.length){
      return false;
   }
   for(let i=0;i<a.length;i++){
      if(a[i]!==b[i]){
         return false;
      }
   }
   return true;
}
export default class SortingVis extends React.Component{
   constructor(props){
    super(props);

    this.state={
     array:[],
    };
    
   }
   componentDidMount(){
    this.resetArray();
   }
   mergesort(){
      const showstyle=SortingAlgo.mergesortanimation(this.state.array);
      //console.log(showstyle);
      const bar=document.getElementsByClassName('array-bar');
      for(let i=0;i<showstyle.length;i++){
         if(i%2===0){
            const [bar1,bar2]=showstyle[i];
           // const bar1style=bar[bar1].style;
            //const bar2style=bar[bar2].sytle;
            //const color='blue';
            setTimeout(() => {
               bar[bar1].style.backgroundColor='blue';
               bar[bar2].style.backgroundColor='blue';
            },i*10);
         }else{
            const [bar3,bar4]=showstyle[i-1];
           // const bar3style=bar[bar3].style;
            //const bar4style=bar[bar4].style;
            const color='black';
            setTimeout(() => {
               bar[bar3].style.backgroundColor='black';
               bar[bar4].style.backgroundColor='black';
            }, i*10);
            const[bar5,tempheight]=showstyle[i];
            const bar5style=bar[bar5].style;
            setTimeout(() => {
               bar5style.height=tempheight+'px';
            },i*10);
         }
      }
   }
   bubblesort(){
      const showstyle=SortingAlgo.bubblesortanimation(this.state.array);
      //console.log(showstyle);
      const bar=document.getElementsByClassName('array-bar');
      var count=this.state.array.length-1;
      var delay=0;
      for(let i=0;i<showstyle.length;i++){
         const [bar1,bar2]=showstyle[i];
      if(i%2==0){
      setTimeout(() => {
         bar[bar1].style.backgroundColor='blue';
         bar[bar2].style.backgroundColor='blue';
      },delay+=10);
      }else{
         const [bar3,bar4]=showstyle[i-1];
         setTimeout(() => {
            bar[bar3].style.backgroundColor='black';
            if(bar4==count){
            bar[bar4].style.backgroundColor='green';
            count--;
            }else{
            bar[bar4].style.backgroundColor='black';
            }
         }, delay+=2);
         if(bar1!==-1){
            setTimeout(() => {
               bar[bar3].style.height=bar1+'px';
               bar[bar4].style.height=bar2+'px';
            }, delay+=5);
         }
      }
      }
      bar[0].style.backgroundColor='green';
      for(let i=0;i<this.state.array.length;i++){
          bar[i].style.backgroundColor='black';
      }
   }
   quicksort(){
      const showstyle=SortingAlgo.quicksortanimation(this.state.array);
      console.log(showstyle);
      const bar=document.getElementsByClassName('array-bar');
      console.log(showstyle);
      for(let i=0;i<showstyle.length;i++){
         const [bar1,bar2,bar3]=showstyle[i];
         if(bar1===-1){
         setTimeout(() => {
            if(bar3===0){
            bar[bar2].style.backgroundColor='red';
            }else if(bar3===1){
               bar[bar2].style.backgroundColor='orange';
            }else{
               bar[bar2].style.backgroundColor='pink';
            }
         },i*10);
         }else{
          setTimeout(() => {
            //bar[bar2].style.height='bar3';
            bar[bar2].style.backgroundColor='black';
            bar[bar2].style.height=bar3+'px';
          }, i*10);
         }
      }
   }
   insertionsort(){
   const showstyle=SortingAlgo.insertionsortanimaation(this.state.array);
   const bar=document.getElementsByClassName('array-bar');
   console.log(showstyle);
   var delay=0;
   for(let i=0;i<showstyle.length;i++){
      const [bar1,bar2,bar3,bar4]=showstyle[i];
      setTimeout(() => {
         bar[bar3].style.backgroundColor='blue';
      }, delay+=50);
      setTimeout(() => {
         bar[bar3].style.backgroundColor='black';
         bar[bar1].style.height=bar4+'px';
         bar[bar3].style.height=bar2+'px';
      }, delay+=10);
   }
   }

   resetArray(){
    var array=[];
    var w=window.innerWidth-200;
    console.log(w);
    for(let i=0;i<w/15;i++){
        array.push(randomno(8,550));
    }
    this.setState({array});
    const bar=document.getElementsByClassName('array-bar');
    for(let i=0;i<this.state.array.length;i++){
      bar[i].style.backgroundColor='black';
   }
   }
   render(){
     const {array}=this.state;//destructing the array {} is used to print in return function
     return(
        <div className="bar">
        {array.map((value,ind)=>(
         <div className="array-bar" key={ind} style={{height:  value+'px',backgroundColor:'black'}}>
            </div>
         ))}
         <div className="butto-placement">
        <button class='button' onClick={() => this.resetArray()} style={{
    position:'relative',
    left:'10px',
  }}>New Array</button>
        <button class="button" onClick={() => this.mergesort()} style={{
    position:'relative',
    top:'-50px',
    left:'560px',
  }}>merge sort</button>
        <button class="button" onClick={() => this.bubblesort()}style={{
    position:'relative',
    top:'-100px',
    left:'870px',
  }}>bubble sort</button>
        <button class="button" onClick={() => this.quicksort()}style={{
    position:'relative',
    top:'-150px',
    left:'720px',
  }}>quick sort</button>
        <button class="button" onClick={() => this.insertionsort()}style={{
    position:'relative',
    top:'-200px',
    left:'1030px',
  }}>insertion sort</button>
        </div>
        </div>
     );
   }
}
   
   
