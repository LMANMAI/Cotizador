import React, {useState} from 'react';
//importo componentes
import Panel from './Panel';



const Formulario = () => {
    const [categoria, setCategoria ] =useState('');
    console.log(categoria);
    return ( 
        <form>
           <Panel setCategoria={setCategoria}/>
           
           <input 
                type="submit"
                value="Asegurar"
                className="btn btn-submit"
           />
        </form>
     );
}
 
export default Formulario;