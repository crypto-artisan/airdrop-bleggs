import { useState, useEffect } from "react";
import Header from "./component/Header";
import Home from "./page/Home";
import Ranking from "./page/Ranking";
import Task from "./page/Task";
import Loading from "./component/Loading";
import TabBar from "./component/TabBar";

import { Provider as ReduxProvider } from "react-redux";
import { store } from "./store";
import "./App.css";

function App() {
  const [tab, setTab] = useState<string>('Home');
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
    }, 5000);
  }, []);

  return (
    loading ? (
      <Loading />
    ) : (
      <div className="h-full max-h-screen overflow-hidden md:px-[30%] py-2 px-4">
        <Header />
        <div className="h-screen overflow-hidden pb-[150px] px-4 dM-Sans">
          <ReduxProvider store={store}>
            {
              tab == 'Home' && <Home />
            }
            {
              tab == 'Ranking' && <Ranking />
            }
            {
              tab == 'Task' && <Task />
            }
          </ReduxProvider>
        </div>
        <TabBar tab={tab} setTab={setTab} />
      </div>
    )
  );
}

export default App;
