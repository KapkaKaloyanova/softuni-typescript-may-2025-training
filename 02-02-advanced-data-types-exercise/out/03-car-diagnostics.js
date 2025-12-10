"use strict";
// type CarBodyType = { material: string, state: string };
// type TiresType = { airPressure: number, condition: string };
// type EngineType = { horsepower: number, oilDensity: number };
// type AdditionalPropertiesType = { partName: string, runDiagnostics(): string }
// // type AdditionalPropertiesType = { partName: string, runDiagnostics: () => string }
function runDiagnostics() {
    return this.partName;
}
function monitorStatus(carBody, tires, engine) {
    carBody.runDiagnostics = carBody.runDiagnostics.bind(carBody);
    tires.runDiagnostics = tires.runDiagnostics.bind(tires);
    engine.runDiagnostics = engine.runDiagnostics.bind(engine);
    console.log(`Diagnostic of: ${carBody.runDiagnostics()} Status: ${carBody.material}, ${carBody.state}`);
    console.log(`Diagnostic of: ${tires.runDiagnostics()} Status: AP ${tires.airPressure}, cond. ${tires.condition}`);
    console.log(`Diagnostic of: ${engine.runDiagnostics()} Status: HP ${engine.horsepower}, OD ${engine.oilDensity}`);
}
monitorStatus({ material: 'aluminum', state: 'scratched', partName: 'Car Body', runDiagnostics }, { airPressure: 30, condition: 'needs change', partName: 'Tires', runDiagnostics }, { horsepower: 300, oilDensity: 780, partName: 'Engine', runDiagnostics });
//# sourceMappingURL=03-car-diagnostics.js.map