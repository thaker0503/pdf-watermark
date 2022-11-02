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

const main = document.querySelector('main')
const submit = document.getElementById('submit')
submit.addEventListener(click,()=>{
    <form id="uploadPdf">
    Upload PDF
    <input type="file" name="" id="uploadedPdf" accept=".pdf" />
    Watermark Text
    Watermark: <input type="text" name="watermark" id="watermark" />
    <input type="submit" value="Submit" />    
</form>
})