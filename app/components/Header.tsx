//importer le css depuis le fichier Header.css
import "./Header.css";

export const Header = () => {
  return (
    <div>
      <nav className="nav">
        <a href="/" className="site-title">
          Next Cine
        </a>
        <ul>
          <li>
            <a href="/catalogue">Catalogue</a>
          </li>
          <li>
            <a href="/about">À propos</a>
          </li>
          <li>
            <a href="/forum">Forum</a>
          </li>
          <li>
            <a href="/signin">Se connecter</a>
          </li>
        </ul>
      </nav>
    </div>
  );
};
