//
// === Import
// === Export       named export, export default
//

// fayllar module tipida index.html ga ulanadi
// export qilinishi kerak bo'lgan ma'lumotni oldidan "export" yozish kifoya

// export kalit so'zi bilan export qilish named export deyiladi
export let sayHello = "Welcome to here";
import { sayHello } from "./read.js.js";

// bitta faylda faqat bitta "export default" ishlatish mumkin
//  shuningdek uni boshqa nom bilan import qilish mumkin, chuni export default 1 ta bor holos 1 ta faylda
let user1 = [1, "salom", true, 344];
export default user1;
import user1 from "./read.js";
import a from "./read.js"; // a = user1
// 15:32
