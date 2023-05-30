import { useContext } from "react";
import { Helmet } from "react-helmet-async";
import { useForm } from "react-hook-form";
import { AuthContext } from "../../providers/AuthProvider";
import { Link } from "react-router-dom";


const SignUp = () => {
    const { register, handleSubmit, formState: { errors } } = useForm();
    const {createuser} =useContext(AuthContext)
    const onSubmit = data => {
        console.log(data)
        createuser(data.email, data.password)
        .then(result =>{
            const loggedUser = result.user;
            console.log(loggedUser)
        })
    }
   
    return (
       <>
       <Helmet>
                <title>Bistro Boss || Signup</title>
            </Helmet>
        <div className="hero min-h-screen bg-base-200">
            <div className="hero-content flex-col lg:flex-row-reverse">
                <div className="text-center lg:text-left">
                    <h1 className="text-5xl font-bold">Sign up now!</h1>
                    <p className="py-6">Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi.</p>
                </div>
                <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
                    <form className="card-body"  onSubmit={handleSubmit(onSubmit)}>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">name</span>
                            </label>
                            <input type="name" {...register("name")} name="name" placeholder="name" className="input input-bordered" />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">email</span>
                            </label>
                            <input type="email" name="email" {...register("email")} placeholder="email" className="input input-bordered" />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Password</span>
                            </label>
                            <input type="password" {...register("password", { required: true })} name="password" placeholder="password" className="input input-bordered" />
                            {errors.password && <span>This field is required</span>}
                            <label className="label">
                                <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
                            </label>
                        </div>
                        <div className="form-control mt-6">
                            <input type="submit" className="btn btn-primary"  value='Sign Up'/>
                        </div>
                    </form>
                    <p><small>Alrady have an Acount: <Link to ='/login' className="font-bold text-orange-500">Login</Link></small></p>
                    <div>

                    </div>
                </div>
            </div>
        </div>
       </>
    )
}
export default SignUp