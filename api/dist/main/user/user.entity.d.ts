export declare class User {
    user_id: number;
    user_uuid: string;
    username: string;
    password: string;
    salt: string;
    firstname: string;
    lastname: string;
    avatar: string;
    email: string;
    status_patient: string;
    hospital_name: string;
    create_at: Date;
    create_by: string;
    update_at: Date;
    update_by: string;
    recycle: boolean;
    isActive: boolean;
}
