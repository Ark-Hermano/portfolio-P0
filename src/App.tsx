import { useEffect, useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'
import { apiGitHub } from './infra/github'
import { TbChevronLeft, TbChevronRight } from 'react-icons/tb';
import { BiBookAdd } from 'react-icons/bi';
function App() {

  const [repos, setRepos] = useState<any[]>([])
  const [repoGridPageIndex, setRepoGridPageIndex] = useState<any>(0)
  const [certifications, setCertifications] = useState<any[]>([])

  useEffect(() => {

    const getData = async () => {
      const { data } = await apiGitHub.get(`/users/${import.meta.env.VITE_API_GITHUB_ACCOUNT_NAME}/repos`)
      data.shift()
      setRepos(data.filter((repo: any) => !repo.private))


      setCertifications([
        { name: "curso concentração", credential: 'qA12Yx_#12', skill: "se concentrar", created_at: "2022-10-12", foundation: { name: "empresa name" } },
        { name: "curso concentração", credential: 'qA12Yx_#12', skill: "se concentrar", created_at: "2022-10-12", foundation: { name: "empresa name" } },
        { name: "curso concentração", credential: 'qA12Yx_#12', skill: "se concentrar", created_at: "2022-10-12", foundation: { name: "empresa name" } }
      ])
    }

    getData()

  }, [])

  const handleNext = () => {
    setRepoGridPageIndex(repoGridPageIndex + 1)
  }

  const handlePrev = () => {
    setRepoGridPageIndex(repoGridPageIndex - 1)

  }

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

      <section className='head'>
        <div className='content'>
          <div className='rotate'>
            <img className="rotate-object" src='./media/hahaha.svg' />
          </div>
        </div>
      </section>

      <section>
        <div className='repos'>
          <div className='head'>
            <h1>Projetos</h1>
          </div>
          <div className='repo-grid'>
            {repos.slice(repoGridPageIndex * 6, 6 * (repoGridPageIndex + 1)).map((repo) => (
              <div className='repo-card'>
                <div className='repo-card__content'>
                  <div className='repo-card__image'>
                    <a target={'_blank'} href={repo.html_url}>
                      <img src={'./projects/smiley.jpg'} />
                    </a>
                  </div>
                  <div className='repo-card__desc'>
                    <a target={'_blank'} href={repo.html_url}>
                      <h2 className='title'>{repo.name}</h2>
                      <span className='desc'>{repo.description}</span>
                    </a>

                    <div className='topics'>
                      {repo.topics.map((topic: string) => (
                        <div className='topic'>{topic}</div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            ))}


          </div>
          <div className='repo-grid__options'>
            <button disabled={!!!repoGridPageIndex} onClick={() => handlePrev()} >
              <span><TbChevronLeft /></span>
            </button>
            <div className='page-indexes'>
              {Array.from({ length: repos.length / 6 }, () => '').map((_, index) => (
                <div className={+ index === repoGridPageIndex ? 'selected index' : 'index'}>
                  <span>{index + 1}</span>
                </div>
              ))}
            </div>
            <button disabled={(6 * (repoGridPageIndex + 1)) === repos.length} onClick={() => handleNext()}>
              <span><TbChevronRight /></span>
            </button>
          </div>
        </div>
      </section>

      <section>
        <div className='certifications'>
          <div className='head'>
            <h1>Cursos</h1>
          </div>

          <div className='certification-grid'>
            {certifications.map((certification) => (
              <div className='certification-card'>
                <div className='certification-card__content'>
                  <div className='certification-card__image'>
                    <img src="./courses/alura.jpeg" />
                  </div>
                  <div className='certification-card__body'>
                    <div className='certification-card__name'>
                      {certification.name}
                    </div>
                    <div className='certification-card__foundation'>
                      {certification.foundation.name}
                    </div>
                    <div className='certification-card__date'>
                      Verificação emitida em {certification.created_at}
                    </div>
                    <div className='certification-card__credential'>
                      Código da credencial {certification.credential}
                    </div>
                    <div className='certification-card__show__credential'>
                      <a href=''>
                        <span>Exibir credencial</span>
                        <div className='anchor-icon'>
                          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" data-supported-dps="16x16" fill="currentColor" width="16" height="16" focusable="false">
                            <path d="M15 1v6h-2V4.41L7.41 10 6 8.59 11.59 3H9V1zm-4 10a1 1 0 01-1 1H5a1 1 0 01-1-1V6a1 1 0 011-1h2V3H5a3 3 0 00-3 3v5a3 3 0 003 3h5a3 3 0 003-3V9h-2z"></path>
                          </svg>
                        </div>
                      </a>
                    </div>
                  </div>
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
