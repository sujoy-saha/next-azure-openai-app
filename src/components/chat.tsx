'use client'

import { useChat } from 'ai/react'

export default function Chat() {
    const { messages, input, handleInputChange, handleSubmit } =  useChat({
        api: './api/chat'
      })

  return (
    <div className="flex flex-col w-full max-w-md py-24 mx-auto stretch">
        <ul>
            {messages.length > 0
                ? messages.map((m, index) => (
                    <li key={index}>
                        <div key={m.id} className="whitespace-pre-wrap">
                            {m.role === 'user' ? 'User: ' : 'Chatbot: '}
                            {m.content}
                        </div>
                    </li>
                ))
            : null}
        </ul>

      <form onSubmit={handleSubmit}>
        <input
          className="fixed bottom-0 w-full max-w-md p-2 mb-8 border border-gray-300 rounded shadow-xl"
          value={input}
          placeholder="Say something..."
          onChange={handleInputChange}
        />
      </form>
    </div>
  )
}
