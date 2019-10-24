/* Tabulator v4.4.3 (c) Oliver Folkerd */

Cell.prototype.setOriginalValue = function (val) {
    this.originalValue = val;
};
Cell.prototype.getOriginalValue = function () {
    return this.originalValue;
};
Cell.prototype.clearOldValue = function () {
    this.oldValue = null;
};

CellComponent.prototype.getOriginalValue = function () {
    return this._cell.getOriginalValue();
};
CellComponent.prototype.clearOldValue = function () {
    this._cell.clearOldValue();
};
CellComponent.prototype.restoreOriginalValue = function () {
    this._cell.setValueActual(this._cell.getOriginalValue());
};

Tabulator.prototype.getColumnSort = function () {
    if (this.modExists("persistence", true)) {
        return this.modules.persistence.validateSorters(this.modules.sort.getSort());
    }
};