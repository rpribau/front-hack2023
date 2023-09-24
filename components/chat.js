import React from 'react';

const Chatbot = () => {
    
<script src="script.js"></script>
  return (
    <div className="chatbot-container">
        <div className="chat chat-start">
            <div className="chat-image avatar">
            <div className="w-10 rounded-full">
            <div className="empty-circle"></div>
            </div>
            </div>
            <div className="chat-header">
            FAMAI
        </div>
            <div className="chat-bubble">¡Hola! ¿Cómo puedo ayudarte hoy?</div>
        </div>

        <div className="chat chat-end">
            <div className="chat-image avatar">
                <div className="w-10 rounded-full">
                <div className="empty-circle"></div>
                </div>
            </div>
            <div className="chat-header">
                Sandra
            </div>
            <div className="chat-bubble">Me puedes dar el KPI de calidad en Marzo 2023</div>
        </div>

        
        <div class="flex">
            <div class="grow h-1">
                <input name="prompt" type="text" placeholder="Type here" className="input input-bordered input-primary w-full max-w" />
                
            </div>

            
            <div class="flex-none w-20%">
                <button className="btn margin-auto w-10% h-10%">Send</button>
            </div>
        </div>

    </div>
  );
};

export default Chatbot;
