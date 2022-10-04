// Import do modulo que trabalha a manipulação do DOM com o React
import ReactDOM from 'react-dom';

const div = document.querySelector('#root');
/**
 * Método que renderiza conteúdos na tela 
 * 1° parametro -> Conteúdo
 * 2° parametro -> Elemento do DOM que irá exibir
 */
ReactDOM.render('Olá, Mundo!', div);