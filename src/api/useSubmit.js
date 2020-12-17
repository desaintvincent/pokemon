import { useState } from 'react'
import { SNACK, useSnack } from '../providers/SnackProvider'
const useSubmit = (promise, params = {}) => {
  const {
    successMessage = 'app.success',
    failureMessage = 'app.error'
  } = params

  const [submitting, setSubmitting] = useState(false)
  const snack = useSnack()

  const submit = (data) => {
    setSubmitting(true)
    return promise(data)
      .then(result => {
        setSubmitting(false)
        if (successMessage) {
          snack(successMessage)
        }
        return { data: result, error: undefined }
      })
      .catch(error => {
        setSubmitting(false)
        if (failureMessage) {
          snack(failureMessage, SNACK.ERROR)
        }
        return { data: undefined, error: error }
      })
  }
  return {
    submitting,
    submit
  }
}

export default useSubmit
