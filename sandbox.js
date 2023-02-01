const countDown = () =>{
    const oldDate = new Date('Jan 31, 2023 00:00:00').getTime();
    const now = new Date().getTime();
    const diff = now - oldDate;

    const secs = 1000;
    const mins = secs * 60;
    const hrs =  mins * 60;
    const days = hrs * 24;

    const timeDays = Math.floor(diff / days);
    const timeHours = Math.floor((diff % days) / hrs);
    const timeMinutes = Math.floor((diff % hrs) / mins)
    const timeSeconds = Math.floor((diff % mins) / secs)

    
    console.log(timeDays, timeHours, timeMinutes, timeSeconds);
}
countDown();