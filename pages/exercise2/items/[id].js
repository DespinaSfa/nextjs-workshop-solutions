import { items } from '../../data';

export async function getStaticPaths() {
  const paths = items.map((item) => ({
    params: { id: item.id.toString() },
  }));

  return {
    paths,
    fallback: false,
  };
}

export async function getStaticProps({ params }) {
  const item = items.find((item) => item.id.toString() === params.id);
  return {
    props: {
      item,
    },
  };
}

export default function ItemPage({ item }) {
  return (
    <div>
      <h1>{item.name}</h1>
      <p>{item.description}</p>
    </div>
  );
}
