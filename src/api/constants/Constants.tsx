//Message
var errorMessage = {
  cancel: "CANCEL",
  ok: "OK",
  thanks: "Thanks!!",
  logout_Title: "Logout",
  logout_message: "Are you sure you want to logout?",
  aLERT_Title: "Message",
  aPI_FAILED: "Server not responding, please try after some time.",
  internet_ErrorTitle: "No Internet",
  fAILED_INTERNET: "No internet connection available."
};  

//Colors
var colors = {
  appColor: "#F5951D",
  black: "#000000",
  white: "#ffffff",
  Saving: "#E6A620",
  Secure: "#30A2F3",
  placeholder: "#5F5F5F"
};  

//Rest Full Api
const domain = "https://stmichaelschool.herokuapp.com/";
var apiary = {
    getUserTypes: domain + "api/getUserTypes"
};
    
export { errorMessage, apiary, colors };
