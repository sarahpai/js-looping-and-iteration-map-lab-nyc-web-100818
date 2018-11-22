function lowerCaseDrivers(drivers){
  return drivers.map(function(driver) {
    return driver.toLowerCase();
  })
}

function nameToAttributes(drivers) {
  return drivers.map(function (driver) {
    const firstName = driver.split(" ")[0];
    const lastName = driver.split(" ")[1];
    return {
      firstName: firstName, lastName: lastName
    }
  })
}

function attributesToPhrase(drivers) {
  return drivers.map(function(driver){
    const name = driver.name
    const hometown = driver.hometown
    return `${name} is from ${hometown}`
  })
}
