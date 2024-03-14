import './App.css'
import ContactForm from './Components/ContactForm/ContactForm'
import ContactHeader from './Components/ContactHeader/ContactHeader'
import Navbar from './Components/Navbar/Navbar'


function App() {


  return (
    <div>
      <Navbar />
      <main className='main-container'>
        <ContactHeader />
        <ContactForm />
      </main>
    </div>
  )
}

export default App
