export class User {
   constructor(payload) {
      Object.assign(this, payload)
   }

   hasRole(role) {
      return this.roles.some(item => item.roleId == role.ID)
   }

   hasAnyRole(roles) {
      return roles.some(r => this.hasRole(r))
   }
}