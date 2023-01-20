import { useEffect, useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'
import { apiGitHub } from './infra/github'

function App() {

  const [repos, setRepos] = useState<any[]>([])

  useEffect(() => {

    const getData = async () => {
      const { data } = await apiGitHub.get(`/users/${'Ark-Hermano'}/repos`)
      data.shift()
      setRepos(data.filter((repo: any) => !repo.private))
    }

    getData()

  }, [])


  return (
    <main>
      {/* <div>
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
      </div> */}

      <section>
        <div className='repos'>
          <div className='repo-grid'>
            {repos.map((repo) => (
              <div className='repo-card'>
                <div className='repo-card__content'>
                  <a target={'_blank'} href={repo.html_url}>
                    <div className='repo-card__image'></div>
                    <div className='repo-card__name'>{repo.name}</div>
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section>
        <div className='certifications'>
          <div className='certification-grid'>
            {certifications.map((certification) => (
              <div className='certification-card'>
                <div className='certification-card__content'>
                  <a target={'_blank'} href={certification.html_url}>
                    <div className='certification-card__image'></div>
                    <div className='certification-card__name'>{certification.name}</div>
                    <div className='certification-card__name'>{certification.name}</div>
                    <div className='certification-card__name'>{certification.name}</div>
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </main>
  )
}

export default App
