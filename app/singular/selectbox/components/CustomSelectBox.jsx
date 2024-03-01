"use client"
import React, { useState } from 'react'

const cities = ["Tehran", "Shiraz", "Yazd", "Mashad", "Esfashan"]

const CustomSelectBox = () => {
    const [selectedCity, setSelectedCity] = useState("Tehran")
    const [open, setOpen] = useState(false);

  return (
    <div>
        <div>Top</div>
        <div>Bottom</div>
    </div>
  )
}

export default CustomSelectBox