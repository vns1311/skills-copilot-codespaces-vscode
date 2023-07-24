function skillsMember() {
  var member = document.getElementById('member');
  var memberSkills = document.getElementById('member-skills');
  var memberSkillsHeight = memberSkills.offsetHeight;
  var memberHeight = member.offsetHeight;
  var memberHeightHalf = memberHeight / 2;
  var memberSkillsHeightHalf = memberSkillsHeight / 2;
  var memberSkillsTop = memberHeightHalf - memberSkillsHeightHalf;
  memberSkills.style.top = memberSkillsTop + 'px';
}