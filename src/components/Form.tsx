
import { ChangeEvent, useState } from 'react'


type TValues = {
  FirstName: string;
  LastName: string;
  Emaill: string;
  Password: string;
}

type TErrors = {
  FirstName: boolean;
  LastName: boolean;
  Emaill: boolean;
  Password: boolean;
}

export default function Form({setIsSucces}:{setIsSucces:React.Dispatch<React.SetStateAction<boolean>>}) {
  const [values, setValues] = useState<TValues>({
    FirstName: "",
    LastName: "",
    Emaill: "",
    Password: ""
  });

  const [errors, setErrors] = useState<TErrors>({
    FirstName: true,
    LastName: true,
    Emaill: true,
    Password: true
  });

  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    setValues({
      ...values,
      [event.target.name]: event.target.value
    });
  }

  const handleSubmittion = (event: { preventDefault: () => void; }) => {
    event.preventDefault();
    setErrors({
      FirstName: !values.FirstName,
      LastName: !values.LastName,
      Emaill: !emailRegex.test(values.Emaill),
      Password: !values.Password,
    });
  
 if(!errors.FirstName && !errors.LastName &&!errors.Emaill &&!errors.Password ){
    setIsSucces(true)
 }
}

  return (
    <div className="dark:bg-gray-900 dark:text-white min-h-screen flex items-center justify-center">
      <form onSubmit={handleSubmittion} className="bg-white dark:bg-gray-800 p-6 rounded shadow-md w-full max-w-md">
        <div className="mb-4">
          <label htmlFor="FirstName" className="block text-sm font-medium mb-1">First Name:</label>
          <input type="text" name="FirstName" id="FirstName" value={values.FirstName}
            onChange={(event) => handleChange(event)}
            className="w-full p-2 border rounded dark:bg-gray-700 dark:border-gray-600 dark:text-white" />
          {errors.FirstName && <p className="text-red-500 text-sm mt-1">First Name cannot be empty</p>}
        </div>
        <div className="mb-4">
          <label htmlFor="LastName" className="block text-sm font-medium mb-1">Last Name:</label>
          <input type="text" name="LastName" id="LastName" value={values.LastName}
            onChange={(event) => handleChange(event)}
            className="w-full p-2 border rounded dark:bg-gray-700 dark:border-gray-600 dark:text-white" />
          {errors.LastName && <p className="text-red-500 text-sm mt-1">Last Name cannot be empty</p>}
        </div>
        <div className="mb-4">
          <label htmlFor="Emaill" className="block text-sm font-medium mb-1">Email Address:</label>
          <input type="text" name="Emaill" id="Emaill" value={values.Emaill}
            onChange={(event) => handleChange(event)}
            className="w-full p-2 border rounded dark:bg-gray-700 dark:border-gray-600 dark:text-white" />
          {errors.Emaill && <p className="text-red-500 text-sm mt-1">Looks like it is not a valid email</p>}
        </div>
        <div className="mb-4">
          <label htmlFor="Password" className="block text-sm font-medium mb-1">Password:</label>
          <input type="password" name="Password" id="Password" value={values.Password}
            onChange={(event) => handleChange(event)}
            className="w-full p-2 border rounded dark:bg-gray-700 dark:border-gray-600 dark:text-white" />
          {errors.Password && <p className="text-red-500 text-sm mt-1">Password cannot be empty</p>}
        </div>
        <button type='submit' className="w-full p-2 bg-blue-500 text-white rounded dark:bg-blue-700">Submit</button>
      </form>
    </div>
  )
}
