import axios from "axios";

function ResetButton(){

    const resetItems = () => {
    axios.put('/list/reset', {
        purchased: FALSE
    }).then(response => {
        console.log('the purchased items have been reset');
    }).catch((error) => {
        console.log('error in reset', error);
    })
}

    return (
        <button onClick={resetItems}>Reset</button>
    )
}



export default Reset;