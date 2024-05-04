import React, { useState } from "react";
import Banner from "../../shared/Banner";
import ManagerConsole from "../ManagerConsole";
import { Input } from "../../ui/input";
import { Label } from "../../ui/label";
import { Button } from "../../ui/button";
import { SidebarCloseIcon } from "lucide-react";
import { IoCloseCircle } from "react-icons/io5";

// This is the main page for creating a new event

const CreateNewEvent = () => {
  const [formData, setFormData] = useState({
    name: "",
    description: "",
    date: "",
    time: "",
    location: "",
    feeStructure: [],
    capacity: "",
    keywords: "",
    images: [],
    fixedCost:"",
    discounts: [], // Updated to store discounts as an array of objects
  });
  const handleItemChange = (e, index, type) => {
    const { name, value } = e.target;
    const items = [...formData[type]];
    items[index][name] = value;
    setFormData({
      ...formData,
      [type]: items,
    });
  };

  const addItem = (type) => {
    setFormData({
      ...formData,
      [type]: [...formData[type], { name: "", value: "" }],
    });
  };

  const removeItem = (index, type) => {
    const items = [...formData[type]];
    items.splice(index, 1);
    setFormData({
      ...formData,
      [type]: items,
    });
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevFormData) => ({
      ...prevFormData,
      [name]: value,
    }));
  };
  const handleImageChange = (e) => {
    const files = e.target.files;
    setFormData((prevFormData) => ({
      ...prevFormData,
      images: [...prevFormData.images, ...files], // Append new files to existing files
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formData);
  };
  return (
    <div>
      <ManagerConsole>
        <Banner name="Create new event" />
        <div className="w-full flex  gap-3 flex-wrap dark:bg-gray-900 p-4">
          <div className="w-1/3">
            <Label>Name</Label>
            <Input
              type="string"
              name="name"
              value={formData.name}
              onChange={handleChange}
              className="w-full"
              placeholder="Event Name"
            />
          </div>
          <div className="w-1/3">
            <Label>Description</Label>
            <Input
              type="string"
              name="description"
              value={formData.description}
              onChange={handleChange}
              className="w-full"
              placeholder="Event Description"
            />
          </div>
          <div className="w-1/3">
            <Label>Location</Label>
            <Input
              type="string"
              name="location"
              value={formData.location}
              onChange={handleChange}
              className="w-full"
              placeholder="Event Location"
            />
          </div>
          <div className="w-1/3">
            <Label>Date</Label>
            <Input
              type="date"
              name="date"
              value={formData.date}
              onChange={handleChange}
              className="w-full"

            />
          </div>
          <div className="w-1/3">
            <Label>Time</Label>
            <Input
              type="time"
              name="time"
              value={formData.time}
              onChange={handleChange}
              className="w-full"

            />
          </div>
          <div className="w-1/3">
            <Label>Keywords</Label>
            <Input
              type="string"
              name="keywords"
              value={formData.keywords}
              onChange={handleChange}
              className="w-full"
              placeholder="Keywords"
            />
          </div>
          <div className="w-1/3">
            <Label>Fixed Cost</Label>
            <Input
              type="string"
              name="fixedCost"
              value={formData.fixedCost}
              onChange={handleChange}
              className="w-full"
              placeholder="Fixed Cost"
            />
          </div>
          <div className="flex items-end gap-4 flex-wrap w-full ">
            {formData.feeStructure.map((fee, index) => (
              <div key={index} className="w-">
                <Label>{`Price Structure ${index + 1}`}</Label>
                <div className="flex gap-2">
                  <Input
                    type="text"
                    name="name"
                    value={fee.name}
                    onChange={(e) => handleItemChange(e, index, "feeStructure")}
                    placeholder="Name"
                    className="w-full"
                  />
                  <Input
                    type="text"
                    name="value"
                    value={fee.value}
                    onChange={(e) => handleItemChange(e, index, "feeStructure")}
                    placeholder="Value"
                    className="w-full"
                  />
                  <Input
                    type="text"
                    name="capacity"
                    value={fee.capacity}
                    onChange={(e) => handleItemChange(e, index, "feeStructure")}
                    placeholder="Capacity"
                    className="w-full"
                  />
                  <Input
                    type="text"
                    name="description"
                    value={fee.description}
                    onChange={(e) => handleItemChange(e, index, "feeStructure")}
                    placeholder="Description"
                    className="w-full"
                  />
                  <Button onClick={() => removeItem(index, "feeStructure")}>
                    Remove
                  </Button>
                </div>
              </div>
            ))}
            <div className="w-1/3">
              <Button onClick={() => addItem("feeStructure")}>
                Add Price{" "}
              </Button>
            </div>
          </div>
          <div className="flex items-end gap-4 flex-wrap w-full ">
            {formData.discounts.map((discount, index) => (
              <div key={index} className="">
                <Label>{`Discount ${index + 1}`}</Label>
                <div className="flex gap-2">
                  <Input
                    type="text"
                    name="name"
                    value={discount.name}
                    onChange={(e) => handleItemChange(e, index, "discounts")}
                    placeholder="Name"
                    className="w-full"
                  />
                  <Input
                    type="text"
                    name="value"
                    value={discount.value}
                    onChange={(e) => handleItemChange(e, index, "discounts")}
                    placeholder="Discount %"
                    className="w-full"
                  />
                  <Input
                    type="text"
                    name="count"
                    value={discount.count}
                    onChange={(e) => handleItemChange(e, index, "discounts")}
                    placeholder="No of Coupons"
                    className="w-full"
                  />
                  <Input
                    type="text"
                    name="desription"
                    value={discount.description}
                    onChange={(e) => handleItemChange(e, index, "discounts")}
                    placeholder="Description"
                    className="w-full"
                  />
                  <Button onClick={() => removeItem(index, "discounts")}>
                    Remove
                  </Button>
                </div>
              </div>
            ))}
            <div className="w-1/3">
              <Button onClick={() => addItem("discounts")}>
                Add Discounts
              </Button>
            </div>
          </div>
          <div className="w-1/3">
            <Label>Images</Label>
            <Input
              type="file"
              name="images"
              multiple
              onChange={handleImageChange}
              className="w-full"
            />
          </div>
          {/* Display selected images */}
          {formData.images.length > 0 && (
            <div className="w-full flex flex-wrap gap-4 ">
              {formData.images.map((image, index) => (
                <div key={index} className="relative">
                  <img
                    src={URL.createObjectURL(image)}
                    alt={`Image ${index + 1}`}
                    className="w-[120px] h-[120px]"
                  />
                    <IoCloseCircle onClick={() => removeItem(index, 'images')} className="top-0 right-0 absolute text-2xl cursor-pointer text-red-500"/>
                </div>
              ))}
            </div>
          )}
        </div>
        <Button onClick={handleSubmit} className="mt-4">
          Submit
        </Button>
      </ManagerConsole>
    </div>
  );
};

export default CreateNewEvent;
