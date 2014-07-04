lib.loginbox = USER_INT
lib.loginbox {
    userFunc = tx_felogin_pi1->main
    #copied from the sysext/felogin template file and modified slightly for our purposes    
    templateFile = EXT:semadeni/Resources/Private/Extensions/login/template.html
    # location of member records
    storagePid = 6
 
    # set redirect options as per felogin documentation
    redirectMode = login
    redirectPageLogin = 53
 
    #set other options as per felogin documentation
    showForgotPasswordLink = 1
    showPermaLogin = 1
    wrapContentInBaseClass = true

    _LOCAL_LANG.default {
      username = E-Mail
      password = Password
    }

    _LOCAL_LANG.de {
      username = E-Mail
      password = Passwort
      ll_welcome_header = ABCD-Login
      ll_welcome_message >
    }

    _LOCAL_LANG.fr {
      username = Courriel
      password = Mot de passé
    }

}

plugin.tx_felogin_pi1 {


  _LOCAL_LANG.default {


    Label_header_welcome = 
    Label_msg_welcome =
    Label_header_logout = 
    Label_msg_logout =
    Label_header_error = Anmeldefehler
    Label_msg_error = Bitte versuchen Sie es erneut
    Label_header_success = Anmeldung erfolgreich
    Label_msg_success = Sie sind angemeldet als ###USER###
    Label_header_status =
    Label_msg_status =

    ll_welcome_message= Bitte melden Sie sich mit Ihrem Benutzernamen und Passwort an!
    ll_logout_header=Sie sind abgemeldet!
    ll_logout_message=Sie sind aus unserem System abgemeldet. Bitte geben Sie Username und Passwort ein, um sich wieder anzumelden.
    ll_error_header=Fehler bei der Anmeldung
    ll_error_message=Es ist ein Fehler bei der Anmeldung aufgetreten. Haben Sie Benutzername und Passwort korrekt eingegeben? Cookies müssen erlaubt sein!
    ll_success_header=Die Anmeldung war erfolgreich!
    ll_success_message=Sie sind jetzt angemeldet als ‘###USER###’
    ll_status_header=Ihr momentaner Status:
    ll_status_message=Ihr momentaner Status ist:
    cookie_warning=Evtl. sind bei Ihrem Browser Cookies deaktiviert!
    username=Benutzername:
    password=Passwort:
    login=Anmeldem
    permalogin=Immer angemeldet bleiben
    logout=Abmelden
    send_password=Passwort zuschicken
    your_email=Ihre Email-Adresse:
    ll_forgot_header=Passwort vergessen?

    ll_forgot_email_password (
    Ihr Passwort für Seitenname einsetzen

    Hallo %s,
      
    Ihr Benutzername ist "%s"
    Ihr Passwort lautet "%s".
            
    Mit freundlichem Gruß,
    Ihr Team von Seitenname
    )

    ll_forgot_email_nopassword (
    Ihr Passwort
    Hallo %s
    wir finden keinen Benutzer zu der angegebenen Email-Adresse und können Ihnen deshalb kein Passwort senden.Evtl. ist Ihre Email-Adresse falsch geschrieben?
    Sind Sie sicher, das Sie bei uns registriert sind?
    Mit freundlichem Gruß,
    Ihr Team von Seitenname 
    )

    ll_forgot_message (
    Bitte geben Sie die Email-Adresse ein, mit der Sie bei uns registriert sind.
      
    Wir werden Ihnen Ihr Passwort sofort zusenden.
    )

    ll_forgot_message_emailSent=Ihr Passwort wurde Ihnen zugeschickt!
    ll_forgot_header_backToLogin=Zurück zur Anmeldung
    ll_welcome_header=Benutzer anmelden
    username = Benutzer
    password = Passwort
    login = Login
    logout = Abmelden
    send_password = Passwort senden
    your_email = Ihre Email-Adresse:
    forgot_password = Passwort vergessen?


  }
}