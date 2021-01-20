import { useState } from 'react'
import { SNACK, useSnack } from '../providers/SnackProvider'
import { useAuth } from '../providers/AuthProvider'
import { useIntl } from '../providers/IntlProvider'
const useSubmit = (promise, params = {}) => {
  const {
    successMessage = 'app.success',
    failureMessage = 'app.error'
  } = params

  const [submitting, setSubmitting] = useState(false)
  const { accessToken } = useAuth()
  const snack = useSnack()
  const { formatMessage } = useIntl()

  const submit = (data) => {
    setSubmitting(true)

    return promise(data, accessToken)
      .then(result => {
        setSubmitting(false)
        if (successMessage) {
          snack(formatMessage({ id: successMessage }))
        }
        return { data: result, error: undefined }
      })
      .catch(error => {
        setSubmitting(false)
        if (failureMessage) {
          snack(formatMessage({ id: failureMessage }), SNACK.ERROR)
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
