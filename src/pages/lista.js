import React, {useState, useEffect} from 'react';
import style from './lista.module.css'
import md5 from 'md5';
import Axios from 'axios';
import ContainerModal from '../componentes/modal';

function Lista(props) {

    const publicKey = '72ebb1cd3b7c43786d0ee0a6e6960c4d'
    const privateKey = '6914aaf2762024008aa86fb77f2661b63a5b301c'
    const time = Number(new Date())
    const hash = md5(time + privateKey + publicKey)

    const [comics, setComics] = useState([])
    const [modelVisible, setModalVisible] = useState(false)

    useEffect(() => {
        Axios.get(`http://gateway.marvel.com/v1/public/comics?ts=${time}&apikey=${publicKey}&hash=${hash}`)
        .then(response => setComics(response.data.data.results))
        .catch((err) => {
            console.log(err)
        })
    },[])

    function fecharModal () {
        setModalVisible(false)
    }
    
    return (
        <div className={style.container}>
             <ul>
            {comics && comics.map((comic) => {
                return <li>
                    <h1>{comic.title}</h1>
                    <button onClick={() => setModalVisible(true)}>Comprar</button>
                </li>
            })}
        </ul>

        {modelVisible ? (
            <div>
                <section className={style.modal}>
                    <h1 id='title'>Confirme sua Localização</h1>
                    <ContainerModal />
                    <div style={{margin: "0.4em"}} >
                        {<ContainerModal /> ? ('R$ 120,00') : null}
                    </div>
                    <div className={style.buttons}>
                        <button onClick={fecharModal}>Fechar</button>
                        <button>Comprar</button>
                    </div>
                </section>
            </div>
        ) : null}

        </div>
    );
}

export default Lista;