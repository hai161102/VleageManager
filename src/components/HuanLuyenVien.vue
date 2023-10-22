<script lang="ts">
import type { Nguoi } from './Nguoi.vue';

export default class HuanLuyenVien {
    public maso : string = '';
    public ten : string = '';
    public ngaysinh : Date | string;
    public chucvu : string = '';

    constructor(nguoi : Nguoi = {maso : '', ten : '', ngaySinh : new Date()}, chucvu : string = '') {
        this.maso = nguoi.maso;
        this.ten = nguoi.ten;
        this.ngaysinh = nguoi.ngaySinh;
        this.chucvu = chucvu;
    }
}
</script>