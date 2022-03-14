import Kitchen from "./Kitchen";
import LivingRoom from './LivingRoom';
import Bedroom from './Bedroom';
import Bath from './Bath';

const FloorPlan = (props) => {
  return (
    <div>
      <Bedroom bedNum={1}/>
      <Kitchen />
      <LivingRoom />
      <Bath size='Full'/>
      <Bedroom bedNum={3}/>
      <Bath size='Half'/>
    </div>
  );
}

export default FloorPlan;