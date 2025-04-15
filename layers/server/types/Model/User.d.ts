declare namespace Model {
   interface User {
      id: string
      name: string
      email: string
      role: Model.User.Role
      verified: boolean
      created_at: string
      updated_at: string
   }

   namespace User {
      type Role = 'admin' | 'superadmin' | 'user'
   }
}