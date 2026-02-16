import React,{useEffect,useRef} from 'react';
import './style/nav'
// r.render(<p>Hi</p>)

export default function Header({narr,src}){
    let open=useRef(false);
  useEffect(()=>{
    $(window).on("click",closeMenu);
  },[]);
    const showMenu=(e)=>{
    open.current=true;
    // alert("Show Menu");
     $("header #m-nav .menu").css({display:"block"});
    $("header #m-nav .menu").css({height:"280px"});
    
  }
  const closeMenu=(e)=>{
    console.log((e.target.id))
    if(open.current===true && e.target.id!="b"){
    $("header #m-nav .menu").css({height:"0px"});
      // alert(open.current);
      open.current=false;
    }
  }
  return(
   <header>
  <nav id="nav">
      <img src="https://cdn.leonardo.ai/users/049d32b6-1b7e-40a7-88bf-26f46c5f0742/generations/7f044e7e-3179-46f8-b011-9f6339fd935f/GPT_Image_1_create_a_logo_writing_Adil_Moazzam_modern__look__l_0.png" alt="site logo"/>
    {narr.map((o)=>{return <a key={o.n} href={o.h}>{o.n}</a>})}
  </nav>
  <nav id="m-nav">
          <div id="b" className="b" onClick={showMenu}>
        <i id="b"></i><i id="b"></i><i id="b"></i>
      </div>
      <div className='menu'>
        {narr.map((o)=>{
          return <a key={o.n} href={o.h}><b>{o.n}<span></span></b></a>
        })}
        <i onClick={closeMenu} className="bi bi-arrow-up-circle-fill icon"></i>
      </div>
  </nav>
  </header>
  )
}
