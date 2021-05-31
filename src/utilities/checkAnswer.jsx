export default function (response) {
  let modelAnswer = localStorage.getItem('answer').split('.')
  const staticModelAnswer = [...modelAnswer]
  const responseArr = Object.values(response)

  const initialCheck = [0, 0, 0, 0]

  //primary check to check for WHITES(1)
  const primaryCheck = initialCheck.map((check, idx) => {
    if (modelAnswer.includes(responseArr[idx])) {
      modelAnswer.splice(modelAnswer.indexOf(responseArr[idx]), 1)
      return 1
    } else {
      return check
    }
  })

  //secondary check to check for REDS(2)
  const secondaryCheck = primaryCheck.map((check, idx) =>
    responseArr[idx] === staticModelAnswer[idx] ? 2 : check
  )

  const final = secondaryCheck.sort((a, b) => b - a)

  return {
    1: final[0],
    2: final[1],
    3: final[2],
    4: final[3]
  }
}
