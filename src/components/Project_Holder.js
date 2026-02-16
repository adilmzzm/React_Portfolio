import React, { useEffect, useRef } from "react"
import './style/proj'
export default function Project_Holder(){
    return(
        <section id="proj">
  <h1>Projects</h1>
  <hr/>
  <div id="con">
    {/* ProjectCs Here */}
    <ProjectC nlink="https://weather-report-info.netlify.app/" link={"https://github.com/adilmzzm/Weather-App"} name="Weather App" con="This Project took a lot of hours to complete and was really difficult..
The Project Displays user's location's weather information by asking for its location information using the browser's geolocation API, if denied uses fetch api to get users location's information from geoapi and sends a fetch request to opemeteo api to get weather information and displays it." src="https://images.pexels.com/photos/1021366/pexels-photo-1021366.jpeg"/>
    <ProjectC nlink="https://adilm-portfolio.netlify.app/" link={"https://github.com/adilmzzm/My-Portfolio"} name="My Portfolio" con="Shows some info about me like my educational background,few projects that i've done,my contact email." src="https://images.pexels.com/photos/531910/pexels-photo-531910.jpeg"/>
    <ProjectC nlink="https://adils-todo-list-app.netlify.app/" link={"https://github.com/adilmzzm/TODO-List-App"} name="TODO List App" con="The TODO List App stores user's daily tasks using graphical user interface.It uses the localStorage API to store tasks.It features adding category to tasks for distinguishment." src="https://images.pexels.com/photos/3299/postit-scrabble-to-do.jpg"/>
    </div>
  </section>
    )
}
function ProjectC({name,con,src,link,nlink}){
    let imref=useRef(null);
    useEffect(()=>{
      window.addEventListener('load',()=>{
        let i=imref.current;
let [w,h]=[i.width,i.height];
i.style.clipPath=`path('M0,0l${w},0v${h-40}L0,${h-40}L0,0M15,${h-30}l-15,15l15,15H${w-15}l15,-15l-15,-15z`;
window.addEventListener('resize',()=>{
let [w,h]=[i.width,i.height];
i.style.clipPath=`path('M0,0l${w},0v${h-40}L0,${h-40}L0,0M15,${h-30}l-15,15l15,15H${w-15}l15,-15l-15,-15z`;
});});
    },[])
    return(
        <div className="p">
    <div>
      <img ref={imref} src={src} alt="proj_image"/>
      <h2>{name}</h2>
    </div>
   <p>{con}
   <br/><br/><b>Github Link - <a href={link}><span className="iconoir-github-circle icon"></span>Github</a></b>
   <br/><b>View Live on Netlify - <a href={nlink}><span className="bi bi-globe2 icon"></span> Live</a></b>
   </p>
  </div>
    );
}
