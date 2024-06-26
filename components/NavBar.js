import Link from 'next/link';

const NavBar = () => {
  return (
    <nav>
      <ul>
        <li>
          <Link href="/exercise1">
            Home
          </Link>
        </li>
        <li>
          <Link href="/exercise1/about">
            About
          </Link>
        </li>
        <li>
          <Link href="/exercise1/contact">
            Contact
          </Link>
        </li>
      </ul>
    </nav>
  );
}

export default NavBar;
