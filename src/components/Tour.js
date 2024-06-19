import Card from "./Card";

const Tour = ({ tours, removeTour }) => {
    return (
        <div className="container">
            <div>
                <h1 className="title text-5xl font-semibold text-center my-4 border-2 rounded-lg border-gray-300 p-2">
                    Our Tours
                </h1>
            </div>
            <div className="cards">
                {tours.map((tour) => {
                    return (
                        <Card key={tour.id} {...tour} removeTour={removeTour} />
                    );
                })}
            </div>
        </div>
    );
};

export default Tour;
