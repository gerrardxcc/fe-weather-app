
import CardHeader from '../CardHeader/CardHeader';
import Forecast from '../Forecast/Forecast';
import SocialMedia from '../SocialMedia/SocialMedia';
import './Main.css';

function Main() {
  return (
    <div className="Main">
      <CardHeader/>
      <div className='flex details'>
        <SocialMedia/>
        <Forecast/>
      </div>
    </div>
  );
}

export default Main;
