function aNDProcessors(input) {

    let numCpuForProduction = Number(input[0]);
    let employers = Number(input[1]);
    let workingDays = Number(input[2]) * 8;

    let sumWorkingHours = workingDays * employers;
    let allProducedProcessors = Math.floor(sumWorkingHours / 3);
    let priceOneCpu = 110.10

    if (allProducedProcessors >= numCpuForProduction) {

        let moreThenNeededProducedCpu = (allProducedProcessors - numCpuForProduction) * priceOneCpu
        console.log(`Profit: -> ${moreThenNeededProducedCpu.toFixed(2)} BGN`);

    } else if(allProducedProcessors < numCpuForProduction) {

        let nonProducedCpu = (numCpuForProduction - allProducedProcessors) * priceOneCpu

        console.log(`Losses: -> ${nonProducedCpu.toFixed(2)} BGN`);
    }
}
aNDProcessors(["150", "7", "18"])