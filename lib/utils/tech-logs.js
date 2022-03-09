

const logos = [
    "https://cdn.discordapp.com/attachments/792429986094907392/814375053424721921/bomb.gif",
    "https://cdn.discordapp.com/attachments/792429986094907392/814375040392626186/cowboy_hat_face.gif",
    "https://cdn.discordapp.com/attachments/792429986094907392/814375060453457952/smiling_face_with_sunglasses.gif",
    "https://cdn.discordapp.com/attachments/792429986094907392/814375048986755132/fireworks.gif",
    "https://cdn.discordapp.com/attachments/792429986094907392/814375068083159072/partying_face.gif",
    "https://cdn.discordapp.com/attachments/792429986094907392/812753229300367370/icons8-material-ui-50.png",
    "https://cdn.discordapp.com/attachments/792429986094907392/812753233042866236/icons8-apollo-50.png",
    "https://cdn.discordapp.com/attachments/792429986094907392/814376567924457492/hot_face.gif",
    "https://cdn.discordapp.com/attachments/792429986094907392/811865640423915550/icons8-google-firebase-console-50.png",
    "https://cdn.discordapp.com/attachments/792429986094907392/810879720320794684/man_facepalming.gif"
]

export default () => logos[Math.floor(Math.random()*logos.length)]

