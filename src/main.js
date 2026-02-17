import React,{createElement, useEffect} from 'react';
import ReactDOM from 'react-dom/client';
import Nav from './components/Nav';
import Body from './components/Body';
import Footer from './components/Footer';
import Project_Holder from './components/Project_Holder';
import Skills_Sec from './components/Skills_Sec';
// impoertimport Footer
let narr=[
  {n:"Home",h:"#hm"},{n:"Project",h:"#proj"},{n:"Skills",h:"#skl"},{n:"Contact",h:"#cn"}
]
let sarr=[
  {name:"Java Script",icon:"lni lni-javascript"},
  {name:"HTML",icon:"lni lni-html5"},
  {name:"CSS",icon:"lni lni-css3"},
  {name:"Python",icon:"lni lni-python"},
  {name:"React",icon:"lni lni-react"}
];
function BGEff(){
  useEffect(()=>{
    let c=$("canvas")[0];
    c.style.position="fixed";
    c.style.top="0px";
    // let e=createElement("div");
    // e
    c.style.zIndex=-1;
        c.style.boxSizing="border-box";
        c.width=window.innerWidth;
        c.height=window.innerHeight;
        // document.body.append(c);
        let [w,h]=[c.width,c.height];
        let cx=c.getContext('2d');
                let parr=[];
        // let v=4.25;
        for(var i=0;i<50;i++){
            parr.push({x:Math.random()*w-20,y:Math.random()*h-20,color:`rgba(${Math.random()*255},${Math.random()*255},${Math.random()*255},0.8)`,vx:(-5+Math.random()*10),vy:(-5+Math.random()*10)});
        }
        function outBounds(e){
            if((e.x<0 || e.x>w) || (e.y<0 || e.y>h)){
                return true;
            }
            else{
                return false;
            }
        }
        function run(){
        cx.clearRect(0,0,w,h);

        // console.log(parr[20]);
        // let mp=[0,0];
        // alert(parr.length);
        for(var i=0;i<parr.length;i++){
            cx.beginPath();
        // cx.arc(Math.random()*w-20,Math.random()*h-20,20,0,Math.PI*2);
        cx.arc(parr[i].x,parr[i].y,5,0,Math.PI*2);
        // cx.arc()
        cx.fillStyle=parr[i].color;
        cx.fill()
        cx.closePath();
        parr[i].y+=parr[i].vy;
        parr[i].x+=parr[i].vx;
        if(outBounds(parr[i])){
            parr[i].x=Math.random()*w-5;
            parr[i].y=Math.random()*h-5;
        }
        }
        // console.log(window.requestAnimationFrame(run));
    }
    // run();
    window.requestAnimationFrame(run);
  },[])
  return(
    <canvas id='c'></canvas>
  )
}
let root=ReactDOM.createRoot(document.getElementById('root'));
// root.render(React.createElement(body,{h:"Heading",name:"Admund"},'Child Element'));

root.render(<>
<Nav narr={narr}/>
<main>
{/* Background styling */}
{/* <canvas id="c"></canvas> */}
<BGEff/>
<Body/>
{/* This was casuing error showing ( In HTML, <body> cannot be a child of <div>.
This will cause a hydration error. )This -> <body h="Heading" name="Admund"/> */}
<Project_Holder/>
<Skills_Sec sarr={sarr}/>
</main>
<Footer/>
</>)







