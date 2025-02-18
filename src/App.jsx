import { useState } from 'react';
import reactLogo from './assets/react.svg';
import viteLogo from '/vite.svg';
import './App.css';

const LikeButton = ({ isLiked, onClick }) => {
  return (
    <button
      onClick={onClick}
      style={{
        backgroundColor: isLiked ? 'red' : 'gray',
        color: 'white',
        border: 'none',
        padding: '8px 16px',
        cursor: 'pointer',
        borderRadius: '5px',
      }}
    >
      {isLiked ? 'Liked' : 'Like'}
    </button>
  );
};

const PostCard = ({ post, toggleLike }) => {
  return (
    <div style={{
      border: '1px solid #ddd',
      padding: '16px',
      margin: '16px 0',
      borderRadius: '8px',
      display: 'flex',
      alignItems: 'center',
      gap: '16px',
    }}>
      <img 
        src={post.profileImage} 
        alt={post.username} 
        style={{ width: '50px', height: '50px', borderRadius: '50%' }} 
      />
      <div>
        <h3>{post.username}</h3>
        <p>{post.content}</p>
        <LikeButton isLiked={post.isLiked} onClick={() => toggleLike(post.id)} />
      </div>
    </div>
  );
};

function App() {
  const [posts, setPosts] = useState([
    {
      id: 1,
      profileImage: 'https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?cs=srgb&dl=pexels-pixabay-220453.jpg&fm=jpg',
      username: 'alice',
      content: 'This is my first post!',
      isLiked: false,
    },
    {
      id: 2,
      profileImage: 'https://writestylesonline.com/wp-content/uploads/2016/08/Follow-These-Steps-for-a-Flawless-Professional-Profile-Picture.jpg',
      username: 'bob',
      content: 'Loving this social media app.',
      isLiked: true,
    },
    {
      id: 3,
      profileImage: 'https://png.pngtree.com/png-clipart/20230927/original/pngtree-man-avatar-image-for-profile-png-image_13001882.png',
      username: 'charlie',
      content: 'Just another day...',
      isLiked: false,
    },
  ]);

  const toggleLike = (id) => {
    setPosts(posts.map(post => 
      post.id === id ? { ...post, isLiked: !post.isLiked } : post
    ));
  };

  return (
    <div style={{ width: '50%', margin: 'auto', padding: '20px' }}>
      <h1>Social Media Feed</h1>
      {posts.map(post => (
        <PostCard key={post.id} post={post} toggleLike={toggleLike} />
      ))}
    </div>
  );
}

export default App;