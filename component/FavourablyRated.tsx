import './FavourablyRated.css';

const FavourablyRated = () => {
    return (
        <div className="favourably-rated">
            <h1>Favourably Rated On Software Review Sites</h1>
            <div className="rating-container">
                <div className="rating">
                    <img src="src/Photos/s-suggest-blue-logo.png" alt="Software Suggest" />
                    <div className="stars">
                        <span className="star">★</span>
                        <span className="star">★</span>
                        <span className="star">★</span>
                        <span className="star">★</span>
                        <span className="star">★</span>
                    </div>
                </div>
                <div className="rating">
                    <img src="src/Photos/capterra-software-logo.png" alt="Capterra" />
                    <div className="stars">
                        <span className="star">★</span>
                        <span className="star">★</span>
                        <span className="star">★</span>
                        <span className="star">★</span>
                        <span className="star">★</span>
                    </div>
                </div>
                <div className="rating">
                    <img src="src/Photos/software-advice-logo.svg" alt="Software Advice" />
                    <div className="stars">
                        <span className="star">★</span>
                        <span className="star">★</span>
                        <span className="star">★</span>
                        <span className="star">★</span>
                        <span className="star">★</span>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default FavourablyRated;