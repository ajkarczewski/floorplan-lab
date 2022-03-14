import Oven from "./Oven";
import Sink from "./Sink";

const Kitchen = (props) => {
  return (
    <div>
    <h4>Kitchen </h4>
    <Oven key="oven"/>
    <Sink key="sink"/>
    </div>
  );
  }

  export default Kitchen;