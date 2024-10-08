import { useUserContext } from "@/context/AuthContext";
import { Outlet, Navigate } from "react-router-dom";

function AuthLayout() {
  const { isAuthenticated } = useUserContext();

  return (
    <>
      {isAuthenticated ? (
        <Navigate to="/" />
      ) : (
        <>
          <section className="flex flex-col flex-1 justify-center items-center py-10">
            <Outlet />
          </section>
          <img
            src="/assets/images/side-img.svg"
            alt="Snapgram logo"
            className="hidden xl:block h-screen w-1/2 object-cover bg-no-repeat"
          />
        </>
      )}
    </>
  );
}

export default AuthLayout;
