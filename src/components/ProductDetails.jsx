function ProductDetails({ product, brand, className = '', embedded = false }) {
  const content = (
    <>
      {brand ? <p className="brand">{brand}</p> : null}
      <div className="details-body">
        <h2 className="details-title">{product.name}</h2>
        {product.tagline ? <p className="tagline">{product.tagline}</p> : null}
        {product.specs?.map((spec) => (
          <p className="spec" key={spec}>
            {spec}
          </p>
        ))}

        <p className="details-price">
          <span>{product.price}</span>
          {product.duration ? ` ${product.duration}` : null}
        </p>

        {product.includes?.length ? (
          <>
            <p className="includes-label">{product.includesLabel || 'With'}</p>
            <ul className="includes">
              {product.includes.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </>
        ) : null}

        {product.extra ? <p className="details-extra">{product.extra}</p> : null}
      </div>
    </>
  )

  if (embedded) {
    return <div className={className}>{content}</div>
  }

  return <section className={`panel details ${className}`.trim()}>{content}</section>
}

export default ProductDetails
