$(function () {

    let currentIndex = 0;

    let lyricSets = [
        [
            "I feel like everybody's singing out of tune",
            "I feel like I can't help but always be so blue",
            "But in the end, I know I must keep pulling through",
            "And brace myself for all the hell-like petals on the moon"
        ],
        [
            "How the hell did I fall in love this time?",
            "And honestly, I cant believe I get to call you mine",
            "I blinked and suddenly",
            "I had a Valentine"
        ],
        [
            "We could have been so good together",
            "We could have lived this dance forever",
            "But now, who's gonna dance with me?",
            "Please stay"
        ]
    ];

    let songInfo = [
        {
            title: "Petals on the Moon",
            artist: "Wasia Project",
            fact: "This song explores emotional exhaustion and perseverance."
        },
        {
            title: "Valentine",
            artist: "Laufey",
            fact: "This track focuses on unexpected love and vulnerability."
        },
        {
            title: "Careless Whisper",
            artist: "George Michael",
            fact: "This song became one of George Michael's most iconic songs."
        }
    ];

    function showLyrics(index) {
        let lyricsHTML = "";

        for (let i = 0; i < lyricSets[index].length; i++) {
            lyricsHTML += "<p>" + lyricSets[index][i] + "</p>";
        }

        $(".lyrics").html(lyricsHTML);

        $("#song-title").text(songInfo[index].title);

        $("#song-artist").text(
        "Artist: " + songInfo[index].artist
        );

        $("#song-fact").text(songInfo[index].fact);
    }

    showLyrics(currentIndex);

    $("#forward-button").click(function () {
        currentIndex++;

        if (currentIndex >= lyricSets.length) {
            currentIndex = 0;
        }

        showLyrics(currentIndex);
    });

    $("#back-button").click(function () {
        currentIndex--;

        if (currentIndex < 0) {
            currentIndex = lyricSets.length - 1;
        }

        showLyrics(currentIndex);
    });

    $("#play-button").click(function () {
        let img = $("#play-button");

        if (img.attr("src").includes("play.png")) {
            img.attr("src", "../exercises/images/pause.png");
        } else {
            img.attr("src", "../exercises/images/play.png");
        }
    });

function askWhat(correctWord) {
    let userWord = prompt("What's the magic word?");

    if (userWord && userWord.toLowerCase() == correctWord) {
        $("#output").html("Chicken butt!!!!!");
    }
    else {
        $("#output").html("Say what :3");
    }
}

$("#what-button").click(function () {
    askWhat("what");
});

$("#song-display").hover(
    function () {
        $("#fact-box").stop(true, true).slideDown(300);
    },
    function () {
        $("#fact-box").stop(true, true).slideUp(300);
    }
);

});