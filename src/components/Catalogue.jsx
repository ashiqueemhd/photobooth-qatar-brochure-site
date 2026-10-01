import { useState } from 'react'
import Navbar from './Navbar'
import ProductShowcase from './ProductShowcase'
import WhyChooseUs from './WhyChooseUs'
import HowItWorks from './HowItWorks'
import PricingPackages from './PricingPackages'
import Testimonials from './Testimonials'
import ContactSection from './ContactSection'
import Footer from './Footer'
import ProductDetailModal from './ProductDetailModal'

function Catalogue() {
  const [activeModalProduct, setActiveModalProduct] = useState(null)

  return (
    <div className="page-wrapper">
      <Navbar />
      <main>
        <ProductShowcase onSelectProduct={setActiveModalProduct} />
        <WhyChooseUs />
        <HowItWorks />
        <PricingPackages />
        <Testimonials />
        <ContactSection />
      </main>
      <Footer />

      {activeModalProduct && (
        <ProductDetailModal
          product={activeModalProduct}
          onClose={() => setActiveModalProduct(null)}
        />
      )}
    </div>
  )
}

export default Catalogue
