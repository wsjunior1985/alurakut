import MainGrid from '../src/components/MainGrid'
import Box from '../src/components/Box'
import { AlurakutMenu, OrkutNostalgicIconSet } from '../src/lib/AlurakutCommons'
import { ProfileRelationsBoxWrapper } from '../src/components/ProfileRelations'

function ProfileSideBar(propriedades){
  return (
    <Box>
    <img src={`https://github.com/${propriedades.githubUser}.png`} sytle={{ borderRadius: '8px' }} ></img>
  </Box >
  )
}

export default function Home() {
  const githubUser = 'wsjunior1985';
  const pessoas = ['juunegreiros', 'omariosouto', 'peas', 'rafaballerini', 'marcobrunodev', 'felipefialho']

  return (
  <>
    <AlurakutMenu />
    <MainGrid>
      <div className="profileArea" sytle={{gridAarea: 'profileArea'}}>
        <ProfileSideBar githubUser={githubUser} />
      </div>
      <div className="welcomeArea" sytle={{gridAarea: 'welcomeArea'}}>
      <Box>
        <h1 className="title">
          Bem vindo
        </h1>
      <OrkutNostalgicIconSet></OrkutNostalgicIconSet>
      </Box>
      </div>
      <div className="profileRelationsArea" sytle={{gridAarea: 'profileRelationsArea'}}>
      <ProfileRelationsBoxWrapper>
        <h2 className="smallTitle">Pessoas ({pessoas.length})</h2>
        <ul>
          {pessoas.map((item) => {
            return (
              <li>
                <a href={`/users/${item}`} key={item}>
                  <img src={`https://github.com/${item}.png`} />
                  <span>{item}</span>
                </a>
              </li>
            )
            })}
        </ul>
      </ProfileRelationsBoxWrapper>
      <Box>
      Comunidades
      </Box>
      </div>
    </MainGrid>
  </>
  )
}
