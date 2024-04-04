const bill = document.querySelector("#yourBill")
const tipPercent = document.querySelector("#tipPercent")
const tipInput = document.querySelector("#tipInput")
const totalWithTip = document.querySelector("#totalWithTip")
const splitValue = document.querySelector("#splitValue")
const splitInput = document.querySelector("#splitInput")
const tipValue = document.querySelector("#tipValue")
const billEach = document.querySelector("#billEach")

const calculateTip = () => (+bill.value * +tipInput.value) / 100
const formatMoney = (val) => "R$" + val.toFixed(2)
const formatSplit = (val) => (val == 1 ? val + " pessoa" : val + " pessoas")

function updateResult() {
  let tipVal = calculateTip()
  let total = tipVal + Number(bill.value)

  tipPercent.textContent = tipInput.value + "%"
  tipValue.textContent = formatMoney(tipVal)

  totalWithTip.textContent = formatMoney(total)
  splitValue.textContent = formatSplit(splitInput.value)
  let splitBill = total / splitInput.value
  billEach.textContent = formatMoney(splitBill)
}
