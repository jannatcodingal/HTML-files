const populate = async (value, currency) => {
    let myStr = ""
    const URL = `https://api.currencyapi.com/v3/latest?apikey=cur_live_EZteaHDEuDTE2NABlsLXuWkBlEft3OxctvrRxLMf&base_currency=${currency}`;

    let response = await fetch(URL);
    let rJSON = await response.json();

    document.querySelector(".output").style.display = "block";
    for (let key of Object.keys(rJSON["data"])) {
        myStr += `<tr>
        <td>${key}</td>
        <td>${rJSON["data"][key]["code"] * value}</td>
        <td>${Math.round(rJSON["data"][key]["value"])}</td>
        </tr>`;
    }
    const tableBody = document.querySelector("tbody");
    tableBody.innerHTML = myStr;
};
const btn = document.querySelector(".btn");
btn.addEventListener("click", (e) => {
    e.preventDefault();
    const value = parseInt(document.querySelector("input[name='quantity']").value);
    const currency = document.querySelector("select[name='currency']").value;
    populate(value, currency);
});