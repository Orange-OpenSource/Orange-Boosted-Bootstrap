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
    const n = val, v = val.toString().replace(/^[^.]*\.?/, '').length, f = parseInt(val.toString().replace(/^[^.]*\.?/, ''), 10) || 0;
    if (n % 10 === 0 || (n % 100 === Math.floor(n % 100) && (n % 100 >= 11 && n % 100 <= 19) || v === 2 && (f % 100 === Math.floor(f % 100) && (f % 100 >= 11 && f % 100 <= 19))))
        return 0;
    if (n % 10 === 1 && !(n % 100 === 11) || (v === 2 && (f % 10 === 1 && !(f % 100 === 11)) || !(v === 2) && f % 10 === 1))
        return 1;
    return 5;
}
export default ["prg", [["AM", "PM"], u, ["ankstāinan", "pa pussideinan"]], [["AM", "PM"]], [["S", "M", "T", "W", "T", "F", "S"], ["nadīli", "panadīli", "wisasīdis", "pussisawaiti", "ketwirtiks", "pēntniks", "sabattika"]], u, [["1", "2", "3", "4", "5", "6", "7", "8", "9", "10", "11", "12"], ["rags", "wassarins", "pūlis", "sakkis", "zallaws", "sīmenis", "līpa", "daggis", "sillins", "spallins", "lapkrūtis", "sallaws"]], u, [["BCE", "CE"]], 1, [6, 0], ["y-MM-dd", "y MMM d", "y MMMM d", "y MMMM d, EEEE"], ["HH:mm", "HH:mm:ss", "HH:mm:ss z", "HH:mm:ss zzzz"], ["{1} {0}", u, u, u], [",", " ", ";", "%", "+", "-", "E", "×", "‰", "∞", "NaN", ":"], ["#,##0.###", "#,##0%", "#,##0.00 ¤", "#E0"], "PLN", u, u, { "JPY": ["JP¥", "¥"], "USD": ["US$", "$"] }, "ltr", plural];
//# sourceMappingURL=prg.js.map