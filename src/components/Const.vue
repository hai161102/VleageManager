<script lang="ts">
import type CapDau from './CapDau.vue';
import CauLacBo from './CauLacBo.vue';
import type Cauthu from './Cauthu.vue';
import type GiaiDau from './GiaiDau.vue';
import type HuanLuyenVien from './HuanLuyenVien.vue';
import type VongDau from './VongDau.vue';

export default class Const {

    caulacbos: CauLacBo[] = [
        new CauLacBo('adadad', 'Arsenal', 'London', ''),
        new CauLacBo('1', 'Manchester City', 'Manchester', 'Etihad'),
    ];
    cauthus: Cauthu[] = [];
    hlvs: HuanLuyenVien[] = [];
    giaidaus: GiaiDau[] = [];
    vongdaus: VongDau[] = []; //
    capdaus: CapDau[] = [];
    private static _instance: Const = new Const();
    public static get instance() {
        if (Const._instance == null) {
            Const._instance = new Const();
        }
        return Const._instance;
    }
}
</script>