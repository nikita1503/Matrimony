jQuery("#profile_dob7").keyup(function(){
    today=date.today()
    born=jQuery("profile_dob7")
    jQuery("#profile_age7").value=today.year - born.year
      });
