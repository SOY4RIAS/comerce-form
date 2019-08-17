import React from 'reactn'

const App: React.FC = () => {
  console.log(process.env)

  return (
    <div className='App'>
      <header className='App-header'>
        <p> Inserte mensaje aquí</p>
        <a
          className='App-link'
          href='https://reactjs.org'
          target='_blank'
          rel='noopener noreferrer'
        >
          Learn React
        </a>
      </header>
    </div>
  )
}

export default App
