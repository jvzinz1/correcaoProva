export default function Eventos({titulo, descricao, horario, local}){
    return(
        <section class="evento">
            <label class="informacao">
                <h1>{titulo}</h1>
                <p>{descricao}</p>
                <p>{horario}</p>
                <p>{local}</p>
            </label>
            <img src="./img.png" alt="" />
        </section>
    )
}

