import { useForm } from "react-hook-form";
import { Link, useNavigate } from "react-router-dom";
import { loginUser } from "../Features/Utilities";

const Login = () => {

    const { register, handleSubmit, formState: { errors } } = useForm();
    const navigate = useNavigate();

    const onSubmit = (data) => {
        const email = data.email;
        const password = data.password;
        console.log(email,password);

        loginUser(email, password)
        .then((userCredential) => {
            const loggedUser = userCredential.user;
            console.log(loggedUser);
            navigate("/");
            // ...
          })
          .catch((error) => {
            const errorMessage = error.message;
            console.log(errorMessage);
          });
    }

    return (
        <div className="mt-12 w-11/12 mx-auto">
            <div className="flex justify-center items-center">
                <div>
                    <img src="https://i.ibb.co/FYFnZv6/login-icon-3039.gif" alt="" />
                </div>
                <div className="max-w-sm">
                    
                        <form onSubmit={handleSubmit(onSubmit)}
                            className="card-body">
                            <h3 className="text-4xl text-green-900 font-bold text-center mb-4">Please Login</h3>

                            <div className="form-control flex flex-col mt-2">
                                <label className="label">
                                    <span className="label-text">Email</span>
                                </label>
                                <input type="email" placeholder="email"
                                    {...register('email', { required: true })}
                                    className="input input-bordered mt-2" />
                            </div>
                            <div className="form-control flex flex-col mt-2">
                                <label className="label">
                                    <span className="label-text">Password</span>
                                </label>
                                <input type="password" placeholder="password"
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
                        <p className="text-center mt-8">New Here? <span className="font-bold"><Link to={`/register`}>Register</Link></span></p>
                </div>
                
            </div>

        </div>
    );
};

export default Login;