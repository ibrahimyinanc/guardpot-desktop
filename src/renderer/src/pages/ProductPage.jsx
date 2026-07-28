import { useApp } from '../context/AppContext'
import VgnView from './VgnView'
import RecorderView from './RecorderView'

function ProductPage({ product, onBack }) {
  const { navigateToDashboard } = useApp()
  const handleBack = onBack || navigateToDashboard

  return (
    <div className="product-page">
      <div className="product-page-topbar">
        <button className="back-btn" onClick={handleBack}>
          <svg width="18" height="18" viewBox="0 0 18 18" fill="none">
            <path
              d="M12 3L6 9L12 15"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
          <span>Dashboard'a Dön</span>
        </button>
      </div>

      <div className="product-page-body">
        {product?.id === 'vgn' && <VgnView />}
        {product?.id === 'recorder' && <RecorderView />}
        {!['vgn', 'recorder'].includes(product?.id) && (
          <div className="product-placeholder">
            <h3>{product?.name} Modülü</h3>
            <p>Bu ürün entegrasyonu tamamlandığında burada görünecektir.</p>
          </div>
        )}
      </div>
    </div>
  )
}

export default ProductPage
