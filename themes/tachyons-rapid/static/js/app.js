$( function(){
    $("#news").submit(function (event) {
      $("#subscribe").prop("disabled", true);
      $("#spinner").addClass("dib");
      console.log(data = $(this).serializeArray());
      event.preventDefault();
      p = { "email_address": data[0].value,
        "status": "subscribed",
        "merge_fields": {}
      };
      fetch("https://lpfa-mc-add.now.sh", {
        headers: {
        'Accept': 'application/json, text/plain, */*',
        'Content-Type': 'application/json'
        },
        "method": "POST",
        body: JSON.stringify(p)
      }).then(response => {
        $("#spinner").removeClass("dib");
        $('#news').trigger("reset");
        $("#subscribe").prop("disabled", false);
      });
    });
  });