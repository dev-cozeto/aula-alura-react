import React from 'react';
import style from './Botao.module.scss';

interface IProps {
  children: React.ReactNode;
}

/* Componente Botao - extendido de react */
class Botao extends React.Component<IProps>{
  render() {
    // const estaAtivo = false;
    // const styles = {
    //     backgroundColor: estaAtivo ? "green" : "red",
    return <button className={style.botao}>{this.props.children}</button>
  }
}

export default Botao;
