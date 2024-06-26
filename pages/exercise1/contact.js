import Link from 'next/link';
import NavBar from '../../components/NavBar';

const ContactPage = () => {
  return (
    <div>
      <NavBar />
      <h1>Contact Page</h1>
      <p>This is the Contact Page!</p>
      <Link href="/">Home</Link>
      <br />
      <Link href="/about">About</Link>
    </div>
  );
}

export default ContactPage;
