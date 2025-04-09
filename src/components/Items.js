import Item from "./Item";

function Items({ items, onAdd }) {
    return (
        <div>
            <main>
                {
                    items.map(el => (
                        <Item key={el.id} item={el} onAdd={onAdd} />
                    ))
                }

            </main>
        </div>
    )
}

export default Items;