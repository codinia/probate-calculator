function dateEntered() {
    let m = 100000;
    let c_value = 0;
    let first_m_per = 0;
    let second_m_per = 0;
    let eight_m_per = 0;
    let nine_m_per = 0;
    let fifteen_m_per = 0;
    let attr_fee = 0;
    let exect_fee = 0;

    let total_pp = 0;
    let total_p = 0;
    let i_value = document.getElementById("txt_est_val").value;

    if (i_value && i_value > 0) {
        c_value = i_value;
        let first_m = i_value <= m ? i_value : m;
        first_m_per = Math.ceil((first_m * 4) / 100);
        document.getElementById("four_percent").value = first_m_per;
        c_value = c_value - first_m;
        if (c_value > 0) {
            let second_m = c_value <= m ? c_value : m;
            second_m_per = Math.ceil((second_m * 3) / 100);
            document.getElementById("three_percent").value = second_m_per;
            c_value = c_value - second_m;
        }
        if (c_value > 0) {
            let eight_m = c_value <= 8 * m ? c_value : 8 * m;
            eight_m_per = Math.ceil((eight_m * 2) / 100);
            document.getElementById("two_percent").value = eight_m_per;
            c_value = c_value - eight_m;
        }
        if (c_value > 0) {
            let nine_m = c_value <= 90 * m ? c_value : 90 * m;
            nine_m_per = Math.ceil((nine_m * 1) / 100);
            document.getElementById("one_percent").value = nine_m_per;
            c_value = c_value - nine_m;
        }
        if (c_value > 0) {
            let fifteen_m = c_value <= 150 * m ? c_value : 150 * m;
            fifteen_m_per = Math.ceil((fifteen_m * 0.5) / 100);
            document.getElementById("point_five").value = fifteen_m_per;
            c_value = c_value - fifteen_m;
        }
        if (first_m_per > 0) {
            attr_fee =
                first_m_per + second_m_per + eight_m_per + nine_m_per + fifteen_m_per;
            document.getElementById("attr_fee").value = attr_fee;
            exect_fee = attr_fee;
            document.getElementById("exec_fee").value = exect_fee;
            total_pp = attr_fee + exect_fee
            total_p = total_pp;
            document.getElementById("total_pp").value = total_pp;
            document.getElementById("total_p").value = total_p;


        }
    }
}