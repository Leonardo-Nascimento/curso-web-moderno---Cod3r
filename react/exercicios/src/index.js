import ReactDOM from 'react-dom';
//import Primeiro from './componentes/Primeiro'
import BomDia from './componentes/BomDia'
import Multi, { BoaNoite } from './componentes/Multiplos'
import Saudacao from './componentes/Saudacao'
import Pai from './componentes/Pai'
import Filho from './componentes/Filho';



ReactDOM.render(
    <div>
        <Pai nome="Paulo" sobrenome="Silva">
            <Filho nome="Pedro" />
            {/* <Filho nome="Paulo" />
            <Filho nome="Carla" /> */}
        </Pai>
    </div>

    , document.getElementById('root'));

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals

