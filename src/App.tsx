import PostCard from './PostCard';
import Tabs from './Tab';

function App() {
  return (
    <>
      <PostCard>
        <PostCard.Title>The Title of the Post</PostCard.Title>
        <PostCard.Description>This is a brief description of the post.</PostCard.Description>
        <PostCard.PrimaryButton>Read More</PostCard.PrimaryButton>
        <PostCard.SecondaryButton>Save for Later</PostCard.SecondaryButton>
      </PostCard>
      <Tabs defaultTab='1'>
        <Tabs.list>
          <Tabs.Tab id='1'>Tab 1</Tabs.Tab>
          <Tabs.Tab id='2'>Tab 2</Tabs.Tab>
          <Tabs.Tab id='3'>Tab 3</Tabs.Tab>
        </Tabs.list>
        <Tabs.Panel id='1'>Tab 1 Content</Tabs.Panel>
        <Tabs.Panel id='2'>Tab 2 Content</Tabs.Panel>
        <Tabs.Panel id='3'>Tab 3 Content</Tabs.Panel>
      </Tabs>
    </>
  );
}

export default App;
