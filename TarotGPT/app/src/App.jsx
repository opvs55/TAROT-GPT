import { useState } from 'react'
import './App.css'
import { HomePage } from './Containers/HomePage/Homepage'
import { LecturePage } from './Containers/LecturePage/LecturePage'


const API_KEY = "coloque sua chave para api do open ai aqui";

const systemMessage = {
  role: "system",
  content: "aja como uma cartomante, faça uma leitura de tarot cigano, não comente nada sobre ser um chat, converse como uma cigana"
}



function App() {

  //navegação pelos containers
  const [homepage, setHomepage] = useState(true)
  const [lecture, setLecture] = useState(false)


  //texto
  const [previsao, setPrevisao] = useState("")
  const [messages, setMessages] = useState([
    {
      message: "Olá, eu sou uma cigana",
      sender: "chatGPT"
    }
  ])


  //função para requisição da resposta
  const handleSend = async (message) => {
    const newMessage = {
      message: message,
      direction: "outgoing",
      sender: "user"
    };

    const newMessages = [...messages, newMessage];

    setMessages(newMessages);
    setLecture(true)
    await processMessageToChatGPT(newMessages);

  };
  async function processMessageToChatGPT(chatMessages) {

    let apiMessages = chatMessages.map((messageObject) => {
      let role = ""
      if (messageObject.sender === "chatGPT") {
        role = "assistant"
      } else {
        role = "user"
      }
      return { role: role, content: messageObject.message }
    })

    const apiRequestBody = {
      "model": "gpt-3.5-turbo",
      "messages": [
        systemMessage,
        ...apiMessages
      ]
    }


    await fetch("https://api.openai.com/v1/chat/completions",
      {
        method: "POST",
        headers: {
          "Authorization": "Bearer " + API_KEY,
          "Content-Type": "application/json"
        },
        body: JSON.stringify(apiRequestBody)
      }).then((data) => {
        return data.json();
      }).then((data) => {
        console.log(data);
        console.log(data.choices[0].message.content);
        setPrevisao(data.choices[0].message.content);
        setMessages([
          {
            message: "Olá, eu sou uma cigana",
            sender: "chatGPT"
          }
        ])
      })
  }



  return (
    <>
      {homepage ?
        <HomePage
          setHomepage={setHomepage} /> :
        <LecturePage
          setHomepage={setHomepage}
          homepage={homepage}
          previsao={previsao}
          handleSend={handleSend}
          lecture={lecture}
          setLecture={setLecture}
          setPrevisao={setPrevisao}
        />
      }
    </>
  )
}

export default App
