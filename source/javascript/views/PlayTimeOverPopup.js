/**
 * This popup is displayed when the play time of a child is over.
 * After it is closed the session ends.
 */
enyo.kind({
    name:"Grundschrift.Views.PlayTimeOverPopup",
    kind:"onyx.Popup",
    classes:"playTimeOverPopup",
    autoDismiss:false,
    modal:true,
    centered:true,
    floating:true,
    showing:false,
    scrim: true,
    events:{
        onClose:""
    },
    components:[
        {content:'ZEIT IST UM!', classes:"popupHeadline"},
        {kind:"Image", src: "assets/icons/wecker.png"},
        {content:'Deine Spielzeit ist vorbei! Übe nun weiter mit Stift und Papier!', classes:"text"},
        {content:'OK', kind:'onyx.Button', ontap:'close'}
    ],
    close:function () {
        this.hide();
        this.bubble("onClose");
    }
});
