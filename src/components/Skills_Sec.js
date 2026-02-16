import React from 'react';
import './style/skills_sec';
function Skills_Sec({sarr}){
    return(
            <section id="skl">
      <h1>Skills</h1>
      <hr/>
      <div class="con">
      {sarr.map((o)=>{
      return (<div class="e">
      <i class={o.icon}></i>
      <b>{o.name}</b>
    </div>);
    })}
        </div>
    </section>
    )
}
export default Skills_Sec;