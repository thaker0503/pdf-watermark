 const form = document.getElementById('uploadPdf')

form.addEventListener('submit',(e) => {
    e.preventDefault();
    const watermark = document.getElementById('watermark')
    const uploadedPdf = document.getElementById('uploadedPdf')
    //  Getting the uploaded file

    const pdf = uploadedPdf.files[0]
    console.log("Uploaded Pdf =>",pdf)
        // uploadedPdf.addEventListener('change',(e) =>{
        //     e.preventDefault();
        // });

    // gETTING WATERMARK TEXT
        console.log(watermark.value)

})