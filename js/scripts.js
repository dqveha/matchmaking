$(document).ready(function() {
  $("#formOne").submit(function(event) {
    event.preventDefault();

    const gender = $("input:radio[name=gender]:checked").val();

    const age = $("input:radio[name=age]:checked").val();

    const richAttractive = $("input:radio[name=rich-or-attractive]:checked").val();

    const doa = $("input:radio[name=alive-dead]:checked").val();

    if (gender === 'male' && age === 'ageGroup2' && doa === 'alive' && (richAttractive === 'rich' || richAttractive === 'attractive')) {
      $("#match").show();
      $(".person1").text("You got Ryan Gosling!").show();
    } 
    else if (gender === 'female' && age === 'ageGroup3' && doa === 'alive' && (richAttractive === 'rich' || richAttractive === 'attractive')) {
      $("#match").show();
      $(".person1").text("You got Jennifer Aniston!").show();
    }
    else {
      $("#match").show();
      $(".person1").text("Sorry, keep trying").show();
    }
  });
});