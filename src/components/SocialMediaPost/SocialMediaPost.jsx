import './SocialMediaPost.css';

function SocialMediaPost(props) {
    const { item }= props;
    return (
        <div className="SocialMediaPost flex flex-center">
            <img className="post-img" src={item.profileUrl} alt="df"/>
            <p className='post-content'>{item.content}</p>
        </div>
    );
}

export default SocialMediaPost;
