import { useState } from 'react'

const useSubmit = () => {
  const [submitting, setSubmitting] = useState(false)
  const submit = (data) => {
    setSubmitting(true)
    console.log('submit', data)
    setTimeout(() => {
      setSubmitting(false)
    }, 500)
  }
  return {
    submitting,
    submit
  }
}

export default useSubmit
