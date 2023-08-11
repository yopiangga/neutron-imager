import "./App.css";
import app from "./config/Firebase";
import { AppContextProvider } from "./context/AppContextProvider";
import { UserContext } from "./context/UserContext";
import { QueryClient, QueryClientProvider, useQuery } from "react-query";
import { useContext, useEffect, useState } from "react";
import { UserServices } from "./services/UserServices";
import { onAuthStateChanged, getAuth } from "firebase/auth";
import AuthRouterPage from "./router/AuthRouterPage";
import UserRouterPage from "./router/UserRouterPage";
import { Loader } from "./components/loader";
const auth = getAuth(app);

const queryClient = new QueryClient();
const userServices = new UserServices();

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <AppContextProvider>
        <UserManager />
      </AppContextProvider>
    </QueryClientProvider>
  );
}

export default App;

function UserManager() {
  const { user, setUser } = useContext(UserContext);
  const [load, setLoad] = useState(true);

  useEffect(() => {
    // Fetch for get data user from firebase & db
    // fetch();
  }, []);

  async function fetch() {
    onAuthStateChanged(auth, async function (users) {
      if (users) {
        const resUser = await userServices.getUser(users.email);
        setUser(resUser);
        setLoad(false);
      } else {
        setUser(null);
        setLoad(false);
      }
    });
  }

  if (load) {
    return (
      <div className="w-full h-screen flex justify-center items-center bg-white">
        <Loader />
      </div>
    );
  } else if (user == null && load == false) {
    return <AuthRouterPage />;
  } else if (user.role === "operator") {
    return <UserRouterPage />;
  } else {
    return <h1>404 Page</h1>;
  }
}
