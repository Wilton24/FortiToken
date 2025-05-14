import Player from './components/Player.jsx';
import Fortitoken from './components/Fortitoken.jsx';
import DisplayNameModal from './components/Modals/DisplayNameModal.jsx';

function App() {
  return (
    <>
      <Player />

      <div id="challenges">
      </div>
      <Fortitoken />
    </>
  );
}

export default App;
