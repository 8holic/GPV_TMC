(function () {
  function firstWednesday(y, m) {
    var d = new Date(y, m, 1);
    return new Date(y, m, 1 + ((3 - d.getDay() + 7) % 7));
  }

  function nextMeetingDate() {
    var now = new Date();
    var next = firstWednesday(now.getFullYear(), now.getMonth());
    var meetingEnd = new Date(now.getFullYear(), now.getMonth(), next.getDate(), 20, 0, 0);
    if (meetingEnd.getTime() < now.getTime()) {
      next = firstWednesday(now.getFullYear(), now.getMonth() + 1);
    }
    return next;
  }

  function fillNextMeeting() {
    var el = document.getElementById('next-meeting-date');
    if (!el) return;
    var next = nextMeetingDate();
    el.textContent = 'Next meeting: ' + next.toLocaleDateString('en-SG', { weekday: 'long', day: 'numeric', month: 'long', year: 'numeric' });
  }

  fillNextMeeting();
})();