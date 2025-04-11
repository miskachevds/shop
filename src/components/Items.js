import Item from "./Item";

function Items({ items, onAdd, onShowItem }) {
    return (
        <div>
            <main>
                {
                    items.map(el => (
                        <Item onShowItem={onShowItem} key={el.id} item={el} onAdd={onAdd} />
                    ))
                }

            </main>
        </div>
    )
}

export default Items;