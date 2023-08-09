//importer le css depuis le fichier Header.css
import Link from "next/link";
import "./Header.css";

export default function Header() {
  return (
    <div>
      <nav className="nav">
        <Link href="/" className="site-title">
          Next Cine
        </Link>
        <ul>
          <li>
            <Link href="/catalogue">Catalogue</Link>
          </li>
          <li>
            <Link href="/about">A propos</Link>
          </li>
          <li>
            <a href="/forum">Forum</a>
          </li>
          <li>
            <Link href="/blog">Blog</Link>
          </li>
          <li>
            <Link href="/sign-in" className="sign-in">
              Se connecter
            </Link>
          </li>
        </ul>
      </nav>
    </div>
  );
}
