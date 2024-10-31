
import { addCheckboxes } from "./tables-functions.js";
import { handleHeaderCheckboxChange } from "./tables-functions.js";
import { getTableCheckedRecords } from "./tables-functions.js";

export const tables = {
    addCheckboxes : (view) => addCheckboxes(view),
    addHeadEventHandler: (view, rules) => handleHeaderCheckboxChange(view, rules),
    getChechedRecords: (view) => getTableCheckedRecords(view)
}
