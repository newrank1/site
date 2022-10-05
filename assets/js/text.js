$(function() {
    var title = document.title,
      animSeq = ["|"],
        animIndex = 0,
        titleIndex = 0;
    function doInverseSpinZeroPitch() {
        var loadTitle = title.substring(0, titleIndex);
        if (titleIndex > title.length) {
            animIndex = 0;
            titleIndex = 0
        }
        if (animIndex > 1) {
            titleIndex++;
            animIndex = 0
        }
        document.title = loadTitle + animSeq[0];
        animIndex++
    }
    window.setInterval(doInverseSpinZeroPitch, 150);
});
$(function() {
  $(".typed").typed({
      strings: ["just a computer science student", "operating with linux and windows, also with Bash/Shell", "/ᐠ - ˕ - ﾏ", "thanks to Kaseki and Imadraude", "Don't be silent, stop the war", "Слава Україні"],
      typeSpeed: 100,
      loop: true,
      cursorChar: "|",
  });
});
