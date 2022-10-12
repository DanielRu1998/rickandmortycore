import Section from "./components/Section";

// REDUX
import { Provider } from "react-redux";
import store from './store';

const App = () => {
  return (
    <Provider store={store}>
      <Section />
    </Provider>
  );
}

export default App;
