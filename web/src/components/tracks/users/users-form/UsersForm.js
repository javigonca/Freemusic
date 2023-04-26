import React from 'react'
import { useForm } from "react-hook-form";

function UsersForm() {
  const { register, handleSubmit, formState: { errors }} = useForm;
  return (
    <div>UsersForm</div>
  )
}

export default UsersForm