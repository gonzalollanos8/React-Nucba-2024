import Navbar from './components/navbar/Navbar';
// import Hero from './components/hero/Hero';
// import Products from './components/product/Products';
import Footer from './components/footer/Footer';
import Layout from './components/layout/Layout';
// import Categories from './components/category/Categories';
import Home from './components/pages/Home'; 


function App() {

  return (
    <> 

      <Navbar/>
        <Layout>
          <Home/>
        </Layout>
      <Footer/> 
    </>
  )
}

export default App
