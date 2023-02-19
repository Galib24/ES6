document.getElementById('apply-bg').addEventListener('click', function(){
    // console.log('click')
    const friends = document.getElementsByClassName('friend');
    // console.log(friends)
    for(const friend of friends){
        // console.log(friend)
        friend.style.backgroundColor = 'lightblue'
    }
});
document.getElementById('center-third').addEventListener('click', function(){
    const third = document.getElementById('third-friend')
    third.style.textAlign = 'center';
})