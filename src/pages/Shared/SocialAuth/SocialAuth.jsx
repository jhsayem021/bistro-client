
import { FcGoogle } from "react-icons/fc";
import { useLocation, useNavigate } from 'react-router-dom';
import useAuth from "../../../Hooks/useAuth";
const SocialAuth = () => {

    const {googleSignIn } = useAuth();
    const navigate = useNavigate();
    const location = useLocation();
    const from = location.state?.from?.pathname||'/';
    console.log(location.state?.from?.pathname)
    const handleGoogleSignIn = () =>{
        googleSignIn()
        .then(result=>{
            const loggedInUser = result.user;
            console.log(loggedInUser);
            const saveUser ={
                name: loggedInUser.displayName,
                email: loggedInUser.email,
                photoURL: loggedInUser.photoURL
            }
            console.log(saveUser)
            fetch('https://bistro-server-olive.vercel.app/user', {
                method: 'POST',
                headers: {
                    'content-type': 'application/json'
                },
                body: JSON.stringify(saveUser)
            })
                .then(res => res.json())
                .then(() => {

                    
                    
                })


            .catch(error => console.log(error))


            navigate(from, {replace:true});


        })
        
    }
    return (
        <div className='w-full text-center mb-5'>
            <div className="divider"></div>
                    <button onClick={handleGoogleSignIn} className="btn btn-circle ">
                        <FcGoogle className='w-full' ></FcGoogle>
                    </button>

           
        </div>
    );
};

export default SocialAuth;