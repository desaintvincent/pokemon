import { useState } from 'react'

const useSubmit = () => {
  const [loading, setLoading] = useState(false)
  const onSubmit = () => {}
  return {
    loading,
    onSubmit
  }
}

export default useSubmit
