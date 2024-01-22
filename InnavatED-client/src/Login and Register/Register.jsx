import { useForm } from "react-hook-form";
import { Link, useNavigate } from "react-router-dom";
import { createUser, updateUserProfile } from "../Features/Utilities";

const Register = () => {

    const { register, handleSubmit, formState: { errors } } = useForm();
    const navigate = useNavigate();

    const onSubmit = (data) => {
        const email = data.email;
        const name = data.name;
        const password = data.password;
        const photo = data.photo;
        console.log(email, name, password,photo);

        createUser(email, password)
            .then((userCredential) => {
                const loggedUser = userCredential.user;
                updateUserProfile(name, photo)
                .then(()=>{
                    console.log("updated successfully");
                    console.log(loggedUser);
                    navigate("/login");
                })
            })
            .catch((error) => {
                const errorCode = error.code;
                const errorMessage = error.message;
                console.log(errorCode,errorMessage);
              });

    }

    return (
        <div className="mt-12 w-11/12 mx-auto">
            <div className="flex flex-row-reverse justify-center items-center">
                <div>
                    <img src="https://i.ibb.co/FYFnZv6/login-icon-3039.gif" alt="" />
                </div>
                <div className="max-w-sm">

                    <form onSubmit={handleSubmit(onSubmit)}
                        className="card-body">
                        <h3 className="text-4xl text-green-900 font-bold text-center mb-4">Please Register</h3>

                        <div className="form-control flex flex-col mt-2">
                            <label className="label">
                                <span className="label-text">Email</span>
                            </label>
                            <input type="email" placeholder="Email"
                                {...register('email', { required: true })}
                                className="input input-bordered mt-2" />
                        </div>
                        <div className="form-control flex flex-col mt-2">
                            <label className="label">
                                <span className="label-text">User Name</span>
                            </label>
                            <input type="text" placeholder="Your Name"
                                {...register('name', { required: true })}
                                className="input input-bordered mt-2" />
                        </div>
                        <div className="form-control flex flex-col mt-2">
                            <label className="label">
                                <span className="label-text">Photo URL</span>
                            </label>
                            <input type="text" placeholder="Photo URL"
                                {...register('photo', { required: true })}
                                className="input input-bordered mt-2" />
                        </div>
                        <div className="form-control flex flex-col mt-2">
                            <label className="label">
                                <span className="label-text">Password</span>
                            </label>
                            <input type="password" placeholder="Password"
                                {...register('password',
                                    { required: true })}
                                className="input input-bordered mt-2" />

                        </div>

                        {/* <div>
                    {
                        error && <p className="text-red-500"> {error}</p>
                    }

                    </div> */}
                        <div className="form-control mt-6">
                            <input className="btn btn-style" type="submit" value="Submit" />
                        </div>
                    </form>
                    <p className="text-center mt-8">Already have an account? <span className="font-bold"><Link to={`/login`}>Login</Link></span></p>
                </div>

            </div>

        </div>
    );
};

export default Register;