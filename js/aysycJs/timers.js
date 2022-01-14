// timer functions
// set timeout and set interval

//set time out is a single instance
//delyas code inside setTimeOut() and then run it after the timer

//set interval is a continueous loop cer a certaim about of time
// every (however many seconds) it will fun that logic


<body>
  <button onClick="startTimer()">click me</button>
  <button onClick="clearTimer()">clear me</button>
  
</body>

// <script>

let timer;

function startTimer() {
  // timer = setInterval(alertFunc, 5000, 'Ahtzi')
  timer = setTimeout(alertFunc, 3000, 'Ahtzi')
}

function clearTimer() {
  clearTimeout(timer)
}

function alertFunc(firstName) {
  alert(`Hell ${firstName}`)
}
//</script>