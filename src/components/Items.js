import Item from "./Item";

function Items({ items }) {
    return (
        <div>
            <main>
                {
                    items.map(el => (
                        <Item key={el.id} item={el} />
                    ))
                }

            </main>
        </div>
    )
}

export default Items;