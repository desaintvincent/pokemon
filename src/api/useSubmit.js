import { useState } from 'react'
import { SNACK, useSnack } from '../providers/SnackProvider'
const useSubmit = (promise, params = {}) => {
  const {
    successMessage = 'success',
    failureMessage = 'error'
  } = params

  const [submitting, setSubmitting] = useState(false)
  const snack = useSnack()

  const submit = (data) => {
    setSubmitting(true)
    return promise(data)
      .then(result => {
        console.log('result', result)
        setSubmitting(false)
        snack(successMessage)
      })
      .catch(error => {
        console.log('error', error)
        setSubmitting(false)
        snack(failureMessage, SNACK.ERROR)
      })
  }
  return {
    submitting,
    submit
  }
}

export default useSubmit
