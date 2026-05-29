"use strict";

const stories = {
    "vancouver": {
        title: "Vancouver",
        image: "../images/articleCover/Crypress-matt-drenth-p9N0WTyPjgc-unsplash.jpg",
        alt: "Vancouver city and bridge view",
        intro: "Vancouver is a major city in western Canada, located in the Lower Mainland region of British Columbia. It is the most populous city in the province and one of Canada's most densely populated urban centres.",
        facts: {
            "Location": "Metro Vancouver",
            "Best For": "City walks, food, waterfront views",
            "Suggested Time": "1-2 days"
        },
        tip: "Plan extra time for the waterfront. Vancouver is at its best when the route leaves room for slow walks and unexpected views.",
        related: ["stanley-park", "sea-to-sky-highway"]
    },
    "vancouver-island": {
        title: "Vancouver Island",
        image: "../images/articleCover/VanvoucerIsland-matt-drenth-Lx_QJ677Hkg-unsplash.jpg",
        alt: "Rocky Vancouver Island coastline",
        intro: "Vancouver Island is an island in the northeastern Pacific Ocean and is part of the Canadian province of British Columbia. It lies off the southwestern coast of mainland British Columbia and includes Victoria, the provincial capital.",
        facts: {
            "Location": "Off BC's Pacific Coast",
            "Best For": "Coastal towns, forests, ferries",
            "Suggested Time": "2-4 days"
        },
        tip: "Book ferry plans early during busy seasons, especially if you are travelling with a car.",
        related: ["vancouver", "stanley-park"]
    },
    "whistler": {
        title: "Whistler",
        image: "../images/articleCover/Whistler-benjamin-hayward-bvvmZbZ3QUQ-unsplash.jpg",
        alt: "Lake and mountain view near Whistler",
        intro: "Whistler is a resort municipality in British Columbia, Canada, located in the Squamish-Lillooet Regional District. It is in the southern Pacific Ranges of the Coast Mountains and is best known as the home of Whistler Blackcomb.",
        facts: {
            "Location": "North of Vancouver",
            "Best For": "Skiing, hiking, mountain biking",
            "Suggested Time": "1-3 days"
        },
        tip: "Whistler can be busy on weekends and holidays, so booking accommodation early makes the trip easier.",
        related: ["sea-to-sky-highway", "vancouver"]
    },
    "sea-to-sky-highway": {
        title: "Sea-to-Sky Highway",
        image: "../images/articleCover/SeaToSky-tim-woolliscroft--d6Btoap3dw-unsplash.jpg",
        alt: "Aerial view of the Sea-to-Sky Highway",
        intro: "The Sea-to-Sky Highway is the common name for the section of British Columbia Highway 99 that runs from Horseshoe Bay toward Pemberton. The route serves communities such as Squamish and Whistler and is known as a scenic coastal and mountain corridor.",
        facts: {
            "Location": "Highway 99",
            "Best For": "Road trips, viewpoints, day stops",
            "Suggested Time": "Half day to full day"
        },
        tip: "Leave early and avoid rushing. The drive is short enough for a day trip, but the stops are what make it memorable.",
        related: ["whistler", "vancouver"]
    },
    "stanley-park": {
        title: "Stanley Park",
        image: "../images/articleCover/Stanly-lee-robinson-Yc9h5SJdEzI-unsplash.jpg",
        alt: "Aerial view of Stanley Park and bridge",
        intro: "Stanley Park is a large public park in Vancouver, British Columbia, located beside the downtown peninsula. The park is surrounded by waters of Burrard Inlet and English Bay and is one of Vancouver's best-known urban landmarks.",
        facts: {
            "Location": "Downtown Vancouver",
            "Best For": "Biking, walking, waterfront views",
            "Suggested Time": "2-4 hours"
        },
        tip: "A bike rental is one of the easiest ways to see more of the park without rushing through it.",
        related: ["vancouver", "capilano-suspension-bridge"]
    },
    "capilano-suspension-bridge": {
        title: "Capilano Suspension Bridge",
        image: "../images/articleCover/Capilano-tim-trad-cnj0k9wYEAk-unsplash.jpg",
        alt: "Person standing on Capilano Suspension Bridge",
        intro: "The Capilano Suspension Bridge is a suspension bridge crossing the Capilano River in the District of North Vancouver, British Columbia. The bridge is part of a popular visitor attraction in the Upper Capilano area.",
        facts: {
            "Location": "North Vancouver",
            "Best For": "Forest walks, bridge views, short trips",
            "Suggested Time": "2-3 hours"
        },
        tip: "Visit earlier in the day if you want more space for photos and a calmer walk across the bridge.",
        related: ["stanley-park", "sea-to-sky-highway"]
    }
};

function createStoryLink(storyKey) {
    const story = stories[storyKey];
    const listItem = document.createElement("li");
    const link = document.createElement("a");

    link.href = `./story.html?story=${encodeURIComponent(storyKey)}`;
    link.textContent = story.title;
    listItem.appendChild(link);

    return listItem;
}

function renderStory() {
    const params = new URLSearchParams(window.location.search);
    const storyKey = params.get("story") || "vancouver";
    const story = stories[storyKey];

    document.title = `${story.title} - BC Travel Guide`;
    document.getElementById("storyTitle").textContent = story.title;
    document.getElementById("storyIntro").textContent = story.intro;
    document.getElementById("storyTip").textContent = story.tip;

    const storyImage = document.getElementById("storyImage");
    storyImage.src = story.image;
    storyImage.alt = story.alt;

    const storyFacts = document.getElementById("storyFacts");
    const facts = Object.entries(story.facts || {});
    storyFacts.innerHTML = "";

    if (facts.length === 0) {
        const description = document.createElement("dd");
        description.textContent = "No quick facts are available for this story.";
        storyFacts.appendChild(description);
    }

    facts.forEach(([label, value]) => {
        const term = document.createElement("dt");
        const description = document.createElement("dd");

        term.textContent = label;
        description.textContent = value;
        storyFacts.appendChild(term);
        storyFacts.appendChild(description);
    });

    const relatedStories = document.getElementById("relatedStories");
    const relatedStoryKeys = (story.related || []).filter((relatedStoryKey) => stories[relatedStoryKey]);
    relatedStories.innerHTML = "";

    if (relatedStoryKeys.length === 0) {
        const listItem = document.createElement("li");
        listItem.textContent = "No related stories are available.";
        relatedStories.appendChild(listItem);
    }

    relatedStoryKeys.forEach((relatedStoryKey) => {
        relatedStories.appendChild(createStoryLink(relatedStoryKey));
    });
}

renderStory();
