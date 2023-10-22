<script lang="ts">
export default class GiaiDau {
    maso : string;
    ten : string;
    ngay_bat_dau : string | Date;
    ngay_ket_thuc : string | Date;

    constructor(
        maso : string = '',
        ten : string = '',
        ngay_bat_dau : string | Date = new Date(),
        ngay_ket_thuc : string | Date = new Date()
    ) {
        this.maso = maso;
        this.ten = ten;
        this.ngay_bat_dau = ngay_bat_dau;
        this.ngay_ket_thuc = ngay_ket_thuc;
    }

}
</script>