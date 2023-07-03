// given an angule return what type of angule is it

function angle(ang) {
  if (ang < 90 && ang > 0) {
    return `${ang} is acute angle`;
  } else if (ang === 90) {
    return `${ang} is right angle`;
  } else if (ang > 90 && ang < 180) {
    return `${ang} is obtuse angle`;
  } else if (ang === 180) {
    return `${ang} is straight angle`;
  } else if (ang > 180 && ang < 360) {
    return `${ang} is reflex angle`;
  } else {
    return `${ang} is complete angle`;
  }
}

console.log(angle(360));
