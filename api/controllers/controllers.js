import path from 'path'

export default class Controller {
  static getHomePage(req, res) {
    res.sendFile(path.resolve() + "/public/homePage.html")
  }
  static getSignUpPage(req,res) {
    res.sendFile(path.resolve() + "/public/signUpPage.html")
  }
  static getLoginPage(req,res) {
    res.sendFile(path.resolve() + "/public/LoginPage.html")
  }
  
}