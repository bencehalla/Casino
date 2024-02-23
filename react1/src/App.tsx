import { useState, useEffect } from 'react'
import './App.css'
import { Footer } from './components/Footer'
import {User, Users} from './user'

function App() {
  const [ users, setUsers ] = useState([] as User[])
  const [ newUser, setNewUser ] = useState('')
  const [ searchTerm, setSearchTerm ] = useState('')

  // 1. eset:
  useEffect(() => {
    console.log('Users fetch effect')
    async function load() {
      const response = await fetch('/adatok.json')
      const users = await response.json() as Users;
      setUsers(users.users);
    }
    load()
  }, [])

  // 2. eset:
  useEffect( ()=>{
    console.log("Változás történt a USERS tömbben..." + users.length);
    document.title = `Létszám: ${users.length}`;
  }, [users] )

  const kivalogatott = users.filter( user => user.name.includes(searchTerm) );

  return (
    <>
     <h2>Felhasználók</h2>
    <input type="text" placeholder="Add meg a felhasználó nevét" onChange={
      e => { 
        setNewUser( e.currentTarget.value ) 
        console.log( e.currentTarget.value )
      }
    } />
    <h3>Új felhasználó felvétele: </h3>
    <button onClick={ ()=>{
      setUsers([...users, { email: 'test@test.hu', name: newUser }])
    } } >Felvétel</button>

    <h3>Keresés:</h3>
    <input type="text" placeholder="Add meg a keresendő felhasználónevet" 
      onInput={ e => { 
        setSearchTerm(e.currentTarget.value), 
        console.log(e.currentTarget.value)
        }
      }
    ></input>

    <h3>Felhasználók listája:</h3>
    <ul>
      {
        kivalogatott.map(user => <li>{user.name} {user.email} </li>)
      }
    </ul>
     <Footer/>
    </>
  )
}

export default App
