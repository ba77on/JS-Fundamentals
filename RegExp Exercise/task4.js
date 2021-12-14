function starEnigma(array) {
    let messagesCount = Number(array.shift());
    let attacked = [];
    let destroyed = [];
    for (let i = 0; i < messagesCount; i++) {
      let decryptionPattern = /[starSTAR]/g;
      let decryptionKey = array[i].match(decryptionPattern) && (array[i].match(decryptionPattern)).length;  // да проверявам дали изобщо има match
      let newMessage = '';
      for (let el of array[i]) {
        let newEl = String.fromCharCode((el.charCodeAt() - decryptionKey));
        newMessage += newEl;
      }
      let secondPattern = /@(?<planetName>[A-Za-z]+)([^@\-!:>]*):\d+([^@\-!:>]*)!(?<attackType>[AD])!([^@\-!:>]*)\->\d+/g;
      let current = secondPattern.exec(newMessage);
      if (current === null) {
        continue;
      } else {
        if (current.groups.attackType === 'A') {
          attacked.push(current.groups.planetName);
        } else if (current !== null && current.groups.attackType === 'D') {
          destroyed.push(current.groups.planetName);
        }
      }
    }
    console.log(`Attacked planets: ${attacked.length}`);
    if (attacked.length > 0) {
      attacked.sort((a, b) => a.localeCompare(b)).forEach(x => console.log(`-> ${x}`));
    }
    console.log(`Destroyed planets: ${destroyed.length}`);
    if (destroyed.length > 0) {
      destroyed.sort((a, b) => a.localeCompare(b)).forEach(x => console.log(`-> ${x}`));
    }
  }
starEnigma(['2', 'STCDoghudd4=63333$D$0A53333',
    'EHfsytsnhf?8555&I&2C9555SR'])