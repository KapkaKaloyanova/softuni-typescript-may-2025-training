export function ConvertToEuro(target: object, propertyKey: string, descriptor: PropertyDescriptor) { //property accessor decorator

    if (!descriptor.get) {
        throw new Error("ConvertToEuro can only be applied to getters")
    }
    const originalGetter = descriptor.get;

    descriptor.get = function () {
        let priceInBGN = originalGetter.call(this)
        if (priceInBGN === undefined) {
            return this.value;
        } else {
            let finalPriceInEUR = (priceInBGN / 1.95583).toFixed(2);
            const numFinalPriceInEUR = parseFloat(finalPriceInEUR);
            return numFinalPriceInEUR;
        }
    }
    return descriptor;


}