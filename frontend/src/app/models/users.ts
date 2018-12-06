export class Users {
    constructor (_id='',UserName='',Password='',FullName=' ',
    Email= '',Education=' ',MainSkills=' ',WorkExperience=' ')
    {
        this._id=_id;
        this.UserName=UserName;
        this.Password=Password;
        this.FullName=FullName;
        this.Email=Email;
        this.Education=Education;
        this.MainSkills=MainSkills;
        this.WorkExperience=WorkExperience;
    }
    _id:String;
    UserName: string;
    Password:  string;
    FullName: string;
    Email: string;
    Education:  String;
    MainSkills: String;
    WorkExperience: String;
  }
    