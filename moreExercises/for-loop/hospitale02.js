function hospitale(input) {

    let period = Number(input[0]);
    let doctors = 7;

    let counterExamPatients = 0;
    let counterAllNonExamPatients = 0;

    for (let i = 1; i <= period; i++) {

        let pacients = Number(input[i]);

        if (i % 3 === 0) {
            if (counterAllNonExamPatients > counterExamPatients) {
                doctors++;
            }
        }

        if (pacients >= doctors) {
            counterExamPatients += doctors
            counterAllNonExamPatients += pacients - doctors
        } else if (pacients < doctors) {
            counterExamPatients += pacients

        }

    }
    console.log(`Treated patients: ${counterExamPatients}.`);
    console.log(`Untreated patients: ${counterAllNonExamPatients}.`);
}
hospitale(["3", "7", "7", "7"])
