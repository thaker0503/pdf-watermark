

// const form = document.getElementById('uploadPdf')

// form.addEventListener('submit',(e) => {
//     e.preventDefault();
//     const watermark = document.getElementById('watermark')
//     const uploadedPdf = document.getElementById('uploadedPdf')
//     //  Getting the uploaded file

//     const pdf = uploadedPdf.files[0]
//     console.log("Uploaded Pdf =>",pdf)
//         // uploadedPdf.addEventListener('change',(e) =>{
//         //     e.preventDefault();
//         // });

//     // gETTING WATERMARK TEXT
//         console.log(watermark.value)

// })

const main = document.querySelector('main')
const registerBtn = document.getElementById('register')
registerBtn.addEventListener('click',() => {
    main.innerHTML = `<form action="" id="regForm">
    Email: <input type="email" name="" id="email">
    Password: <input type="password" name="" id="password">
    Confirm Password: <input type="password" name="" id="confPassword">
    <input type="submit" value="Submit" id='submit'>
    Not registered yet? <a href="#login" id="login">click here</a>
</form>`
})