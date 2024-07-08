import AdminLayout from '@/app/components/adminPage-components/AdminLayout'
import AdminRegistrationPage from '@/app/components/adminPage-components/AdminRegistrationPage'
import React from 'react'

const page = () => {
  return (
    <div> 
      <AdminLayout>
         <AdminRegistrationPage />
     </AdminLayout>
    </div>
  )
}

export default page