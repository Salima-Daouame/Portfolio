import React from 'react'
import '../Styles/Skills.css'
import Html from '../images/Languages/html.png'
import css from '../images/Languages/css3.png'
import js from '../images/Languages/javascript.png'
import reactjs from '../images/Languages/Reactjs.png'
import bootstrap from '../images/Languages/bootstrap.png'
import github from '../images/Languages/github.png'
import mysql from '../images/Languages/mysql.png'
import aspNet from '../images/Languages/aspNet.png'
import cSharp from '../images/Languages/cSharp.png'
import java from '../images/Languages/java.png'

function Skills() {
  return (
    <>
      <section className="services" id="skills">
        <div className="content">
          <div className="title"><span>My Skills</span></div>
          <p className='txt_desc'>These are the technologies I have worked with</p>
          <div className="boxes">

            <div className="box">
              <div className="img_lang">
                <img src={Html} className='languages_p' alt="" />
              </div>
              <div className="topic">HTML</div>
            </div>

            <div className="box">
              <div className="img_lang">
                <img src={css} className='languages_p' alt="" />
              </div>
              <div className="topic">CSS</div>

            </div>

            <div className="box">
              <div className="img_lang">
                <img src={js} className='languages_p' alt="" />
              </div>
              <div className="topic">JavaScript</div>
            </div>

            <div className="box">
              <div className="img_lang">
                <img src={reactjs} className='languages_p' alt="" />
              </div>
              <div className="topic">ReactJs</div>
            </div>

            <div className="box">
              <div className="img_lang">
                <img src={bootstrap} className='languages_p' alt="" />
              </div>
              <div className="topic">Bootstrap</div>
            </div>
            <div className="box">
              <div className="img_lang">
                <img src={github} className='languages_p' alt="" />
              </div>
              <div className="topic">Github</div>
            </div>

            <div className="box">
              <div className="img_lang">
                <img src={mysql} className='languages_p' alt="" />
              </div>
              <div className="topic">Mysql</div>
            </div>

            <div className="box">
              <div className="img_lang">
                <img src={aspNet} className='languages_p' alt="" />
              </div>
              <div className="topic">Asp.Net</div>

            </div>

            <div className="box">
              <div className="img_lang">
                <img src={cSharp} className='languages_p' alt="" />
              </div>
              <div className="topic">C#</div>
            </div>

            <div className="box">
              <div className="img_lang">
                <img src={java} className='languages_p' alt="" />
              </div>
              <div className="topic">Java</div>
            </div>

          </div>
        </div>
      </section>

    </>
  )
}

export default Skills;
