import { useState } from 'react'

export const useHandleInputChange = (initialState) => {
  const [fields, setFields] = useState(initialState)

  return [
    fields,
    (evt) => {
      setFields({
        ...fields,
        [evt.target.name]: evt.target.value
      })
    }
  ]
}