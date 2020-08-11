// Callbacks, Promises, Async/Await

// Promise
// const hasMeeting = true;
// const meeting = new Promise((resolve, reject) => {
//     if (!hasMeeting) {
//         const meetingDetails = {
//             name: 'Maketing Meeting',
//             location: 'Skype',
//             time: '1:00 PM'
//         }
//         resolve(meetingDetails);
//     } else {
//         reject(new Error('Meeting already scheduled'));
//     }
// });

// meeting
//     .then(res => {
//         console.log('Meeting Scheduled:');
//         console.log(res);
//     })
//     .catch(err => {
//         console.log(err.message);
//     });

// const addToCalendar = meetingDetails => {
//     return new Promise((resolve, reject) => {
//         const calendar = `${meetingDetails.name} is schedule at ${meetingDetails.time} on ${meetingDetails.location}`;
//         resolve(calendar);
//     })
// };

const addToCalendar = meetingDetails => {
    const calendar = `${meetingDetails.name} is schedule at ${meetingDetails.time} on ${meetingDetails.location}`;
    return Promise.resolve(calendar);
}

const meeting1 = {
    name: 'FEDev Meeting',
    time: '4:00 AM',
    location: 'Wechat'
}

let calendar1 = addToCalendar(meeting1);

calendar1
    .then(addToCalendar)
    .then(res => {
        console.log(res);
    })
    .catch();

// console.log(addToCalendar(meeting1));