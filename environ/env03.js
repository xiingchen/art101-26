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

    function showLyrics(index) {
        let lyricsHTML = "";

        for (let i = 0; i < lyricSets[index].length; i++) {
            lyricsHTML += "<p>" + lyricSets[index][i] + "</p>";
        }

        $(".lyrics").html(lyricsHTML);
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

});