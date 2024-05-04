import React from "react";
import QRCode from "react-qr-code";

const TicketQRCode = ({ selectedTickets }) => {
  const ticketsData = selectedTickets.map((ticket) => ({
    name: ticket.name,
    price: ticket.price,
    description: ticket.description,
    entryCount: ticket.entryCount,
  }));

  const ticketsDetails = JSON.stringify(ticketsData);

  return (
    <div>
      <p>Selected Ticket Details:</p>
      {selectedTickets.map((ticket, index) => (
        <div key={index}>
          <p>Ticket {index + 1}:</p>
          <p>Name: {ticket.name}</p>
          <p>Price: {ticket.price}</p>
          <p>Description: {ticket.description}</p>
          <p>Entry Count: {ticket.entryCount}</p>
        </div>
      ))}

      <div style={{ height: "auto", margin: "0 auto", maxWidth: 256, width: "100%" }}>
        <QRCode
          size={256}
          style={{ height: "auto", maxWidth: "100%", width: "100%" }}
          value={ticketsDetails}
          bgColor="#FFFFFF" 
          fgColor="#000000" 
        />
      </div>
    </div>
  );
};

export default TicketQRCode;
