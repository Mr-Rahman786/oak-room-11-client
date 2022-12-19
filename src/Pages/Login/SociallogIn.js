import React, { useContext } from 'react';
import { FaGithub, FaGoogle } from 'react-icons/fa';
import { useLocation, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../Context/Authprovider/Authprovider';

const SociallogIn = () => {
    const location = useLocation()
    const nevigate = useNavigate();
    const from = location.state?.from?.pathname || '/';

    const { googleSignIn } = useContext(AuthContext);

    const handleGoogleSignIn = () => {
        googleSignIn()
            .then(result => {
                const user = result.user;
                console.log(user)
                nevigate(from, { replace: true })
            })
            .catch(err => {
            console.error(err)
            })
    }
    
    return (
        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 text-center mx-auto gap-20 mt-10'>
            <div>
                <FaGoogle onClick={handleGoogleSignIn} className='text-white text-4xl'></FaGoogle>
            </div>
            <div>
                <FaGithub className='text-4xl text-white'></FaGithub>
            </div>
        </div>
    );
};

export default SociallogIn;