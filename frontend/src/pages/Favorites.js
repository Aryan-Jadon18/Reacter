import { useFavorites } from '../context/FavoritesContext';
import ProductCard from '../components/ProductCard';

function Favorites() {
  const { favorites } = useFavorites();

  return (
    <div style={{ padding: '40px' }}>
      <h2>❤️ Your Favorites</h2>
      {favorites.length === 0 ? (
        <p>You have no favorite items yet.</p>
      ) : (
        <div style={styles.grid}>
          {favorites.map(product => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      )}
    </div>
  );
}

const styles = {
  grid: {
    marginTop: '20px',
    display: 'flex',
    gap: '20px',
    flexWrap: 'wrap',
    justifyContent: 'center',
  }
};

export default Favorites;
