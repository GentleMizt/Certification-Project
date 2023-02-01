const countDown = () =>{
    const oldDate = new Date('Dec 25, 2022 00:00:00').getTime();
    const now = new Date().getTime();
    const diff = now - oldDate;

    console.log(diff);
}
countDown();