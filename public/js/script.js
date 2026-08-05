// ===============================
// Expense Tracker JavaScript
// WAF Lab Session
// ===============================

// Welcome Message
window.addEventListener("load", () => {
    console.log("✅ Expense Tracker Loaded Successfully");
});

// Delete Confirmation
function confirmDelete() {
    return confirm("Are you sure you want to delete this transaction?");
}

// Button Hover Animation
document.querySelectorAll("button").forEach(button => {

    button.addEventListener("mouseenter", () => {
        button.style.transform = "translateY(-3px) scale(1.05)";
    });

    button.addEventListener("mouseleave", () => {
        button.style.transform = "translateY(0) scale(1)";
    });

});

// Input Focus Effect
document.querySelectorAll("input, select").forEach(field => {

    field.addEventListener("focus", () => {
        field.style.boxShadow = "0 0 15px #00e5ff";
    });

    field.addEventListener("blur", () => {
        field.style.boxShadow = "none";
    });

});

// Form Validation
const form = document.querySelector("form");

if(form){

    form.addEventListener("submit",(e)=>{

        const title=document.querySelector("input[name='title']");
        const amount=document.querySelector("input[name='amount']");
        const type=document.querySelector("select[name='type']");

        if(title.value.trim()===""){

            alert("Please Enter Transaction Title");
            title.focus();
            e.preventDefault();
            return;

        }

        if(amount.value==="" || Number(amount.value)<=0){

            alert("Amount should be greater than zero.");
            amount.focus();
            e.preventDefault();
            return;

        }

        if(type.value===""){

            alert("Please Select Transaction Type");
            type.focus();
            e.preventDefault();
            return;

        }

    });

}

// Live Clock (Optional)
const footer=document.querySelector(".footer");

if(footer){

    const clock=document.createElement("p");

    setInterval(()=>{

        const now=new Date();

        clock.innerHTML=
        "🕒 "+
        now.toLocaleTimeString();

    },1000);

    footer.appendChild(clock);

}