import React, { useEffect, useState } from "react";
import ManagerConsole from "../ManagerConsole";
import Banner from "../../shared/Banner";
import BookTicketsNavbar from "./BookTicketsNavbar";
import TicketBookingPopup from "./TicketBookingPopup";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { ticketData } from "@/components/shared/data/dummy";


// this is the main page for ticket booking
const BookTickets = () => {
  const [cartData, setCartData] = useState([]);
  const [booking, setBooking] = useState([]);
  const [finalStats, setFinalStats] = useState({
    totalTicketPrice: 0,
    totalDiscount: 0,
  });
  const [customerData, setCustomerData] = useState([
    {
      name: "",
      email: "",
      mobile: "",
    },
  ]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setCustomerData({
      ...customerData,
      [name]: value,
    });
  };

  useEffect(() => {
    let totalTicketPrice = 0;
    let totalDiscount = 0;
    cartData.forEach((item) => {
      totalTicketPrice += item.totalPrice;
      totalDiscount += (item.price.price * item.discount.value) / 100;
    });
    setFinalStats({
      totalTicketPrice: totalTicketPrice,
      totalDiscount: totalDiscount,
    });
  }, [cartData]);

  const handleAddToCart = (ticket, count, selectedDiscount, selectedFee) => {
    console.log("adding to the cart finally");
    console.log(ticket, count, selectedDiscount, selectedFee);
    const totalPrice =
      selectedFee.price * count -
      (selectedFee.price * count * selectedDiscount.value) / 100;
    // Add to cart
    setCartData([
      ...cartData,
      {
        name: ticket.name,
        price: selectedFee,
        totalPrice: totalPrice,
        discount: selectedDiscount,
        count: count,
      },
    ]);

    console.log("card data", cartData);
  };

  const handleBookTickets = () => {
    // combine the cart data and customer data and merge them to booking data 
    const bookingData = {
      ticketData: cartData,
      customerData: customerData,
    };
    setBooking(bookingData);
    console.log("booking data", bookingData);
    setCartData([]);
  }
    

  return (
    <div>
      <ManagerConsole>
        <Banner name="Book Tickets" />
        <BookTicketsNavbar handleBookTickets={handleBookTickets} />
        <div className="mt-4">
          <p className="div-head-blue">All Events</p>
          <div className="flex flex-wrap gap-4 mt-4 w-full">
            {ticketData.map((ticket, index) => (
              <TicketBookingPopup
                ticket={ticket}
                key={index}
                handleAddToCart={handleAddToCart}
              />
            ))}
          </div>
        </div>
        <div className="flex gap-4 mt-8 justify-between">
          <div className="gap-4 flex flex-col mt-2 w-[40%] ">
            <p className="div-head-blue ">Customer Details</p>
            <div className="flex flex-col gap-1">
              <Label className=" ">Name</Label>
              <Input
                type="text"
                className="input"
                placeholder="Enter Name"
                value={customerData.name}
                onChange={handleChange}
                name={"name"}
              />
            </div>
            <div className="flex flex-col gap-1">
              <Label className=" ">Email</Label>
              <Input
                type="text"
                className="input"
                placeholder="Enter Email"
                value={customerData.email}
                onChange={handleChange}
                name="email"
              />
            </div>
            <div className="flex flex-col gap-1">
              <Label className=" ">Mobile number</Label>
              <Input
                type="text"
                className="input"
                placeholder="Enter Mobile Number"
                value={customerData.mobile}
                onChange={handleChange}
                name="mobile"
              />
            </div>
          </div>
          <div className="gap-4 flex flex-col mt-2 w-[50%] p-4 bg-slate-100 dark:bg-slate-900 rounded-md">
            <p className="div-head-blue ">Cart</p>
            <div className="flex flex-col gap-2">
              <div className="flex justify-between items-center font-bold border-b  pb-2">
                <p>Ticket</p>
                <div className="flex gap-6">
                  <p>Discount%</p>
                  <p>Count</p>
                  <p className="">Price₹</p>
                </div>
              </div>
              {cartData.map((item, index) => (
                <div key={index} className="flex flex-col justify-between">
                  <p className="text-lg font-semibold ">{item.name}</p>
                  <div className="flex justify-between items-center  border-b  pb-2 ">
                    <p className="text-sm dark:text-gray-400">
                      {item.price.name}, {item.price.price}₹
                    </p>
                    <div className="flex gap-6 items-center justify-between w-[45%] dark:text-gray-400 ">
                      <p>{item.discount.value}</p>
                      <p>{item.count}</p>
                      <p>{item.totalPrice}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
            <div className="flex flex-col gap-2">
              <div className="flex justify-between dark:text-gray-400 border-b pb-1">
                <p className=" ">Total Discount</p>
                <p className=" ">{finalStats.totalDiscount}</p>
              </div>
              <div className="flex justify-between ">
                <p className="text-xl font-bold">Total Price</p>
                <p className="text-xl font-bold">
                  {finalStats.totalTicketPrice}
                </p>
              </div>
            </div>
          </div>
        </div>
      </ManagerConsole>
    </div>
  );
};

export default BookTickets;
