import { Barchart } from './Barchart/Barchart';

const width = 960;
const height = 500;
const margin = {
  top: 20,
  right: 30,
  bottom: 65,
  left: 220,
};

const xAxisLabelOffset = 50;

const App = () => {
  return (
    <Barchart
      width={width}
      height={height}
      margin={margin}
      xAxisLabelOffset={xAxisLabelOffset}
    />
  );
};

export default App;
