/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.dev/license
 */
// THIS CODE IS GENERATED - DO NOT MODIFY.
const u = undefined;
function plural(val) {
    const n = val, i = Math.floor(Math.abs(val)), v = val.toString().replace(/^[^.]*\.?/, '').length, e = parseInt(val.toString().replace(/^[^e]*(e([-+]?\d+))?/, '$2')) || 0;
    if (i === 1 && v === 0)
        return 1;
    if (e === 0 && (!(i === 0) && (i % 1000000 === 0 && v === 0)) || !(e >= 0 && e <= 5))
        return 4;
    return 5;
}
export default ["vec", [["AM", "PM"]], u, [["D", "L", "M", "M", "Z", "V", "S"], ["dom", "lun", "mar", "mer", "zob", "vèn", "sab"], ["doménega", "luni", "marti", "mèrcore", "zoba", "vènare", "sabo"], ["dom", "lun", "mar", "mer", "zob", "vèn", "sab"]], u, [["J", "F", "M", "A", "M", "J", "L", "A", "S", "O", "N", "D"], ["jen", "feb", "mar", "apr", "maj", "jug", "luj", "ago", "set", "oto", "nov", "dez"], ["jenaro", "febraro", "marso", "aprile", "majo", "jugno", "lujo", "agosto", "setenbre", "otobre", "novenbre", "dezenbre"]], u, [["v.C.", "d.C."], u, ["vanti Cristo", "daspò Cristo"]], 1, [6, 0], ["dd/MM/yy", "d MMM y", "d MMMM y", "EEEE d MMMM y"], ["HH:mm", "HH:mm:ss", "HH:mm:ss z", "HH:mm:ss zzzz"], ["{1}, {0}", u, u, u], [",", " ", ";", "%", "+", "-", "E", "×", "‰", "∞", "NaN", ":"], ["#,##0.###", "#,##0%", "#,##0.00 ¤", "#E0"], "EUR", "EUR", "euro", { "AUD": [u, "$"], "BRL": [u, "R$"], "CAD": [u, "$"], "CNY": [u, "¥"], "EUR": [u, "€"], "GBP": [u, "£"], "HKD": [u, "$"], "ILS": [u, "₪"], "INR": [u, "₹"], "JPY": [u, "¥"], "KRW": [u, "₩"], "MXN": [u, "$"], "NZD": [u, "$"], "PHP": [u, "₱"], "RON": [u, "L"], "TWD": [u, "NT$"], "USD": [u, "$"], "VND": [u, "₫"], "XAF": [], "XCD": [u, "$"], "XOF": [], "XPF": [] }, "ltr", plural];
//# sourceMappingURL=vec.js.map