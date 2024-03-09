import Navbar from './components/navbar/Navbar';
import Hero from './components/hero/Hero';
// import Footer from './components/footer/Footer';
import Layout from './components/layout/Layout';
// import Categories from './components/category/Categories';

function App() {

  return (
    <> 

      <Navbar/>
        <Layout>
          <Hero/>
          
        </Layout>
      
      {/* <Footer/>  */}
      
    </>
  )
}

export default App
