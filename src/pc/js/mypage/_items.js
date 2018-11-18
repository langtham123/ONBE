module.exports  = function (e) {

     // e.find('form.frmItemEditNote').hide();


    autosize( e.find('form.frmItemEditNote textarea'));

    e.find('a.itemCreate').click(function(element) {
        element.preventDefault();
        $(this).hide();
        $(this).parent().find('a.itemDelete').hide();
        $(this).parent().find('p.description').hide();
        $(this).parent().find('form.frmItemEditNote').show();
    });

    e.find('a.itemEdit').click(function(element) {
        element.preventDefault();
        $(this).hide();
        $(this).parent().find('a.itemDelete').hide();
        $(this).parent().find('p.description').hide();
        $(this).parent().find('form.frmItemEditNote').show();
    });


    e.find('button.itemDecision').click(function(element) {
        element.preventDefault();
        $(this).parent().hide();
        $(this).parent().parent().find('a.itemDelete').show();
        $(this).parent().parent().find('a.itemEdit').show();
        $(this).parent().parent().find('a.itemCreate').show();
        $(this).parent().parent().find('p.description').show();

    });

    e.find('button.itemCancel').click(function(element) {
        element.preventDefault();
        $(this).parent().hide();
        $(this).parent().parent().find('a.itemDelete').show();
        $(this).parent().parent().find('a.itemEdit').show();
        $(this).parent().parent().find('a.itemCreate').show();
        $(this).parent().parent().find('p.description').show();
    });

};
