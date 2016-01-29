$(document).ready(function() {
  $("#createAccount").click(function(){

    //click "CREATE ACCOUNT" ; resume after lunch
    var bank_name = $("#bankName").val();
    var initial_deposit = parseInt($("#bankInitialDeposit").val());

    //if nothing is entered for bank_name field or initial_deposit, send an alert
    if((bank_name === "") || isNaN(initial_deposit)){
      alert("Please enter a value for all fields.");
      $("#bankName").val('')
      parseInt($("#bankInitialDeposit").val(0));
    } else {
    //Creates BankAccount Object
    var bankAccount = new BankAccount(bank_name, initial_deposit);

    $(".bankInfo").hide();
    $(".accountInfo").show();
    $("#accountName").text(bank_name);
    $("#accountBalanceForm").val(initial_deposit);
}
    $("#submitAmount").click(function(){

      //prototype adding deposited money
      BankAccount.prototype.depoMoney = function(){
        return this.initialDeposit = this.initialDeposit + depositDollars;
      }
      // prototype subtracting withdrawn money
      BankAccount.prototype.withdrawMoney = function() {
        return this.initialDeposit = this.initialDeposit - withdrawDollars;
      }

      var depositDollars = parseInt($("#bankDeposit").val());

      var withdrawDollars= parseInt($("#bankWithdraw").val());
      var accountBalanceTextform = parseInt($("#accountBalanceForm").val(bankAccount.depoMoney()));
      var accountBalanceTextform = parseInt($("#accountBalanceForm").val(bankAccount.withdrawMoney()));

      //set the Deposit and Withdraw amounts back to zero after every transaction
      parseInt($("#bankDeposit").val(0));
      parseInt($("#bankWithdraw").val(0));
    });
  });

  $("#logOut").click(function(){

    location.reload();

  });

});
