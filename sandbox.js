const countDown = () =>{
    const oldDate = new Date('Mar 01 2023 00:00:00').getTime();
    const now = new Date().getTime();
    const diff = oldDate - now;

    const secs = 1000;
    const mins = secs * 60;
    const hrs =  mins * 60;
    const days = hrs * 24;

   let timeDays = Math.floor(diff / days);
   let timeHours = Math.floor((diff % days) / hrs);
   let timeMinutes = Math.floor((diff % hrs) / mins)
   let timeSeconds = Math.floor((diff % mins) / secs)

    timeDays = timeDays < 10 ? '0' + timeDays : timeDays;
    timeHours = timeHours < 10 ? '0' + timeHours : timeHours;
    timeMinutes = timeMinutes < 10 ? '0' + timeMinutes : timeMinutes;
    timeSeconds = timeSeconds < 10 ? '0' + timeSeconds : timeSeconds;

    document.getElementById('days').innerHTML = timeDays;
    document.getElementById('hours').innerHTML = timeHours;
    document.getElementById('minutes').innerHTML = timeMinutes;
    document.getElementById('seconds').innerHTML = timeSeconds;

    setInterval(countDown, 1000);
}
countDown();