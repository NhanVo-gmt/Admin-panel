"use client"

import React from "react";
import { useForm } from "react-hook-form";

const Form = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    console.log(data);
  }

  return (
    <div className='bg-white rounded-lg mx-4 p-4'>
      <h1>This is RHForm page</h1>
      <form onSubmit={handleSubmit(onSubmit)} className='flex flex-col max-w-[500px]'>
        <input
          type='text'
          placeholder='name'
          {...register('name', {
            required: 'The name is required',
            minLength: {
              value: 5,
              message: 'Min Length is 5 for the name',
            },
          })}
        />
        {errors.name && <span className='text-white bg-red-500 p-1'>{errors.name.message}</span>}

        <input
          type='text'
          placeholder='email'
          {...register('email', {
            required: 'The email is required',
          })}
        />
        {errors.email && <span className='text-white bg-red-500 p-1'>{errors.email.message}</span>}

        <input
          type='text'
          placeholder='phone'
          {...register('phone', {
            required: 'The phone is required',
          })}
        />
        {errors.phone && <span className='text-white bg-red-500 p-1'>{errors.phone.message}</span>}

        <input
          type='text'
          placeholder='password'
          {...register('password', {
            required: 'The password is required',
            minLength: {
              value: 12,
              message: 'Min Length is 12 for the name',
            },
          })}
        />
        {errors.password && <span className='text-white bg-red-500 p-1'>{errors.password.message}</span>}

        <button type='submit' className='bg-green-700 text-white rounded-lg p-2 my-2'>
          Send To Backend
        </button>
      </form>
    </div>
  );
};

export default Form;
