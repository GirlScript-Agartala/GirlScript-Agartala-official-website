const announcementTimeline = [
    {
        eventName: 'LinkedIn - its myths and effectiveness',
        eventDescription: `Our Speakers-<strong>Ishan, Bhavishya & Harsh</strong> shared their valuable thoughts on LinkedIn.`,
        eventDate: 'July 6, 2020',
        eventPageLink: './event1.html'
     },
    {
        eventName: 'Web Weave',
        eventDescription: `A 3-day comprehensive session on <strong>Web Development</strong>. From <strong>June 28th - 30th, 2020</strong>.`,
        eventDate: 'June 28, 2020',
        eventPageLink: './event1.html'
    },
    
    // {
    //     eventName: 'Code Camp',
    //     eventDescription: `It is a coding camp where everyone can participate and learn about different technologies.`,
    //     eventDate: 'May 20, 2020',
    //     eventPageLink: './event1.html'
    // }
];

const recentEventsDetails = [
    {
        coverImage: 'assets/Images/announcement/Linkedinsession.jpg',
        eventName: 'LinkedIn - Myths & Effectiveness',
        altName: 'LinkedIn Logo',
        eventDescription: `Our Speakers enlightened us with their views on how LinkedIn can be leveraged for success effectively.`,
        referencePage: '#!'
    },
    {
        coverImage: 'assets/Images/announcement/webWeave.jpg',
        eventName: 'Web Weave',
        altName: 'Web Weave Logo',
        eventDescription: `As the eye is the window to the soul, website is the window to business, making the customers have a taste of what you have to offer and enticing them to dive deeper for more.`,
        referencePage: '#!'
    },
    {
        coverImage: 'assets/Images/announcement/contributors.png',
        eventName: 'Contributions',
        altName: 'Contributors Illustration',
        eventDescription: `We are extremely elated to see so many participants coming up with different skills and
								new ways of approaching solution and contribute to the project.`,
        referencePage: '#!'
    },
    // {
    //     coverImage: 'assets/Images/announcement/DU-Express.png',
    //     eventName: 'DU Express',
    //     altName: 'DU Express Logo',
    //     eventDescription: `We would like to thank DU Express (@DuExpress) to be our Media Partner for GirlScript
    // 							Summer Of Code 2020.`,
    //     referencePage: '#!'
    // }
];

const generateTimelineCard = (timelineDetail, position) => {
    const { eventName, eventDescription, eventDate, eventPageLink } = timelineDetail;

    const dateType = position === 'right' ? 'time-2' : 'time-1';

    const timeline = `<div class="timeline-container ${position}">
						<div class="timeline-content">
							<h3>${eventName}</h3>
							<hr class="mw-100 line1" />
							<p class="description">
								${eventDescription}
							</p>
							<div class="time ${dateType}">
								<h5>${eventDate}</h5>
							</div>
							<div class="card-stats">
								<a href="${eventPageLink}" class="btn card-btn card1-text" target="__blank">Read More</a>
							</div>
						</div>
					</div>`;

    const timelineSection = document.getElementById('timeline');
    timelineSection.innerHTML += timeline;
};

const generateEventsCard = (eventDetail, fixClassIndex) => {
    const { coverImage, eventName, altName, eventDescription, referencePage } = eventDetail;
    const eventCard = `<div class="card r-events-card">
						<div class="card-image">
							<img
								src="${coverImage}"
								alt="${altName}"
								aria-label="${altName}"
							/>
						</div>
						<div class="card-text">
							<h2 class="rh${fixClassIndex}">${eventName}</h2>
							<p class="pt-1 event-body">
								${eventDescription}
							</p>
						</div>
						<div class="card-stats">
							<a href="${referencePage}" class="btn card-btn card1-text card-btn2"> Read More</a>
						</div>
					</div>`;

    const recentEventsSection = document.getElementById('eventCards');
    recentEventsSection.innerHTML += eventCard;
};

const insertAnnouncementTimeline = () => {
    // position of events on timeline will be judged automatically
    announcementTimeline.forEach((details, index) => {
        const position = index % 2 === 0 ? 'left' : 'right';
        generateTimelineCard(details, position);
    });
};
const insertEventCards = () => {
    recentEventsDetails.forEach((detail, index) => {
        generateEventsCard(detail, index + 1);
    });
};

insertAnnouncementTimeline();
insertEventCards();