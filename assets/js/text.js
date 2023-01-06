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
      strings: ["r/archlinux", "but operating with Win as well", "PM is welcome", "if I don't answer you for a long time - I'm not interested", "/ᐠ - ˕ - ﾏ", "defragment your emotions"],
      typeSpeed: 100,
      loop: true,
      cursorChar: "|",
  });
});
