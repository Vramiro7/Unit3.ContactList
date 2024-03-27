import {useEffect, useState} from "react"
import RenderedContactList from "./allContactList";
import './App.css'


const App = () => {
  const [contactList, setContactList] = useState([]);
  const API_URL = `https://jsonplaceholder.typicode.com/users`;

  useEffect(() => {
    const getContacts = async() => {
      const response = await fetch(API_URL);
      const json = await response.json();
      setContactList(json)
      
      
    }

    getContacts();
  }, [])



  return (
    <>
      <header><h1>Contact List</h1></header>
      
      <RenderedContactList contactList={contactList} email={contactList} phone={contactList} />
    </>
  )
}

export default App
