function radioCrystal(arr) {
    let doneCrystal = arr[0];
    let crystal = arr[1];

    let crystalbeforeWorking = crystal;

    let cutCounter = 0;
    let lapCounter = 0;
    let grind = 20;
    let grindCounter = 0;
    let etch = 2;
    let etchCOunter = 0;
    let xRayCounter = 0;

    for (let i = 1; i <= arr.length; i++) {
        while (crystalbeforeWorking > doneCrystal) {
            while ((doneCrystal * 4) <= crystalbeforeWorking) {
                crystalbeforeWorking = crystalbeforeWorking / 4;
                crystalbeforeWorking = parseInt(crystalbeforeWorking);
                cutCounter++;
            }

            while ((doneCrystal * 1.2) <= crystalbeforeWorking) {
                lapCounter++;
                crystalbeforeWorking *= 0.8;
                crystalbeforeWorking = parseInt(crystalbeforeWorking);
            }

            while ((doneCrystal + 16) < crystalbeforeWorking) {
                grindCounter++;
                crystalbeforeWorking -= grind;
                crystalbeforeWorking = parseInt(crystalbeforeWorking);
            }

            while (doneCrystal < crystalbeforeWorking) {
                etchCOunter++;
                crystalbeforeWorking -= etch;
                crystalbeforeWorking = parseInt(crystalbeforeWorking);
            }
            while (crystalbeforeWorking < doneCrystal) {
                xRayCounter++;
                crystalbeforeWorking += 1;
            }

            console.log(`Processing chunk ${crystal} microns`)

            if (cutCounter >= 1) {
                console.log(`Cut x${cutCounter}`)
                console.log("Transporting and washing")
            }
            if (lapCounter >= 1) {
                console.log(`Lap x${lapCounter}`);
                console.log("Transporting and washing")
            }
            if (grindCounter >= 1) {
                console.log(`Grind x${grindCounter}`)
                console.log("Transporting and washing")
            }
            if (etchCOunter >= 1) {
                console.log(`Etch x${etchCOunter}`)
                console.log("Transporting and washing")
            }
            if (xRayCounter >= 1) {
                console.log(`X-ray x${xRayCounter}`)

            }

            console.log(`Finished crystal ${doneCrystal} microns`)

        }

        cutCounter = 0;
        lapCounter = 0;
        grindCounter = 0;
        etchCOunter = 0;
        xRayCounter = 0;

        i++;
        crystalbeforeWorking = arr[i];
        crystal = crystalbeforeWorking;


    }


}
radioCrystal([1000, 4000, 8100])


