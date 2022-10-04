import React from "react";

export default function Familia(props) {

    const { children } = props;

    return (
        <div>
            {
                // Funciona somente para quando tiver apenas 1 elemento filho
                // React.cloneElement(children, props)

                // Método que manipula todos os filhos
                // React.Children.map(children, (child, index) => React.cloneElement(child, props))

                // Forma simplificada de acessar os filhos sem usar o React diretamente
                children.map((child) => React.cloneElement(child, props))
            }
        </div>
    )
}