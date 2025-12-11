export{};
// Общи свойства за всички етажи
type CommonProperties = {
    hallway: 'A' | 'C';
    pass?: 'Guest';
};

// 1. Етаж 1: number=1, train()
type Floor1 = CommonProperties & {
    number: 1;
    train: () => void;
};

// 2. Етаж 2: number=2, dine()
type Floor2 = CommonProperties & {
    number: 2;
    dine: () => void;
};

// 3. Етаж 3: number=3, sleep()
type Floor3 = CommonProperties & {
    number: 3;
    sleep: () => void;
};

// Опростен Union Type
type simplified = Floor1 | Floor2 | Floor3;

function visitFloor(floor: simplified) {
    // Благодарение на Discriminated Union (по 'floor.number'),
    // TypeScript знае кой метод да извика във всеки 'case'.
    switch (floor.number) {
        case 1:
            // TypeScript знае, че тук е 'Floor1', който ИМА train()
            floor.train(); 
            return;
        case 2:
            // TypeScript знае, че тук е 'Floor2', който ИМА dine()
            floor.dine(); 
            return;
        case 3:
            // TypeScript знае, че тук е 'Floor3', който ИМА sleep()
            floor.sleep(); 
            return;
    }
}
//! working calls:
visitFloor({ train() { }, number: 1, hallway: 'A', pass: 'Guest' });
visitFloor({ dine() { }, number: 2, hallway: 'A' });
visitFloor({ sleep() { }, number: 3, hallway: 'C' });
visitFloor({ train() { }, number: 1, hallway: 'C' });
visitFloor({ train() { }, number: 1, hallway: 'A' });
visitFloor({ dine() { }, number: 2, hallway: 'A', pass: 'Guest' });
visitFloor({ sleep() { }, number: 3, hallway: 'A' });
visitFloor({ dine() { }, number: 2, hallway: 'C' });

//! Not working calls:
// visitFloor({ train() { }, number: 4, hallway: 'A' });
// visitFloor({ train() { }, number: 1, hallway: 'C', pass: 'Guest' });
// visitFloor({ train() { }, number: 2, hallway: 'A' });
// visitFloor({ train() { }, number: 3, hallway: 'C' });
// visitFloor({ train() { }, number: 3, hallway: 'C', pass: 'Guest' });

// visitFloor({ dine() { }, number: 1, hallway: 'A' });
// visitFloor({ dine() { }, number: 1, hallway: 'B' });
// visitFloor({ dine() { }, number: 1, hallway: 'C' });
// visitFloor({ dine() { }, number: 3, hallway: 'C' });
// visitFloor({ dine() { }, number: 2, hallway: 'C', pass: 'Guest' });
// visitFloor({ dine() { }, number: 1, hallway: 'A', pass: 'Guest' });

// visitFloor({ sleep() { }, number: 3, hallway: 'D' });
// visitFloor({ sleep() { }, number: 4, hallway: 'C' });
// visitFloor({ sleep() { }, number: 1, hallway: 'C' });
// visitFloor({ sleep() { }, number: 1, hallway: 'A' });
// visitFloor({ sleep() { }, number: 2, hallway: 'A' });
// visitFloor({ sleep() { }, number: 2, hallway: 'C' });

