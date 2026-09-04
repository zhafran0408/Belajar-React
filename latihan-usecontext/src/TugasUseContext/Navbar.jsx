import {useContext} from  'react';
import {NamaContext}  from '../AppUseContext';

function Navbar (){
    const nama = useContext(NamaContext);

    return (
        <nav>
            <h1>Selamat Datang {nama}</h1>
        </nav>
    )
}
export default Navbar;