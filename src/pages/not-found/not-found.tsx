import { Link } from 'react-router-dom';
import './not-found.css';
function NotFound() {
  return (
    <main className="not-found">
      <h2>Страница не найдена</h2>
      <Link to="/" className="not-found__link">
        На главную
      </Link>
    </main>
  );
}

export default NotFound;
