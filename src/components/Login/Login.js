import React from 'react';
import useFirebase from '../../hooks/useFirebase';

const Login = () => {
    const {singInWithGoogle} = useFirebase();
    return (
        <div>
             <h3>PleaseLogin</h3>
             <div style={{margin:'20px'}}>
             <button onClick={singInWithGoogle}>Googole Sign In</button>
             </div>
            <form>
                <input type="email" name="" id="" />
                <br />
                <input type="password" name="" id="" />
                <br />
                <input type="submit" value="Login" />
            </form>
        </div>
    );
};

export default Login;