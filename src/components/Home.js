import React from 'react'

const Home= (props) => {
    const[state, setState] = React.useState("");
    const searchGoogle= (e) =>{
        props.history.push({ pathname: "/search", state})
    };

    return(
        <div className="home">
            <div className="home__container">
            <div className="home__logo">
                <img src="/images/pLogo1.svg" alt="logo" height="100px" width="400px"/>
            </div>
            <form className="home__form" onSubmit={searchGoogle}>
                <div class="container">
                    <input
                    type="text"
                    onChange={(e)=> setState(e.target.value)}
                    value={state}
                    required
                    />
                    <div class="search"></div>
                </div>
            </form>
            </div>
        

        </div>

    );
};

export default Home;