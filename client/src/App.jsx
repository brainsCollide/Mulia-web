import Hero from './Pages/Hero'
import Navbar from './Components/Navbar'
import AboutUs from './Pages/AboutUS'
import ProductServicesPage from './Pages/ProductServicePage'
import Client from './Pages/ClientsPage'
import ContactUs from './Pages/ContactUsPage'

function App() {
  return (
    <>
      <div>
        <Navbar />
        <Hero />
        <AboutUs />
        <ProductServicesPage />
        <Client />
        <ContactUs />
      </div>
    </>
  )
}

export default App
