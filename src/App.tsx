import { useEffect, useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'
import { apiGitHub } from './infra/github'

function App() {

  useEffect(() => {

    apiGitHub.get(`/users/${'Ark-Hermano'}/repos`)

  }, [])


  return (
    <div className="background">
      <div>
        <div className="head">
          <div className="content">
            <div className="nav">
              <div className='site-title'>
                <h1 className='title'>Título</h1>
              </div>

              <div className="sections-urls-container">
                <ul className="section-urls">
                  <li className="item">
                    <div className="link">
                      <a>
                        link
                      </a>
                    </div>
                  </li>
                  <li className="item">
                    <div className="link">
                      <a>
                        link
                      </a>
                    </div>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>

        <div className='highlighted'>

          <div className="content">
            <div className="main-label">Main Personal Projects and Jobs</div>

            <ul className="project-list">
              <li className="project">
                <a>
                  <div className="project">
                    <img src="" />
                  </div>
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className='projects'>
          <div className="nav">
            <div className="swtich">
              <div>trabalho</div>
              <div>projetos</div>
            </div>

            <div className="listing ">
              <ul className='list-type'>
                <li>
                  <div className="item">mobile</div>
                </li>
                <li>
                  <div className="item">front</div>
                </li>
              </ul>
            </div>
          </div>

          <div className='carousel'>

          </div>
        </div>

        <div className='jobs'>


        </div>
        <div className='certifications'></div>
        <div className='educational-institutions'></div>

      </div>
    </div>
  )
}

export default App
