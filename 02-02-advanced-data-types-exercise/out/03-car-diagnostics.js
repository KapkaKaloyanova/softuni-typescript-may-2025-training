"use strict";
// type AdditionalPropertiesType = { partName: string, runDiagnostics: () => string }
function runDiagnostics() {
    return this.partName;
}
function carDiagnostics(carbody, tires, engine) {
}
carDiagnostics({ material: 'aluminum', state: 'scratched', partName: 'Car Body', runDiagnostics }, { airPressure: 30, condition: 'needs change', partName: 'Tires', runDiagnostics }, { horsepower: 300, oilDensity: 780, partName: 'Engine', runDiagnostics });
//# sourceMappingURL=03-car-diagnostics.js.map