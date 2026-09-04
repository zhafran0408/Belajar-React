import {useContext} from 'react';
import {NamaContext} from '../AppUseContext';

function Profile() {
    const nama =useContext(NamaContext);
  return (
    <div>
        <h2>Nama Santri : {nama}</h2>
    </div>
  )
}

export default Profile