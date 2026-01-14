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
export default ["lld", [["AM", "PM"]], u, [["D", "L", "M", "M", "J", "V", "S"], ["dom", "lön", "mert", "merc", "jöb", "vën", "sab"], ["domënia", "lönesc", "mertesc", "mercui", "jöbia", "vëndres", "sabeda"], ["dom", "lön", "mert", "merc", "jöb", "vën", "sab"]], u, [["J", "F", "M", "A", "M", "J", "M", "A", "S", "O", "N", "D"], ["de jená", "de forá", "de merz", "d’aurí", "de ma", "de jügn", "de messé", "d’aost", "de set", "d’oto", "de nov", "de dez"], ["de jená", "de forá", "de merz", "d’aurí", "de ma", "de jügn", "de messé", "d’aost", "de setëmber", "d’otober", "de novëmber", "de dezëmber"]], [["J", "F", "M", "A", "M", "J", "M", "A", "S", "O", "N", "D"], ["jená", "forá", "merz", "aurí", "ma", "jügn", "messé", "aost", "set", "oto", "nov", "dez"], ["jená", "forá", "merz", "aurí", "ma", "jügn", "messé", "aost", "setëmber", "otober", "novëmber", "dezëmber"]], [["dan G.C.", "AD"], u, ["dan Gejú Crist", "A.D."]], 1, [6, 0], ["dd.MM.yy", "d MMM y", "d MMMM y", "EEEE, d MMMM 'dl' y"], ["HH:mm", "HH:mm:ss", "HH:mm:ss z", "HH:mm:ss zzzz"], ["{1}, {0}", u, "{1} {0}", u], [",", ".", ";", "%", "+", "-", "E", "×", "‰", "∞", "NaN", ":"], ["#,##0.###", "#,##0%", "#,##0.00 ¤", "#E0"], "EUR", "€", "Euro", { "JPY": ["JP¥", "¥"], "USD": ["US$", "$"] }, "ltr", plural];
//# sourceMappingURL=lld.js.map