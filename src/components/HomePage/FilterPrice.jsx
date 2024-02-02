import { useForm } from "react-hook-form"


const FilterPrice = ({setFromTo}) => {

 const {handleSubmit, register, reset} = useForm()

 const submit = data => {
  console.log(data)
  const obj = {
    from: +data.from,
    to: +data.to === 0 ? Infinity : +data.to
  }
  setFromTo(obj)
  reset({
    from: '',
    to: ''
  })
 }

  return (
    <div>
      <form onSubmit={handleSubmit(submit)}>
        <label>
          <span>From</span>
          <input {...register('from')} type="Number" />
        </label>
        <label>
          <span>To</span>
          <input {...register('to')}type="Number" />
        </label>
        <button>Apply</button>
      </form>
    </div>
  )
}

export default FilterPrice