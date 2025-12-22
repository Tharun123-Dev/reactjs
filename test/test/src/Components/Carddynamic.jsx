import './card.css';
import Card from './Components/Carddynamic';

const App = () => {
    const products = [
        { name: 'Product 1', description: 'Description 1', price: '$10' },
        { name: 'Product 2', description: 'Description 2', price: '$20' },
        { name: 'Product 3', description: 'Description 3', price: '$30' },
    ];

    return (
        <div>
            {products.map((product, index) => (
                <Card key={index} product={product} />
            ))}
        </div>
    );
};

export default App;
