
import { Helmet } from "react-helmet-async";
import { useForm } from "react-hook-form";

import { Link, useLocation, useNavigate } from "react-router-dom";
import Swal from 'sweetalert2';
import useAuth from "../../Hooks/useAuth";

const SignUp = () => {
    const imageHostKey = import.meta.env.VITE_imgbb_key;
    const navigate = useNavigate();
    const location = useLocation();
    const from = location.state?.from?.pathname||'/';
    const { createUser, updateUserProfile } = useAuth();
    const {
        register,
        handleSubmit, reset,
        formState: { errors },
    } = useForm();

    const onSubmit = (data) => {
        const formData = new FormData();
        createUser(data.email, data.password)
            .then(result => {
                const loggedUser = result.user;
                console.log(loggedUser);

                console.log(data.image[0])
                const image = data.image[0];
                formData.append('image', image);
                const url = `https://api.imgbb.com/1/upload?key=${imageHostKey}`
                fetch(url, {
                    method: 'POST',
                    body: formData
                })
                    .then(res => res.json())
                    .then(imageData => {
                        console.log(imageData);
                        if (imageData.success) {
                            console.log(imageData.data.url);
                            const user = {
                                name: data.name,
                                email: data.email,
                                photoURL: imageData.data.url

                            }
                            // post doctor 
                            updateUserProfile(data.name, imageData.data.url)
                                .then(() => {

                                    fetch('https://bistro-server-olive.vercel.app/user', {
                                        method: 'POST',
                                        headers: {
                                            'content-type': 'application/json'
                                        },
                                        body: JSON.stringify(user)
                                    })
                                        .then(res => res.json())
                                        .then(data => {
                                            if (data.acknowledged) {
                                                navigate(from, {replace:true});
                                                Swal.fire({
                                                    title: 'User Created Successfully',
                                                    showClass: {
                                                        popup: 'animate__animated animate__fadeInDown'
                                                    },
                                                    hideClass: {
                                                        popup: 'animate__animated animate__fadeOutUp'
                                                    }
                                                })
                                              
                                            }



                                        })



                                })
                                .catch(error => console.log(error))




                        }
                    })

            })

    }


    return (
        <>
            <Helmet>
                <title>food mania  | Sign up</title>

            </Helmet>
            <div className="hero min-h-screen bg-base-200">
                <div className="hero-content flex-col lg:flex-row-reverse">
                    <div className="text-center lg:text-left">
                        <h1 className="text-5xl font-bold">Sign up here</h1>
                        <p className="py-6">Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi.</p>
                    </div>
                    <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
                        <form className="card-body" onSubmit={handleSubmit(onSubmit)} >
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Name</span>
                                </label>
                                <input type="text" {...register("name", { required: true })} name="name" placeholder="name" className="input input-bordered" />
                                {errors.name && <span className="text-rose-600">Name is required</span>}
                            </div>
                            {/* <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Photo</span>
                                </label>
                                <input type="text" {...register("photoURL", { required: true })} name="photoURL" placeholder="photo URL" className="input input-bordered" />
                                {errors.photoURL && <span className="text-rose-600">photoURL is required</span>}
                            </div> */}
                            <div className="form-control">
                                <label className="label"> <span className="label-text">Photo</span></label>
                                <input type="file" name="image" {...register("image", {
                                    required: "Photo is Required"
                                })} className="input input-bordered w-full max-w-xs" />
                                {errors.photoURL && <span className="text-rose-600">Photo is required</span>}
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Email</span>
                                </label>
                                <input type="email" {...register("email", { required: true })} name="email" placeholder="email" className="input input-bordered" />
                                {errors.email && <span className="text-rose-600">Email is required</span>}
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Password</span>
                                </label>
                                <input type="password" {...register("password", { required: true })} name="password" placeholder="password" className="input input-bordered" minLength={8} />
                                {errors.password && <span className="text-rose-600">Password is required</span>}
                                <label className="label">
                                    <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
                                </label>
                            </div>
                            <div className="form-control mt-6">
                                <input type="submit" className="btn btn-primary" value="Sign Up" />
                            </div>
                        </form>
                        <p>Already Have an account? <Link to="/login">Login here</Link> </p>
                    </div>
                </div>
            </div>
        </>
    );
};

export default SignUp;