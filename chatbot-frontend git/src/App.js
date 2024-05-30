import React, { useState } from "react";
import "./App.css";

function App() {
  const [issue, setIssue] = useState("");
  const [messages, setMessages] = useState([]);

  const sendMessage = () => {
    if (issue.trim() !== "") {
      setMessages([
        ...messages,
        { text: issue, type: "patient" }, // Add patient's message
        { text: "", type: "admin" }, // Add empty message placeholder for admin's response
      ]);
      fetchRemedy(issue);
      setIssue("");
    }
  };

  const fetchRemedy = (issue) => {
    fetch("http://localhost:3000/message", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ message: issue }),
    })
      .then((response) => response.json())
      .then((data) => {
        // Update the last message (empty placeholder) with admin's response
        setMessages((prevMessages) => {
          const updatedMessages = [...prevMessages];
          updatedMessages[prevMessages.length - 1].text = data.response;
          return updatedMessages;
        });
      })
      .catch((error) => {
        console.error("Error:", error);
      });
  };

  return (
    <div className="App">
      <div className="chat-container">
        <div className="chat-box">
          {/* Render messages */}
          {messages.map((msg, index) => (
            <div
              key={index}
              className={`message ${msg.type === "patient" ? "left" : "right"}`}
            >
              {msg.text}
            </div>
          ))}
        </div>
        <div className="input-container">
          <input
            type="text"
            placeholder="Type your health issue..."
            value={issue}
            onChange={(e) => setIssue(e.target.value)}
          />
          <button onClick={sendMessage}>Send</button>
        </div>
      </div>
    </div>
  );
}

export default App;
