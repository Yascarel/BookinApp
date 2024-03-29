import { useForm } from "react-hook-form"
import useAuth from "../hooks/useAuth";

const RegisterPage = () => {

  const { handleSubmit, reset, register } = useForm();

  const { createNewUser } = useAuth()

  const submit = data => {
    createNewUser(data)
    reset ({
      firstName:'',
      lastName: '',
      email: '',
      password: '',
      Gender: 'ohter'
    })
  }

  return (
    <div>
      <h2>Register</h2>
      <form onSubmit={handleSubmit(submit)}>
        <label>
          <span>First Name</span>
          <input {...register ('firstName')} type="text" />
        </label>
        <label>
          <span>Last Name</span>
          <input {...register ('lastName')} type="text" />
        </label>
        <label>
          <span>Email</span>
          <input {...register ('email')} type="email" />
        </label>
        <label>
          <span>Password</span>
          <input {...register ('password')} type="password" />
        </label>
        <label>
        <span>Gender</span>
          <select {...register ('gender')}>
    <option value="male">male</option>
    <option value="female">female</option>
    <option value="other">prefer not say</option>
          </select>
        </label>
        <button>Submit</button>
      </form>
    </div>
  )
}

export default RegisterPage