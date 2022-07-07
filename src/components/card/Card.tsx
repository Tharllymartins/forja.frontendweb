import "./index.css"

interface ICard {
    name: string;
}


export function Card({name}: ICard) {
    return (
        <div className="card">
            <span>
                <h3>
                    {name}
                </h3>
            </span>
        </div>
        )

}