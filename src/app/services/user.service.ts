/**
 * Created by Ali on 4/26/2017.
 */


export class UserService
{
  user;
  constructor()
  {
    this.user=localStorage.getItem("currentUser")
  }

  getUser()
  {
    return this.user;
  }
}
