import {AccessToken} from "./access.token";
/**
 * Created by Ali on 4/26/2017.
 */
export class User {
  userId:String
  loginName:String
  email:String
  defaultLanguage:String
  accessToken?: AccessToken
  createTime: String
  updateTime: String
}
