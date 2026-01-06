import Header from './components/Header'
import Hero from './components/Hero'
import './App.css'

function App() {
  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      <main>
        <Hero />
      </main>
      <footer className="bg-charcoal-black text-white py-8 text-center">
        <p>&copy; {new Date().getFullYear()} HERNOTIX Tech. Tous droits réservés.</p>
      </footer>
    </div>
  )
}

export default App
