
// type CarBodyType = { material: string, state: string };
// type TiresType = { airPressure: number, condition: string };
// type EngineType = { horsepower: number, oilDensity: number };
// type AdditionalPropertiesType = { partName: string, runDiagnostics(): string }
// // type AdditionalPropertiesType = { partName: string, runDiagnostics: () => string }

// function runDiagnostics(this: AdditionalPropertiesType): string {
//     return this.partName;
// }

// function carDiagnostics(
//     carbody: CarBodyType & AdditionalPropertiesType,
//     tires: TiresType & AdditionalPropertiesType,
//     engine: EngineType & AdditionalPropertiesType
// ) {

// }

// carDiagnostics(
//     { material: 'aluminum', state: 'scratched', partName: 'Car Body', runDiagnostics },
//     { airPressure: 30, condition: 'needs change', partName: 'Tires', runDiagnostics },
//     { horsepower: 300, oilDensity: 780, partName: 'Engine', runDiagnostics }
// );

interface ICarBody { material: string, state: string }
interface ITires { airPressure: number, condition: string }
interface IEngine { horsepower: number, oilDensity: number }

type DiagnosticTool = {
  partName: string;
  runDiagnostics () : string;
}

type ModifiedCarBody = ICarBody & DiagnosticTool;
type ModifiedTires = ITires & DiagnosticTool;
type ModifiedEngine = IEngine & DiagnosticTool;

function runDiagnostics(this:DiagnosticTool):string {
    return this.partName;
}

function monitorStatus(
  carBody: ModifiedCarBody,
  tires: ModifiedTires,
  engine: ModifiedEngine
) {
    carBody.runDiagnostics = carBody.runDiagnostics.bind(carBody);
    tires.runDiagnostics = tires.runDiagnostics.bind(tires);
    engine.runDiagnostics = engine.runDiagnostics.bind(engine);


    console.log(`Diagnostic of: ${carBody.runDiagnostics()} Status: ${carBody.material}, ${carBody.state}`);
    console.log(`Diagnostic of: ${tires.runDiagnostics()} Status: AP ${tires.airPressure}, ${tires.condition}`);
    console.log(`Diagnostic of: ${engine.runDiagnostics()} Status: HP ${engine.horsepower}, oil ${engine.oilDensity}`);
}

monitorStatus({ material: 'aluminum', state: 'scratched', partName: 'Car Body', runDiagnostics },
{ airPressure: 30, condition: 'needs change', partName: 'Tires', runDiagnostics },
{ horsepower: 300, oilDensity: 780, partName: 'Engine', runDiagnostics }
)