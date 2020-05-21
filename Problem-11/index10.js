function spinalCase(str) {
    let regex = /^([a-z])+|[A-Z][a-z]*|([a-z])+/g;
      return str.match(regex).join("-").toLowerCase();
    }
    
    spinalCase('This Is Spinal Tap');

