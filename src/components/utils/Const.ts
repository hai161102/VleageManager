import axios from 'axios';
export const address : string = "https://localhost:7158/api/";

export const API_CAPDAU = 'Capdaus';
export const API_CAULACBO = 'Caulacboes';
export const API_CAUTHU = 'Cauthus';
export const API_GIAIDAU = 'Giaidaus';
export const API_HLV = 'Huanluyenviens';
export const API_TAIKHOAN = 'Taikhoans';
export const API_VONGDAU = 'Vongdaus';


export const HTTPS = axios.create({
    baseURL: address,
    headers: {
        Authorization: 'Bearer {token}'
    }
});