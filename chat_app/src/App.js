import { ChatEngine } from "react-chat-engine";
import ChatFeed from "./components/ChatFeed";
import "./App.css";

function App() {
  return (
    <div className="App">
      <ChatEngine
        height="100vh"
        projectID={process.env.REACT_APP_PROJECTID}
        userName={process.env.REACT_APP_USERNAME}
        userSecret={process.env.REACT_APP_PASSWORD}
        renderChatFeed={(chatAppProps) => <ChatFeed {...chatAppProps} />}
        onNewMessage={() =>
          new Audio(
            "https://chat-engine-assets.s3.amazonaws.com/click.mp3"
          ).play()
        }
      ></ChatEngine>
    </div>
  );
}

export default App;
