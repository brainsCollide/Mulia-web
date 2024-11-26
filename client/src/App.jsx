import Hero from './Pages/Hero'
import Navbar from './Components/Navbar'
import AboutUs from './Pages/AboutUs'
import ProductServicesPage from './Pages/ProductServicePage'
import Client from './Pages/ClientsPage'
import ContactUs from './Pages/ContactUsPage'
import Footer from './Components/Footer'

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
        <Footer />
      </div>
    </>
  )
}

export default App
