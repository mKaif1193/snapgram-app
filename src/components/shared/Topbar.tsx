import { Link, useNavigate } from "react-router-dom";
import { Button } from "../ui/button";
import { INITIAL_USER, useUserContext } from "@/context/AuthContext";
import { useLogoutAccount } from "@/lib/react-query/queriesAndMutations";
import Loader from "./Loader";

const Topbar = () => {
  const navigate = useNavigate();
  const { user, setUser, setIsAuthenticated, isLoading } = useUserContext();
  const { mutate: logout } = useLogoutAccount();

  const handleLogout = async (
    e: React.MouseEvent<HTMLButtonElement, MouseEvent>
  ) => {
    e.preventDefault();
    logout();
    setIsAuthenticated(false);
    setUser(INITIAL_USER);
    navigate("/login");
  };

  return (
    <section className="topbar">
      <div className="flex-between py-4 px-5">
        <Link to="/" className="flex gap-3 items-center">
          <img
            src="/assets/images/logo.svg"
            alt="logo"
            width={130}
            height={325}
          />
        </Link>

        <div className="flex gap-4">
          <Button
            variant="ghost"
            className="shad-button_ghost"
            onClick={handleLogout}
          >
            <img src="/assets/icons/logout.svg" alt="logout" />
          </Button>
          {isLoading || !user.email ? (
            <div className="h-14">
              <Loader />
            </div>
          ) : (
            <Link to={`/profile/${user.id}`} className="flex-center gap-3">
              <img
                src={user.imageUrl || "/assets/icons/profile-placeholder.svg"}
                alt="profile"
                className="h-8 w-8 rounded-full"
              />
            </Link>
          )}
        </div>
      </div>
    </section>
  );
};

export default Topbar;
