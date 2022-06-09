import React from "react";

const UnreadMessages = props => {
    const unreadMessages = props.unreadMessages;  // Con el array que recibimos hacemos una condicional.

    return (
        <div>
            <h1>Hola</h1>
            {unreadMessages.length > 0 && (
                <h2>Tienes {unreadMessages.length} mensajes sin leer.</h2>
            )}
        </div>
    )
}

export default UnreadMessages;