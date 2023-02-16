
import './SocialMedia.css';
import SocialMediaPost from '../SocialMediaPost/SocialMediaPost'

const post = [
    {
        profileUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTe0Hsu8YYt0Gi6ZxY-aPkV7Os7abmxProPNg&usqp=CAU',
        content: 'Dont forogt to bring your suit sdf sdfsdf sdf sdf sd sdf sd s sf s sdf sf s',
    },
    {
        profileUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTe0Hsu8YYt0Gi6ZxY-aPkV7Os7abmxProPNg&usqp=CAU',
        content: 'Dont forogt to bring your suit sdf sdfsdf sdf sdf sd sdf sd s sf s sdf sf s',
    },
    {
        profileUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTe0Hsu8YYt0Gi6ZxY-aPkV7Os7abmxProPNg&usqp=CAU',
        content: 'Dont forogt to bring your suit sdf sdfsdf sdf sdf sd sdf sd s sf s sdf sf s',
    },
    {
        profileUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTe0Hsu8YYt0Gi6ZxY-aPkV7Os7abmxProPNg&usqp=CAU',
        content: 'Dont forogt to bring your suit sdf sdfsdf sdf sdf sd sdf sd s sf s sdf sf s',
    }
]

function SocialMedia() {
  return (
    <div className="SocialMedia">
      <div className={['socialMedia-title-container', 'flex', 'flex-end'].join(' ')}>
            <img className='socialMedia-title-img' src="https://e7.pngegg.com/pngimages/708/311/png-clipart-twitter-twitter-thumbnail.png" alt="as"/>
            <p className='clear-padding clear-margin socialMedia-title'>Twitter Feed</p>
            <span className='socialMedia-city'>#France</span>
      </div>
      <div className='posts'>
        {post.map(item => {
            return <SocialMediaPost item={item}/>
        })}
      </div>
      <div>
        <button>NEXT</button>
      </div>
    </div>
  );
}

export default SocialMedia;
