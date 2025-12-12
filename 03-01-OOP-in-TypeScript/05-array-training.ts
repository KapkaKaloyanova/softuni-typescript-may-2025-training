const sales = [500, 1200, 300, 800, 1500, 200, 950];
console.log(sales);

const largeSales = sales.filter((sale) => sale >= 750);
console.log(largeSales);

const totalLargeSales = largeSales.reduce((sum, onesale) => (sum += onesale), 0);
console.log(totalLargeSales);

// const salesWithCommision = largeSales.map((item) => Number((item*1.1).toFixed(0)));
const salesWithCommision = largeSales.map((item) => Math.round(item * 1.1));
console.log(salesWithCommision);

// 1. Филтрирай продажбите над 750.
// 2. Начисли 10% комисионна върху тези големи продажби.
// 3. Сумирай общата стойност (с комисионната).

const totalCommisionedSales = sales
    .filter((sale) => sale >= 750)
    .map((sale) => Math.round(sale * 1.1))
    .reduce((sum, sale) => sum += sale, 0)
    .toFixed(2)

console.log(totalCommisionedSales);
