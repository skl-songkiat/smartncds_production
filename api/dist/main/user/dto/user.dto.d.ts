export declare class UserDto {
    user_uuid: string;
    username: string;
    password: string;
    firstname: string;
    lastname: string;
    fullname: string;
    position: string;
    organization_uuid: string;
    shift_structure_uuid: string;
    commander_uuid: string;
    email: string;
    phone: string;
    avatar: string;
    role_id: number;
    employee_code: string;
    company_uuid: string;
    remark: string;
    isActive: boolean;
    whois: string;
}
export declare class DropDownUserDto {
    company_uuid: string;
    organization: any[];
    shiftstructure: any[];
    commander: any[];
}
