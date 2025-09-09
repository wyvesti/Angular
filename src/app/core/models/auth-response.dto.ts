import { UserDTO } from "./user.dto";

export interface AuthResponseDto {
    token: string;
    user: UserDTO;
}