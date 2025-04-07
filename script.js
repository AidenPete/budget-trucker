let transactions = [];
window.onload = function() {
    loadTransactionCookies();
}
// creating cookie
function saveTransactionTocookie() {
    document.cookie = `transactions=${JSON.stringify(transactions)}; path=/; max-age=3153600000`
}
// loads/ save cookies in thr variable
function loadTransactionCookies(){
    const cookie = document.cookie.split('; ').find(row => row.startsWith('transactions='));
    if (cookie) {
        transactions = JSON.parse(cookie.split('=')[1]);
        transactions = [];
    }
}