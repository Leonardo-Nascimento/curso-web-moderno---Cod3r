import React from "react";


export default props =>

    <div>
        <h1>{props.nome} {props.sobrenome}</h1>
        <h2>Filhos</h2>

        <ul>
            {/* <Filho nome="Pedro" sobrenome={props.sobrenome} /> */}
            {/* se as props que foram passadas tiverem o mesmo nome dos parametros do componente */}
            {/* ao extrar usando o spread (...), elas serão passadas altomativamente para o componente*/}
            {/* <Filho {...props} /> */}

            {/* <Filho  {...props} nome="Carla"/> */}

            {React.cloneElement(props.children, {
                ...props, ...props.children.props
            })
            }

        </ul>
    </div>
