import React from 'react';
import './style/main';
export default function Main() {
  return (
    <section id="body">
      <div id="con">
        <div className="cl">
          <h1 id="hm">Hi I am Adil Moazzam</h1>
          <div>
            <h2><span className='iconoir-book-solid'></span> Education</h2>
            <h3><span>BCA </span> (Bachelorss of Computer Applications)<br />from <span>Seacom Management College</span><br/>under <span>Maulana Abul Kalam Azad University Of Technology, West Bengal</span><br/>
with <span>CGPA : 8.16</span></h3>
          </div>
        </div>
        <div className="il">
          <img src="https://images.pexels.com/photos/1006293/pexels-photo-1006293.jpeg" alt="pc setup art image" />
          <b><span className="line"></span><a href='https://www.pexels.com/photo/photo-of-laptop-near-plant-1006293/'>Photo by Lisa on Pexels</a></b>
        </div>
      </div>
    </section>
  );
}

