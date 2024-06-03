import React, { useState } from "react";
import { Link } from "react-router-dom";

const Login = () => {
  const [userData, setUserData] = useState({
    email: "",
    password: "",
  });

  const changeInputHand = (e) => {
    setUserData((prevState) => {
      return { ...prevState, [e.target.name]: e.target.value };
    });
  };
  return (
    <section className=" flex mt-24 items-center justify-center">
      <div className="mx-auto max-w-screen-xl px-4 flex items-center justify-center py-10 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-lg">
          <h1 className="text-center text-2xl font-bold text-indigo-600 sm:text-3xl">
            Blogs du jour
          </h1>
          <p className="mx-auto mt-4 max-w-md text-center text-gray-500">
            Bienvenue sur notre page "Blogs du Jour" ! Chaque jour, nous
            sélectionnons pour vous les articles les plus pertinents, captivants
            et inspirants de la blogosphère.
          </p>
          <form
            action="#"
            className="mb-0 mt-6 space-y-4 rounded-lg p-4 shadow-lg sm:p-6 lg:p-8"
          >
            <p className="text-center text-lg font-medium">Connexion</p>
            <div>
              <div className="relative">
                <input
                  type="email"
                  className="w-full rounded-lg border-gray-200 p-4 pe-12 text-sm shadow-sm"
                  placeholder="Email"
                  name="email"
                  value={userData.email}
                  onChange={changeInputHand} autoFocus
                />
              </div>
            </div>
            <div>
              <div className="relative">
                <input
                  type="password"
                  className="w-full rounded-lg border-gray-200 p-4 pe-12 text-sm shadow-sm"
                  placeholder="Password"
                  name="password"
                  value={userData.password}
                  onChange={changeInputHand}
                />
              </div>
            </div>
            <button
              type="submit"
              className="block w-full rounded-lg bg-indigo-600 px-5 py-3 text-sm font-medium text-white"
            >
              Se connecter
            </button>
            <p className="text-center text-sm text-gray-500">
              Pas de compte ?
              <Link to="/register" className="underline" href="#">
                s'inscrire
              </Link>
            </p>
          </form>
        </div>
      </div>
    </section>
  );
};
export default Login;
