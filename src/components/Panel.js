import React from 'react';
import styled from '@emotion/styled';
//importo SVGS
import moto from '../recourses/vespa.svg';
import camioneta from '../recourses/camioneta.svg';
import autoPremium from '../recourses/cocheClasico.svg';
import auto from '../recourses/coche.svg';

const Img = styled.img`
    width: 100%;
`;
const Panel = ({setCategoria}) => {

    const categorias = [
        {label:'Moto', value:'moto', img:moto},
        {label:'Auto', value:'auto', img:auto},
        {label:'Auto premium', value:'auto-premium', img:autoPremium},
        {label:'Camioneta', value:'camioneta', img:camioneta}
    ];
    const handleChange = e =>{
        setCategoria(e.target.value);
    }
    return (  
        <div className="panel-main">
            {categorias.map( categoria =>(
              <div className="panelCard">
                <div className="panelCard_img" onClick={handleChange}>
                   <Img src={categoria.img} alt={categoria}/>
                </div>
                <input 
                    type="radio" 
                    value={categoria.value} 
                    name="rodado"
                    className="input_radio"
                    onChange={handleChange}
                    />
            </div>
            ))}
        </div>
    );
}
 
export default Panel;