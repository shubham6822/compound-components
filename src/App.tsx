import PostCard from './PostCard';

function App() {
  return (
    <PostCard>
      <PostCard.Title>The Title of the Post</PostCard.Title>
      <PostCard.Description>This is a brief description of the post.</PostCard.Description>
      <PostCard.PrimaryButton>Read More</PostCard.PrimaryButton>
      <PostCard.SecondaryButton>Save for Later</PostCard.SecondaryButton>
    </PostCard>
  );
}

export default App;
