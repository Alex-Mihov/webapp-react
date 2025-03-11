// Definizione del componente ReviewCard come funzione
export default function ReviewCard() {
    return (
        <>
            {/* ReviewCard component */}
            <div className="review-container">
                {/* Nome del recensore */}
                <span className="reviewer-name">
                    Nome Recensore
                </span>

                {/* Voto della recensione */}
                <strong className="review-rating">
                    Voto: voto recensione
                </strong>

                {/* Testo della recensione */}
                <p className="review-text">
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptate, quod at quis nihil perferendis facilis neque minus, itaque et odio id quam? Earum, veritatis esse quibusdam perspiciatis illo commodi ducimus?
                </p>
            </div>
        </>
    )
}
