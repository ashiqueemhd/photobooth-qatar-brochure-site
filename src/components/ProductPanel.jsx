function ProductPanel({ product, className = '' }) {
  return (
    <section className={`panel product ${className}`.trim()}>
      <div className="image-container">
        <img src={product.image} alt={product.name} />
      </div>
    </section>
  )
}

export default ProductPanel
