import LikeButton from "./likebutton";

const PostCard = ({ post }) => {
  return (
    <div style={{
      border: "1px solid #ddd",
      padding: "16px",
      margin: "16px 0",
      borderRadius: "8px",
      display: "flex",
      alignItems: "center",
      gap: "16px",
    }}>
      <img 
        src={post.profilePicture} 
        alt={post.username} 
        style={{ width: "50px", height: "50px", borderRadius: "50%" }} 
      />
      <div>
        <h3>{post.username}</h3>
        <p>{post.content}</p>
        <LikeButton />
      </div>
    </div>
  );
};

export default PostCard;