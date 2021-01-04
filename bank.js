class Bank {
    static getData = () => {
        var account = {
            userone: { acno: 1234, balance: 10000, username: "userone", password: "usee" },
            usertwo: { acno: 3456, balance: 20230, username: "usertwo", password: "use" }
        }
        return account;
    }
    static authenticateUser=(user,pwd)=>{
        let dataset = Bank.getData()
        if (user in dataset) {
            if (dataset[user].password == pwd) {
                
               return 1;//valid user password
            }
            else {
               return 0;//invalid password
            }
        }
        else {
            return -1;//no user exist
        }
        
    }
    static login = () => {
        let user = document.querySelector("#user").value
        let pwd = document.querySelector("#pass").value
        let us=Bank.authenticateUser(user,pwd)
        if(us==1){
            alert("login successful");
           window.location.href="userhome.html"
        }
        else if(us==0){
            alert("incorrect password");
        }
        else if(us==-1){
            alert("No user exist");
        }
        // let dataset = Bank.getData()
        // if (user in dataset) {
        //     if (dataset[user].password == pwd) {
        //         alert("login successful");
        //         window.location.href="userhome.html"
        //     }
        //     else {
        //         alert("incorrect password");
        //     }
        // }
        // else {
        //     alert("No user exist");
        // }
    }
    static deposit=()=>
{
    let user = document.querySelector("#user").value
    let pwd = document.querySelector("#pass").value
    let amot=Number( document.querySelector("#amt").value)
    let us=Bank.authenticateUser(user,pwd)
    let dataset = Bank.getData()
    if(us==1){
        dataset[user].balance+=amot
        alert("your accont is credited with"+amot+ "and final balance is"+dataset[user].balance)
    }
    else if(us==0){
        alert("incorrect password");
    }
    else if(us==-1){
        alert("No user exist");
    }
    // let dataset = Bank.getData()
    // if (user in dataset) {
    //     if (dataset[user].password == pwd) {
    //         dataset[user].balance+=amot
    //         alert("your accont is credited with"+amot+ "and final balance is"+dataset[user].balance)
    //     }
    //     else {
    //         alert("incorrect password");
    //     }
    // }
    // else {
    //     alert("No user exist");
    // }
}
static withdraw=()=>
{
    let user = document.querySelector("#user").value
    let pwd = document.querySelector("#pass").value
    let amot=Number( document.querySelector("#amt").value)
    let us=Bank.authenticateUser(user,pwd)
    let dataset = Bank.getData()
    if(us==1){
        dataset[user].balance-=amot
        alert("your accont is credited with"+amot+ "and final balance is"+dataset[user].balance)
    }
    else if(us==0){
        alert("incorrect password");
    }
    else if(us==-1){
        alert("No user exist");
    }  // let user = document.querySelector("#user").value
    // let pwd = document.querySelector("#pass").value
    // let amot=Number( document.querySelector("#amt").value)
    // let dataset=Bank.getData()
    // if (user in dataset) {
    //     if (dataset[user].password == pwd) {
    //         dataset[user].balance-=amot
    //         alert("your accont is debited with"+amot+ "and final balance is"+dataset[user].balance)
    //     }
    //     else {
    //         alert("incorrect password");
    //     }
    // }
    // else {
    //     alert("No user exist");
    // }
}
}

