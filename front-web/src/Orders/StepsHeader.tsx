function StepsHeader(){
    return(
        <header className="orders-steps-container">
            <div className="orders-steps-content">
                <h1 className="steps-title">
                    SIGA AS <br /> ETAPAS                        
                </h1>
                <ul className="steps-items">
                    <li>
                        <span className="steps-number">1</span>
                        Seleciona os produtos e localização.
                    </li>
                    <li>
                        <span className="steps-number">2</span>
                        Depois clique em <strong>"ENVIAR PEDIDO"</strong>
                    </li>
                </ul>
            </div>
        </header>    
    )
}


//Dicas Tag "ul" trabalhar com estrutura de uma lista e a tag "li" seria a lista
//Tag "span" para enumerar os itens da lista
export default StepsHeader;