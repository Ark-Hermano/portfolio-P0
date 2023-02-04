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
  const linguages = [
    {
      name: 'Javascript',
      frameworks: [
        {
          name: 'React',
        },
        {
          name: 'React Native',
        },
        {
          name: 'NextJS'
        }
      ]
    },
    {
      name: 'PHP',
      frameworks: [
        {
          name: 'Laravel',
        },
      ]
    },
  ]


  useEffect(() => {

    const getData = async () => {
      const { data } = await apiGitHub.get(`/users/${import.meta.env.VITE_API_GITHUB_ACCOUNT_NAME}/repos`)
      data.shift()
      setRepos(data.filter((repo: any) => !repo.private))


      setCertifications([
        { name: "Formação Acessibilidade Web", credential_url: 'https://cursos.alura.com.br/degree/certificate/c4ba399a-0d38-410f-b62d-c3ec83655bab', credential: 'c4ba399a-0d38-410f-b62d-c3ec83655bab', created_at: "2022-10-12", foundation: { name: "Alura" } },
        { name: "Formação React Native", credential_url: 'https://cursos.alura.com.br/degree/certificate/60825e62-355d-41f6-a9ca-e9b5f4d24e5a', credential: '60825e62-355d-41f6-a9ca-e9b5f4d24e5a', created_at: "2022-09-12", foundation: { name: "Alura" } },
        { name: "Formação React com TypeScript", credential_url: 'https://cursos.alura.com.br/degree/certificate/6a5342c7-9dd3-47cd-97b8-d36e131e2ba4', credential: '6a5342c7-9dd3-47cd-97b8-d36e131e2ba4', created_at: "2022-09-12", foundation: { name: "Alura" } }
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
                <div onClick={() => setRepoGridPageIndex(index)} className={index === repoGridPageIndex ? 'selected index' : 'index'}>
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
                      <a target={'__blank'} href={certification.credential_url}>
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
