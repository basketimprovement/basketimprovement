  // Your web app's Firebase configuration
  var firebaseConfig = {
    apiKey: "AIzaSyBymxgCdW0IJASyOyEPq76hi7iJ9lsdhUA",
    authDomain: "basket-1ae7e.firebaseapp.com",
    databaseURL: "https://basket-1ae7e.firebaseio.com",
    projectId: "basket-1ae7e",
    storageBucket: "basket-1ae7e.appspot.com",
    messagingSenderId: "41778497852",
    appId: "1:41778497852:web:b160ffd5f7205f6f"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
  var db = firebase.database();

var url = new URL(location.href);
var session = {
    login: url.searchParams.get('login'),
    senha: url.searchParams.get('senha')
}
db.ref('session').once('value').then(r => {
    var flag = true;
    r.forEach(item => {
        if(session.login == item.val().login && window.atob(session.senha) == item.val().senha) flag = false;
    });

    if(flag) {
        location.href = 'index.html?error=true';
    }else{
        $('body').show();
    }
});
