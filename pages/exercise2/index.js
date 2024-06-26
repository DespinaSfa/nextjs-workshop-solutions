import Link from 'next/link';
import { items } from '../data';

export async function getStaticProps() {
  return {
    props: {
      items,
    },
  };
}

export default function HomePage({ items }) {
  return (
    <div>
      <h1>Artikelliste</h1>
      <ul>
        {items.map((item) => (
          <li key={item.id}>
            <Link href={`exercise2/items/${item.id}`}>
              {item.name}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
