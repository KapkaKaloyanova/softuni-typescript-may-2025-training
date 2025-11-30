
type CarBodyType = { material: string, state: string };
type TiresType = { airPressure: number, condition: string };
type EngineType = { horsepower: number, oilDensity: number };
type AdditionalPropertiesType = { partName: string, runDiagnostics(): string }
// type AdditionalPropertiesType = { partName: string, runDiagnostics: () => string }

function runDiagnostics(this: AdditionalPropertiesType): string {
    return this.partName;
}

function carDiagnostics(
    carbody: CarBodyType & AdditionalPropertiesType,
    tires: TiresType & AdditionalPropertiesType,
    engine: EngineType & AdditionalPropertiesType
) {

}

carDiagnostics(
    { material: 'aluminum', state: 'scratched', partName: 'Car Body', runDiagnostics },
    { airPressure: 30, condition: 'needs change', partName: 'Tires', runDiagnostics },
    { horsepower: 300, oilDensity: 780, partName: 'Engine', runDiagnostics }
);