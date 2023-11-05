import { AppMain } from "./router/AppMain";
import { store } from "./redux/store/store";
import { ContextProvider } from "./context/context";
import { Provider } from "react-redux";
import "./assets/css/index.css";

function App() {
  return (
    <Provider store={store}>
      <ContextProvider>
        <div className="flex justify-center w-full h-full min-h-screen bg-black text-white">
          <div style={{ minWidth: "1024px" }}>
            <AppMain />
          </div>
        </div>
      </ContextProvider>
    </Provider>
  );
}

export default App;
