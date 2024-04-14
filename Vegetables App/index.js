$(document).ready(function () {

    $("#vegbtn").click(function () {
      $("#allvegetables").show()
      $("#allfruits").hide()

    })

    $("#fruitbtn").click(function () {
      $("#allfruits").show()
      $("#allvegetables").hide()
    })

  })