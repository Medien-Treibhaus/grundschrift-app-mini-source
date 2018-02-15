/**
 * The child grid
 * @author Jascha Dachtera <jascha.dachtera@googlemail.com>
 */
enyo.kind({
    name:'Grundschrift.Views.Admin.EditChildren',
    kind:'Grundschrift.Views.Admin.BaseView',


    events: {
        onBack: '',
        onChildSelected: ''
    },

    components:[
        {kind:'onyx.Toolbar', classes: "adminToolbar", components:[
            {kind:'ImageButton', type:'Exit', ontap:'doBack'},
            {classes: "view-heading", content: "Benutzer"}
        ]},
        {kind:'onyx.Toolbar', classes: "lastToolbar", components:[
            {kind:'onyx.Button', content:'Benutzer hinzufügen', ontap:'addNewChild'},
            {kind:"onyx.Button", content:"Zum Spiel", ontap:"goToMainMenu"},
        ]},
		{kind:'Grundschrift.Views.ChildGrid', fit:true, onChildSelected: 'childSelected'}
	],

	/**
	 * Fires the onItemSelected event
	 * @param inSender
	 * @param inRow
	 * @protected
	 * @returns void
	 */
	childSelected:function (inSender, inEvent) {
		this.bubble('onChildSelected', {child: inEvent.child});
	},
  goToMainMenu: function() {

      this.bubble('onBackToChildMenu');

  },
    /**
     * Adds a new Child
     * @protected
     * @return void
     */
    addNewChild:function () {
        this.bubble('onChildSelected', {
            child: new Grundschrift.Models.User({
                name:'',
                password:[1, 1, 1],
                imageUrl: null
            })
        });
    }

});
