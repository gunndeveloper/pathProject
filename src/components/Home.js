import React from 'react'

const Home= (props) => {
    const[state, setState] = React.useState("");
    const searchGoogle= (e) =>{
        props.history.push({ pathname: "/search", state})
    };

    return(
        <div className="home">
            <table>
            <tbody>
            <tr>
                <td width="600px">
                <div id="robotDiv">
                    <img src="/images/robot4.png" alt="logo" height="400px" width="350px"/>  
                </div>
                <div id="textDiv">
                  <p class="bubble speech"><span class="change-content"></span></p>
                </div>
            </td>
            <td align='center'>
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
            </td>
            </tr>
            </tbody>
            </table>
        </div>

    );
};

export default Home;