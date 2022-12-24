type User = {
    name: string, 
    registrationTerm: number, 
    numberOfMessages: number,
    numberOfWarnings: number
}

class TrustedUser{
    constructor(User: User) {
        this.name = User.name;
        this.registrationTerm = User.registrationTerm;
        this.numberOfMessages = User.numberOfMessages;
        this.numberOfWarnings = User.numberOfWarnings;
    }
    name: string;
    registrationTerm: number;
    numberOfMessages: number;
    numberOfWarnings: number;
    confidenceRatio: number;

    getConfidenceRatio(): number{
        this.confidenceRatio = this.numberOfMessages * 2 - this.numberOfWarnings * 100 + this.registrationTerm;
        return this.confidenceRatio;
    }
}


class ConfidenceHelper extends TrustedUser{
    static checkConfidenceRatio(user:TrustedUser): boolean{
        user.confidenceRatio =user.getConfidenceRatio();
        return user.confidenceRatio >= 0;
    }
}

let users:Array<User> = [{
    name: "Daniil", 
    registrationTerm: 120, 
    numberOfMessages: 1000,
    numberOfWarnings: 1
},
{
    name: "Alex", 
    registrationTerm: 221, 
    numberOfMessages: 150000,
    numberOfWarnings: 1200
},
{
    name: "Max", 
    registrationTerm: 120, 
    numberOfMessages: 1002,
    numberOfWarnings: 100
},
{
    name: "Leo", 
    registrationTerm: 120, 
    numberOfMessages: 1000,
    numberOfWarnings: 12121
},
{
    name: "Mark", 
    registrationTerm: 112, 
    numberOfMessages: 21,
    numberOfWarnings: 13
}];

users.forEach( user=> {
    let formattedUser:TrustedUser = new TrustedUser(user);
    if (!ConfidenceHelper.checkConfidenceRatio(formattedUser)){
        console.log(formattedUser.name);
    }
});