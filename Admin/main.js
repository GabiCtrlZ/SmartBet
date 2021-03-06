$('#updateLeague').on('click', function(){
    const key = $('#key').val()
    const league = $("#leagueInput").val()
    $.get(`/admin/up/${key}/${league}`).then(function(response){
        console.log(response)
    }).catch(function(){})
})

$('#updateTeams').on('click', function(){
    const key = $('#key').val()
    const league = $("#leagueName").val()
    const teamsArr = $("#teamsNames").val()
    $.post(`/admin/upTeams/${key}`, {league, teamsArr}).then(function(response){
        console.log(response)
    }).catch(function(){})
})

$('#download').on('click', function(){
    const key = $('#key').val()
    const url = $("#url").val()
    const fileName = $("#file_name").val()
    $.post(`/admin/down/${key}`, {url, fileName}).then(function(response){
        console.log(response)
    }).catch(function(){})
})
$('#delete_button').on('click', function(){
    const key = $('#key').val()
    const league = $('#delete_input').val()
    $.get(`/admin/del/${key}/${league}`).then(function(response){
        console.log(response)
    }).catch(function(){})
})