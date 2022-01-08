const https = require("https");

let getUser = () => {
    /**
     * coding
     * 
     * 
     */
  };


  let excute = async () => {
    try {
      let users = await getUser()
      /**
       * coding
       * 
       * 
       * 
       */
      console.log("Data Response: ", users);
    } catch (err) {
      console.log("Error Message: ", err);
    }
  };
  
  excute();