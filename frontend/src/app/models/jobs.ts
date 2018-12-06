export class Jobs {
constructor (_id='',Title='',City='',
Salary= '',CompanyName='',Type='',CreationDate='',CompanyDescription='',
RequiredSkills='',EndingDate='',Description='',)
{this._id=_id;
    this.Title=Title;
    this.City=City;
    this.CompanyName=CompanyName;
    this.Type=Type;
    this.CreationDate=CreationDate;
    this.CompanyDescription=CompanyDescription;
    this.RequiredSkills=RequiredSkills;
    this.Description=Description;
    this.Salary=Salary;
    this.EndingDate=EndingDate;
}
_id:String;
Title: String;
City:  String;
CompanyName: String;
Type: String;
CreationDate: String;
CompanyDescription:String;
RequiredSkills:String;
Description: String;
Salary: String;
EndingDate:  String;
}
