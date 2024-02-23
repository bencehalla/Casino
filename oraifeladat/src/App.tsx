import { useState } from 'react'


function hibaUzenet(email: string, jelszohossz: number){
  if (email.indexOf("@") == -1 || email.length == 0) return 'Az email nem lehet üres és tartalmaznia kell kukacot';
  else if (jelszohossz < 6 || jelszohossz > 12) return 'A jelszó hossza nem megfelelő (legalább 6, legfeljebb 12 karakter legyen)';
  else return "Rendben";
}

function Email() {
  const [email, setEmail] = useState('')
  return <div>
    E-mail:<br/>
    <input type='text' onInput={e => {
      setEmail(e.currentTarget.value);
    }}
    ></input>
    <p style={{
      color: "red"
    }}>{hibaUzenet(email,6)}</p>
    
  </div>
}

function Jelszo() {
  const [jelszo, setJelszo] = useState('')
  return <div>
    Jelszó:<br/>
    <input type='text' onInput={e => {
      setJelszo(e.currentTarget.value);
    }}
    ></input>
    <p style={{
      color: "red"
    }}>{hibaUzenet("a@a.com",jelszo.length)}</p>
    
  </div>
}

function App() {
  return (
    <>
      <div>
       <Email></Email>
       <Jelszo></Jelszo>
      </div>
    </>
  )
}

export default App
