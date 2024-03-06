export interface UserInterface {
    name: string;
    lastname: string;
    username: string;
    email: string;
    password: string;
    repeat_password: string;
    profilePicture: string;
}

export interface existingUser {
    email: string;
    password: string;
}