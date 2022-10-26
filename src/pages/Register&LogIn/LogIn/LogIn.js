import { GithubAuthProvider, GoogleAuthProvider } from 'firebase/auth';
import React, { useContext, useState } from 'react';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../../contexts/AuthProvider/AuthProvider';

const LogIn = () => {
    const [error, setError] = useState();
    const { user, signIn, providerSignIn } = useContext(AuthContext);

    const googleProvider = new GoogleAuthProvider();
    const githubProvider = new GithubAuthProvider();

    const handleSubmit = event => {
        event.preventDefault();
        const form = event.target;
        console.log(form);
        const email = form.email.value;
        const password = form.password.value;
        console.log(email, password);

        signIn(email, password)
            .then(result => {
                const user = result.user
                console.log(user);
                form.reset();
                setError('');
            })
            .catch(error => {
                console.error(error);
                setError(error.message)

            })
    }

    //sign in with google
    const handleGoogleSignIn = () => {
        providerSignIn(googleProvider)
            .then(result => {
                const user = result.user
                console.log(user)
            }).catch(error => console.error(error))
    }

    // sign in with github
    const handleGithubSignIn = () => {
        providerSignIn(githubProvider)
            .then(result => {
                const user = result.user
                console.log(user)
            }).catch(error => console.error(error))
    }
    return (

        <div className="hero min-h-screen bg-base-200">
            <div className="hero-content flex-col">
                <div className="text-center lg:text-left">
                    <h1 className="text-5xl font-bold">Please Sign In now!</h1>
                    <p className="py-6">If you have an account, Please Sign In.</p>
                </div>
                <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
                    <form onSubmit={handleSubmit} className="card-body">
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Email</span>
                            </label>
                            <input type="email" name='email' placeholder="email" className="input input-bordered" required />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text" name='password'>Password</span>
                            </label>
                            <input type="password" name='password' placeholder="password" className="input input-bordered" required />
                            <label className="label">
                                <Link href="#" className="label-text-alt link link-hover">Forgot password?</Link>
                            </label>
                        </div>

                        <div> {error} </div>

                        <div className="form-control mt-6">
                            <button className="btn btn-accent">Sign In</button>
                        </div>

                        <div className="form-control mt-6">
                            <button onClick={handleGoogleSignIn} className="btn btn-accent">Sign In With Google</button>
                        </div>

                        <div className="form-control mt-6">
                            <button onClick={handleGithubSignIn} className="btn btn-accent">Sign In With Github</button>
                        </div>
                        <label className="label">
                            <Link to='/registration' className="label-text-alt link link-hover text-xl">New to this site! Plz Register first</Link>
                        </label>

                    </form>
                </div>
            </div>
        </div>

    );
};

export default LogIn;