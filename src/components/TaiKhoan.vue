<script lang="ts">
export default class TaiKhoan {
    tenTaiKhoan : string = '';
    matkhau : string = '';
    email : string = '';

    constructor(tenTaiKhoan : string = '', matkhau : string = '', email : string = '') {
        this.tenTaiKhoan = tenTaiKhoan;
        this.matkhau = matkhau;
        this.email = email;
    }
}
</script>