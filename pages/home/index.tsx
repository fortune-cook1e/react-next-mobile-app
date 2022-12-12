export async function getStaticProps() {
  // Call an external API endpoint to get posts

  const posts = new Array(10).fill(0).map((item, index) => ({
    name: index,
    age: index + 20,
  }));

  // By returning { props: { posts } }, the Blog component
  // will receive `posts` as a prop at build time
  return {
    props: {
      posts,
    },
  };
}
interface Props {
  posts: {
    name: number;
    age: number;
  }[];
}

const Home = (props: Props): JSX.Element => {
  return (
    <div>
      this is home
      {props.posts?.map(p => (
        <p key={p.name}>{p.age}</p>
      ))}
    </div>
  );
};

export default Home;
