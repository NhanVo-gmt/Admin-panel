"use client"

import React from "react";
import { useForm } from "react-hook-form";
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';

const FormYup = () => {

    const schema = yup
    .object()
    .shape({
      name: yup.string("Must be a string!!!").required().length(5),
      email: yup.string().required().email("Not an email"),
      phone: yup.number("Must be number ").required().max(15),
      password: yup.string().required().min(3).notOneOf(['111']),
    })
    .required();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({resolver: yupResolver(schema)});

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
          {...register('name')}
        />
        {errors.name && <span className='text-white bg-red-500 p-1'>{errors.name.message}</span>}

        <input
          type='text'
          placeholder='email'
          {...register('email')}
        />
        {errors.email && <span className='text-white bg-red-500 p-1'>{errors.email.message}</span>}

        <input
          type='text'
          placeholder='phone'
          {...register('phone')}
        />
        {errors.phone && <span className='text-white bg-red-500 p-1'>{errors.phone.message}</span>}

        <input
          type='text'
          placeholder='password'
          {...register('password')}
        />
        {errors.password && <span className='text-white bg-red-500 p-1'>{errors.password.message}</span>}

        <button type='submit' className='bg-green-700 text-white rounded-lg p-2 my-2'>
          Send To Backend
        </button>
      </form>
    </div>
  );
};

export default FormYup;
