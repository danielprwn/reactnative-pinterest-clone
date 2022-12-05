import pins from '../assets/data/pins';
import PinList from '../components/PinList';

export default function HomeScreen() {
  return (
    <PinList pins={pins}/>
  );
}
