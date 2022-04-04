export interface User
{
    User_id:string;
    Camp_id:string;
    First_name:string;
    Last_name:string;
    gender:string;
    Type:string;
    Cellphone_number:string;
    Email:string;
    Password:string;
}

export interface UserLogin
{
    message: string;
    User_id: string;
    Password: string;
    token:string;
}
export interface AdminLogin {
    message: string;
    User_id: string;
    Password: string;
    token: string;
}
export interface OfficerLogin
{
    message: string;
    User_id:string;
    Password:string;
}

export interface Record
{
    Officer_id:string;
    User_id:string;
    Form_check:string;
    Date:string;
    Tempareture:Number;
    isAllowedEntrence:Number;
    Health_status_reason:string;
}
export interface GetAllRecords
{
    Officer_id:string;
    User_id:string;
    Form_check:string;
    Date:string;
    Tempareture:Number;
    isAllowedEntrence:Number;
    Health_status_reason:string;
}

export interface GetAllOfficers
{
    Officer_id:string;
    Campus_id:string
    First_name:string;
    Last_name:string;
    Gender:string;
    Cellphone_number:string;
    Email:string;
    Password:string;
}
export interface Officer
{
    Officer_id:string;
    Campus_id:string
    First_name:string;
    Last_name:string;
    Gender:string;
    Cellphone_number:string;
    Email:string;
    Password:string;
}
export interface UpdateRecord
{
    Tempareture:Number;
    Health_status_reason:string;
    //Record_id:number;
}

