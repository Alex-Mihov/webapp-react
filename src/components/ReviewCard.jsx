// Definizione del componente ReviewCard come funzione
export default function ReviewCard(props) {

    const { name, vote, text } = props.reviewProp

    return (
        <>
            {/* ReviewCard component */}
            <div className="review-container">
                {/* Nome del recensore */}
                <span className="reviewer-name">
                    {name}
                </span>

                {/* Voto della recensione */}
                <strong className="review-rating">
                    Voto: {vote}
                </strong>

                {/* Testo della recensione */}
                <p className="review-text">
                    {text}
                </p>
            </div>
        </>
    )
}
