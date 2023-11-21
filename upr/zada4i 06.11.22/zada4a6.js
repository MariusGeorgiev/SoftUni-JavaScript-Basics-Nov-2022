function SwimRecord(input) {
    let worldRecordSec = Number(input[0]);
    let lenghtMetric = Number(input[1]);
    let SwimTimeSec = Number(input[2]);
    let lenghtMetricSlowing = Math.floor(lenghtMetric / 15);
    let delayTime = lenghtMetricSlowing * 12.5

    let metricXsec = lenghtMetric * SwimTimeSec;
    let timeSwimIvan = metricXsec + delayTime;

    if (timeSwimIvan < worldRecordSec) {

        console.log(`Yes, he succeeded! The new world record is ${(timeSwimIvan.toFixed(2))} seconds.`);

    } else if (timeSwimIvan >= worldRecordSec) {
        let failed = timeSwimIvan - worldRecordSec;
        
        console.log(`No, he failed! He was ${(failed.toFixed(2))} seconds slower.`);
    }
}

SwimRecord(["55555.67","3017","5.03"])

//цяло чи
