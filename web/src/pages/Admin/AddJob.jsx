import { useForm, Controller } from "react-hook-form"
import { Outlet } from "react-router"
import Select from 'react-select'
import '../../styles/AddJob.css'
import {addNewJob} from '../../api/api.js'

const AddJob = () => {
  const options = [
    { value: "Full-time", label: "Full-Time" },
    { value: "Part-time", label: "Part-Time" },
   { value: "Contract", label: "Contract" },
   { value: "Remote", label: "Remote" },
  ]

  const { register, handleSubmit, control, formState: { errors, isSubmitting } } = useForm()

  const onSubmit = async (data) => {
    
    await addNewJob(data)
   
  }

  return (
    <div className="add-job">
      <h2>Add a New Job</h2>
      <div className="job-form">
        <form onSubmit={handleSubmit(onSubmit)}>
          <label>Title</label>
          <input {...register('title', { required: "Title is required!" })} />
          {errors.title && <span className="error">{errors.title.message}</span>}

          <label>Salary</label>
          <input {...register('salary', { required: "Salary is required" })} />
          {errors.salary && <span className="error">{errors.salary.message}</span>}

          <label>Location</label>
          <input {...register('location', { required: 'Job location is required' })} />
          {errors.location && <span className="error">{errors.location.message}</span>}

          <label>Type</label>
          <Controller
            name="type"
            control={control}
            rules={{ required: 'Job type required!' }}
            render={({ field }) => (
              <Select
                {...field}
                options={options}
                placeholder="Choose Type..."
                isClearable
                classNamePrefix="job-select"
                onChange={(selected) => field.onChange(selected ? selected.value : null)}
                value={options.find(opt => opt.value === field.value) || null}
              />
            )}
          />
          {errors.type && <span className="error">{errors.type.message}</span>}

          <label>Job Summary</label>
          <textarea {...register('summary')}></textarea>
          {errors.summary && <span className="error">{errors.summary.message}</span>}

          <button disabled={isSubmitting}>Add Job</button>
        </form>
      </div>
      <Outlet />
    </div>
  )
}

export default AddJob